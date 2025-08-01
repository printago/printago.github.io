---
sidebar_position: 7
---

# API Documentation 💎

Build powerful integrations with Printago! Our REST API lets you automate your Bambu Lab print farm operations programmatically. 🚀

## What's Possible with Our API
The Printago API is the same one that Printago uses on app.printago.io.  

Connect your systems directly to Printago and:
- List and manage your connected printers
- Upload 3D models and create SKUs
- Submit print jobs to your queue
- Monitor print status and progress
- Access print history and analytics
- Realtime access to printer state and entity change events

## Getting Access

To use the Printago API, you must be on a commercial account (even a free one).

### Creating API Keys

1. Go to `Settings` > `Integrations` > `API Keys`
2. This will open the API Key Portal where you can:
   - Create and manage your API keys
   - View usage statistics
   - Download the up-to-date Swagger JSON specification

<img src="/img/features/api_key_portal.png" width="800" alt="API Keys Portal" />

### API Usage Guide

The API Key Portal provides everything you need to get started:

**Code Examples**
The portal includes code examples in multiple languages (cURL, JavaScript, Python) to help you get started quickly.

**Real-time Data with MQTT**
For real-time printer updates, you can use MQTT over WebSockets:
- **Endpoint**: `wss://realtime.printago.io`
- **Username**: Your store ID
- **Password**: Your API key
- **Client ID**: Must start with `apiclient_` (e.g., `apiclient_YOUR_STORE_ID_UNIQUE_SUFFIX`)

**Swagger Documentation**
The most current API specification is always available via the "Download Swagger JSON" button in the portal.

## Authentication

### Required Headers

You must include these headers in your requests for proper authentication:

```
authorization: ApiKey YOUR_API_KEY
x-printago-storeid: YOUR_STORE_ID
```

### Rate Limits

API access is rate-limited in 2 buckets: up to 60 requests per minute and 600 requests per hour.  If you exceed this, your requests will fail with an HTTP 429 status until the time window expires.  If for some reason the rate limits are too restrictive for you, please contact us to further discuss your use case.

## Examples
### Python - One-off printing of an STL via API

[Github Gist -https://gist.github.com/nsantorello/9a54fe603fc07e54d72ff668a089296f](https://gist.github.com/nsantorello/9a54fe603fc07e54d72ff668a089296f)

In the gist, there are a few additional variables that need to be set:

- `YOUR_PART_ID` - click on your part in the Parts page and look at the url, it should end in `/parts/YOUR_PART_ID`
  - Example: for URL `https://app.printago.io/parts/c8x2dorgp40blck610w4bgg4` the Part ID is `c8x2dorgp40blck610w4bgg4`
- `YOUR_PRINTER_ID` - click on your printer in the Printers page and look at the url, it should end in `/printers/YOUR_PRINTER_ID`
- `TAG1` and `TAG2` - these are tags (case sensitive) the printer needs to have in order to match a print job to it. They can be anything you want. The tags are pipe-delimited -- this character: `|`
- `PRINT_JOB_NAME` - this is just whatever you want to see it show up as in the print queue, e.g. an order number

## Support

Building something cool with Printago? Our team is here to help! Join our [Discord community](https://discord.gg/RCFA2u99De) to connect with our developers and other print farm automation enthusiasts.
