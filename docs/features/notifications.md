---
sidebar_position: 7
---

# Notifications

## Key Concepts

- **Discord Webhooks** -- Send real-time notifications about print farm events directly to a Discord channel using a webhook URL.
- **Custom Webhooks** -- For advanced integrations, send event payloads to any HTTPS endpoint. This feature requires a Commercial subscription and API key.
- **Event Selection** -- Choose which events trigger notifications: job started, succeeded, cancelled, failed, printer errors, warnings, and online/offline status changes.
- **API Key Security** -- Custom webhook requests include an `X-API-Key` header for authentication. Keep this key confidential and use at least 32 characters.
- **Payload Format** -- Custom webhook notifications are sent as POST requests with a JSON body containing event details.

## Discord Notifications

Printago can send real-time notifications about your print farm to Discord. Get instant updates about print completions, errors, and other important events right in your Discord channels.

<img src="/img/features/discord.png" width="525" alt="discord header" />

## Setup Steps

### 1. Create a Discord Webhook

1. Open Discord and navigate to the server where you want notifications.  
2. Right-click the channel and select `Edit Channel` or click the `⚙️` icon.
3. Click `Integrations` in the left sidebar
4. Click `Create Webhook`
5. Give your webhook a name (e.g. "Printago Notifications")
6. Copy the webhook URL - you'll need this for Printago

<img src="/img/discord1.gif" width="675" alt="discord 1" />
:::caution
Keep your webhook URL private! Anyone with this URL can post messages to your channel.
:::

### 2. Configure Printago

1. In Printago, go to `Settings` > `Account`
2. Click `Configure` in the "Notifications" tile.
3. Paste your webhook URL
4. Click `Enable`
5. Select which events you want notifications for:
<div className="margin-left--lg">
*    Job started	
*    Job succeeded	
*    Job cancelled	
*    Job failed	
*    Printer HMS error	
*    Printer HMS warning	
*    Printer offline	
*    Printer online
</div>
## Webhook Notifications 💎

For advanced integrations, Printago supports custom webhook notifications that can send events to any HTTPS endpoint. Since webhook notifications require an API key, this feature is restricted to commercial accounts.

### Setup Steps

1. Set up an HTTPS endpoint on your server that can receive webhook notifications
2. Configure your endpoint to accept POST requests
3. Your endpoint should validate the `X-API-Key` header to ensure the request is from Printago. This key is a **secret value** that should be kept confidential
4. Enter your HTTPS endpoint URL in Printago and click "Enable" to start receiving notifications

### Webhook Payload Format

When an event occurs, Printago will send a request to your webhook with the following:

- **HTTP header**: `X-API-Key` with the value you configured
- **JSON payload** with event details in the request body

### API Key Security

The API key is automatically generated for you, but you can customize it if needed. Remember to:

- Keep your API key confidential and secure
- You can change it at any time, but ensure any new key remains sufficiently strong (at least 32 characters)
- Update your webhook receiver if you change the key

## Troubleshooting

### Discord Notifications Not Arriving

1. Verify the webhook URL is correct -- re-copy it from Discord's channel integrations settings
2. Check that the webhook is still active in Discord (webhooks can be deleted or disabled)
3. Confirm the specific event types you want are enabled in Printago's notification settings
4. Test by triggering a known event (e.g., start a test print on a virtual printer)

### Custom Webhook Not Receiving Events

1. Confirm your endpoint is publicly accessible over HTTPS
2. Check that your endpoint responds with a 2xx status code -- Printago may stop sending to endpoints that consistently fail
3. Verify the `X-API-Key` header matches what your server expects
4. Check your server logs for incoming POST requests from Printago

### Duplicate Notifications

1. Check that you have not configured multiple webhooks pointing to the same channel or endpoint
2. If using both Discord and custom webhooks, both will fire for the same events -- this is expected behavior

## FAQ

**Q: Do I need a Commercial subscription for Discord notifications?**
A: No. Discord webhook notifications are available on all account types. Custom (HTTPS endpoint) webhook notifications require a Commercial subscription.

**Q: Can I send notifications to multiple Discord channels?**
A: Currently, Printago supports one Discord webhook URL per account. To post to multiple channels, you can use a custom webhook endpoint that forwards to multiple Discord webhooks.

**Q: What format does the custom webhook payload use?**
A: Printago sends a POST request with a JSON body containing event details and an `X-API-Key` header for authentication. Check the webhook settings page for the specific payload structure.

**Q: Will I get notified about jobs started from external slicers?**
A: Notifications are triggered for events on all monitored printers, including jobs started from external sources like Bambu Studio or OrcaSlicer.

Need help with Notifications? Join our [Discord community](https://discord.gg/RCFA2u99De) or reach us at support@printago.io