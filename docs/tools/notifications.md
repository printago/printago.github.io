
# Notifications

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
## Webhook Notifications

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

Need help printing with Notifications? Join our [Discord community](https://discord.gg/RCFA2u99De) or reach us at support@printago.io