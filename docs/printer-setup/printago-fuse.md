---
sidebar_position: 3
---

# Printago Fuse

:::info Beta Software
Printago Fuse is currently in private beta and not yet publicly available. This documentation is for beta testers and early access participants.
:::

Printago Fuse is a local client that bridges your Bambu Lab 3D printers to Printago.

![Fuse with Configured Printers](../images/fuse-printers-configured.png)

## Prerequisites

Before setting up Fuse, ensure your Bambu Lab printers have:
- **LAN Mode** enabled
- **Developer Mode** enabled

These settings can be configured in your printer's settings menu. Fuse connects via MQTT over TLS on port 8883.

## Activation

When you first launch Fuse, you'll need to connect it to your Printago account.

### Activation Process

1. **Start Fuse Client**: Launch the Fuse application. You'll see an activation screen displaying a unique activation code (e.g., `SQMA-VR2N`) and an expiration timer.

![Fuse Activation Screen](../images/fuse-initial-page.png)

2. **Activate in Printago**: You have two options to complete activation:

   **Option A: Click the activation link**
   - Click the "Open Printago to Activate" button on the Fuse screen
   - This will open your browser to `app.printago.io/activate` with the code pre-filled

   **Option B: Manual entry**
   - Navigate to `app.printago.io/activate` in your browser
   - Enter the activation code displayed in Fuse
   - Click activate

3. **Confirmation**: Once activated, both the Printago web interface and your Fuse client will display "Activation Successful!" The Fuse interface will automatically update to show the status dashboard.

![Activation Successful](../images/fuse-activation-successful.png)

4. **Request New Code**: If your activation code expires (codes are valid for 15 minutes), click "Request New Activation Code" to generate a fresh one.

## Status Dashboard

After activation, the Fuse Status page displays three key indicators:

- **Printers**: Shows the count of configured printers and their connection status
- **Fuse Client (LAN)**: Indicates whether the local Fuse service is running
- **Printago (Cloud)**: Shows connection status to the Printago cloud platform

All three indicators should show positive status (Connected/Running) for full functionality.

![Fuse Status Dashboard](../images/fuse-status-page.png)

## Adding Printers

Fuse offers three methods to add your Bambu Lab printers. Navigate to the **Printers** page using the top navigation menu.

![Printers Page](../images/fuse-printers-page.png)

### Method 1: Auto-Scan (Recommended)

The fastest way to discover and add printers on your local network.

1. Click the **Auto-Scan** button in the top right
2. Fuse will automatically scan your local network for compatible Bambu Lab printers
3. Discovered printers will be displayed with their IP address, model, and serial number
4. Select the printers you want to add and provide their access codes
5. Click "Add Selected Printers" to complete the setup

### Method 2: Subnet Search

If auto-scan doesn't find your printers (e.g., they're on a different subnet), use a custom subnet scan.

1. Click the dropdown arrow next to **Auto-Scan**
2. Select **Scan Custom Subnet**
3. Enter your subnet in CIDR notation (e.g., `192.168.0.0/24`)
4. Click **Scan**
5. Fuse will search the specified subnet for Bambu Lab printers
6. Follow the same selection process as auto-scan

**Common subnet examples:**
- `192.168.0.0/24` - Scans 192.168.0.1 through 192.168.0.254
- `192.168.1.0/24` - Scans 192.168.1.1 through 192.168.1.254
- `10.0.1.0/24` - Scans 10.0.1.1 through 10.0.1.254

![Subnet Search](../images/fuse-subnet-scan.png)

### Method 3: Add Manually

For printers that aren't discovered automatically, or when you prefer manual configuration.

1. Click **Add Manually** in the top right
2. Fill in the printer details:
   - **Printer Name**: A friendly name for your printer (e.g., "Workshop X1 Carbon")
   - **IP Address**: The local network IP address of your printer (e.g., `192.168.0.30`)
   - **Model**: Select your printer model from the dropdown:
     - X1 Carbon
     - X1
     - P1P
     - P1S
     - A1 Mini
     - A1
     - Other
   - **Device Serial Number**: This will be automatically extracted once you enter a valid IP address
   - **Access Code**: Your printer's 8-digit access code (found in printer settings)
