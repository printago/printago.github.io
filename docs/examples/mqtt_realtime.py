#!/usr/bin/env python3
"""
Printago MQTT Realtime Example

Demonstrates how to connect to Printago's MQTT broker and receive realtime
entity updates for your store. This example monitors all entity types
(printers, jobs, parts, materials, etc.) and displays changes as they occur.

Requirements:
    pip install paho-mqtt

Usage:
    1. Set your API_KEY and STORE_ID below
    2. Run: python printago_mqtt_example.py
"""

import json
import sys
import uuid
import paho.mqtt.client as mqtt

# Configuration - Replace with your credentials
API_KEY = "YOUR_API_KEY_HERE"
STORE_ID = "YOUR_STORE_ID_HERE"


def on_connect(client, userdata, flags, rc):
    """Callback when connected to MQTT broker."""
    if rc == 0:
        print(f"✅ Connected to Printago MQTT broker")
        print(f"📡 Subscribing to: {userdata['topic']}\n")
        client.subscribe(userdata['topic'])
        print("👀 Monitoring for entity changes...\n")
    else:
        print(f"❌ Connection failed with code {rc}", file=sys.stderr)


def on_disconnect(client, userdata, rc):
    """Callback when disconnected from MQTT broker."""
    if rc != 0:
        print(f"⚠️  Unexpected disconnection (code {rc}). Reconnecting...", file=sys.stderr)


def on_message(client, userdata, msg):
    """Callback when a message is received."""
    try:
        payload = json.loads(msg.payload.decode('utf-8'))

        entity_type = payload.get("entityType")
        action = payload.get("action")

        if not entity_type or not action:
            return

        entities = payload.get("entities", {})
        changes = payload.get("changes", {})

        # Process each entity in the message
        for entity_id, entity_data in entities.items():

            if action == "DELETE":
                print(f"🗑️  {entity_type} → DELETE → {entity_id}")

            elif action == "INSERT":
                print(f"➕ {entity_type} → CREATE → {entity_id}")

            elif action == "UPDATE":
                # Get the specific changes for this entity
                entity_changes = changes.get(entity_id, {})

                if entity_changes:
                    changed_fields = list(entity_changes.keys())
                    print(f"📝 {entity_type} → UPDATE → {entity_id} [{', '.join(changed_fields)}]")
    except json.JSONDecodeError as e:
        print(f"⚠️  Failed to parse message: {e}", file=sys.stderr)
    except Exception as e:
        print(f"⚠️  Error processing message: {e}", file=sys.stderr)


def main():
    """Main function to run the MQTT monitor."""

    # Validate configuration
    if API_KEY == "YOUR_API_KEY" or STORE_ID == "YOUR_STORE_ID":
        print("❌ Error: Please set your API_KEY and STORE_ID at the top of this file.")
        print("\nEdit the following lines:")
        print('  API_KEY = "YOUR_API_KEY"')
        print('  STORE_ID = "YOUR_STORE_ID"')
        sys.exit(1)

    # MQTT Configuration
    MQTT_HOST = "realtime.printago.io"
    MQTT_PORT = 443
    MQTT_WS_PATH = "/mqtt"
    MQTT_TOPIC = f"stores/{STORE_ID}/entities/#"

    # Client ID must start with 'apiclient_'
    CLIENT_ID = f"apiclient_{STORE_ID}_{uuid.uuid4().hex[:8]}"

    print("=" * 60)
    print("PRINTAGO MQTT REALTIME MONITOR")
    print("=" * 60)
    print()
    print(f"Store ID: {STORE_ID}")
    print(f"Client ID: {CLIENT_ID}")
    print(f"Endpoint: wss://{MQTT_HOST}:{MQTT_PORT}{MQTT_WS_PATH}")
    print()

    # Set up MQTT client for WebSockets
    client = mqtt.Client(
        client_id=CLIENT_ID,
        transport="websockets",
        protocol=mqtt.MQTTv311,
        userdata={'topic': MQTT_TOPIC}
    )

    # Authentication
    client.username_pw_set(STORE_ID, API_KEY)

    # Enable TLS for secure WebSocket connection
    client.tls_set()

    # Configure WebSocket path
    client.ws_set_options(path=MQTT_WS_PATH)

    # Set callbacks
    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.on_message = on_message

    try:
        # Connect to broker
        print(f"🔌 Connecting to MQTT broker...")
        client.connect(MQTT_HOST, MQTT_PORT, keepalive=60)

        # Start the network loop
        print("Press Ctrl+C to stop\n")
        client.loop_forever()

    except KeyboardInterrupt:
        print("\n\n👋 Shutting down gracefully...")
        client.disconnect()
        sys.exit(0)

    except Exception as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
