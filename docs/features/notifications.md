---
sidebar_position: 8
---

# Notifications

## Discord Notifications

Printago can send real-time notifications about your print farm to Discord. Get instant updates about print completions, errors, and other important events right in your Discord channels.

<img src="/img/screenshot_000400.png" width="525" alt="discord header" />

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
    <img src="/img/screenshot_000399.png" width="700" alt="discord 1" />
5. Select which events you want notifications for:
    *    Job started	
    *    Job succeeded	
    *    Job cancelled	
    *    Job failed	
    *    Printer HMS error	
    *    Printer HMS warning	
    *    Printer offline	
    *    Printer online

    Need help printing with Notifications? Join our [Discord community](https://discord.gg/RCFA2u99De) or reach us at support@printago.io