3. Click **Add Printer** to save the configuration

![Manual Printer Configuration](../images/fuse-add-printer-manual.png)

**Example printer configurations:**

| Printer Name | IP Address | Model | Access Code | Serial Number |
|--------------|------------|--------|-------------|---------------|
| Anthracite | 192.168.0.30 | X1 Carbon | 12345678 | 00M00A262800043 |
| Bituminous | 192.168.0.115 | P1S | 87654321 | 01P09C490600431 |
| Slate | 192.168.0.11 | P1S | 11223344 | 01P09C481301413 |

## Managing Printers

### Configured Printers List

The Printers page displays all your configured printers with:
- Printer name and model
- IP address and connection status
- Serial number
- Current temperature readings
- AMS filament status
- MQTT connection timing

![Configured Printers](../images/fuse-printers-configured.png)

### Editing Printer Settings

Click the edit icon next to any printer to modify its configuration. You can update:
- Printer name
- IP address (if the printer's network address changes)
- Access code

### Removing Printers

Click the remove icon to delete a printer from your Fuse configuration. This only removes the printer from Fuse; it doesn't affect the physical printer or any data in Printago.

## Settings

Access the Settings page from the top navigation menu to manage your Fuse client.

![Settings Page](../images/fuse-settings-page.png)

### Client Management

**Restart Fuse Client**
- Restart the Fuse client to reload configuration and cycle connections
- This will temporarily disconnect from all printers and the gateway
- Use this when troubleshooting connection issues or after configuration changes
- Click the **Restart** button to initiate

### Danger Zone

The following operations are destructive. Use with caution.

**Clear Printers**
- Removes all printer configurations from this Fuse client
- Disconnects from all printers and clears them from the local database
- Your Printago connection remains active
- You'll need to re-add all printers using one of the methods above
- Click **Clear Printers** to execute

**Deactivate**
- Disconnects this Fuse client from your Printago account
- Preserves all printer configurations locally
- Your printers remain configured but won't sync with Printago
- You'll need to reactivate (using the activation process) to sync with Printago again
- Use this when temporarily disconnecting Fuse or switching accounts
- Click **Deactivate** to disconnect

**Reset**
- Complete reset: disconnects from Printago AND removes all printer configurations
- This is the most destructive option
- Essentially returns Fuse to its initial state
- You'll need to reactivate and reconfigure all printers from scratch
- Use this when setting up a new account or troubleshooting severe issues
- Click **Reset** to execute

## Deactivation

To disconnect your Fuse client from Printago:

1. Navigate to **Settings** in the top navigation menu
2. Scroll to the **Danger Zone** section
3. Choose your deactivation method:
   - **Deactivate**: Preserves printer configurations for future use
   - **Reset**: Removes everything and starts fresh
4. Confirm the action when prompted

After deactivation, you can reactivate at any time by following the [Activation](#activation) process again.

## Troubleshooting

### Printers Not Discovered

If auto-scan isn't finding your printers:

1. Verify printers are on the same network as your Fuse client
2. Confirm LAN Mode and Developer Mode are enabled on the printer
3. Try a custom subnet search with your network's subnet
4. As a last resort, add the printer manually if you know its IP address

### Connection Issues

If Fuse shows as disconnected from Printago:

1. Check your internet connection
2. Verify the Fuse client is running (check Status page)
3. Try restarting the Fuse client from Settings
4. If issues persist, deactivate and reactivate

### Printer Won't Connect

If a configured printer shows as disconnected:

1. Verify the printer is powered on and connected to the network
2. Check that the IP address hasn't changed (some networks use dynamic IPs)
3. Confirm the access code is correct
4. Ensure LAN Mode and Developer Mode are enabled
5. Try removing and re-adding the printer

## Technical Details

- **Protocol**: MQTT over TLS (port 8883)
- **Network**: Local network connection required
- **Activation**: Time-limited codes (15-minute expiration)
- **Supported Models**: All current Bambu Lab FDM printers (X1 Carbon, X1, P1S, P1P, A1, A1 Mini)

## Support

For additional help, visit [docs.printago.io/fuse](https://docs.printago.io/fuse) or contact Printago support.
