---
sidebar_position: 9
title: "API Documentation"
---

:::info New Developer Documentation
Check out our new developer documentation website at [developers.printago.io](https://developers.printago.io) for the latest API guides, tutorials, and references.
:::

# API Documentation

:::tip Commercial Feature
API access requires a Commercial subscription (the first production slot is free). [Learn more](/docs/settings/subscription-management)
:::

Build powerful integrations with Printago. The REST API lets you automate your Bambu Lab print farm operations programmatically.

## Key Concepts

- **API Keys** -- Generated in **Settings** > **Integrations** > **API Keys**. Each key is tied to your store and used for authenticating all API requests.
- **Authentication Headers** -- Every request must include `authorization: ApiKey YOUR_API_KEY` and `x-printago-storeid: YOUR_STORE_ID`.
- **Rate Limits** -- API access is rate-limited to 60 requests per minute and 600 requests per hour. Exceeding these limits returns HTTP 429 until the window resets.
- **Swagger/OpenAPI Specification** -- A downloadable OpenAPI 3.1 spec is available for use with Swagger Editor, Postman, Insomnia, and other tools.
- **Real-Time Data via MQTT** -- For live printer updates, connect to `wss://realtime.printago.io` using your store ID and API key over MQTT WebSockets.
- **Same API as the App** -- The Printago API is the same one used by app.printago.io, so anything you can do in the web interface can be done via the API.

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
The most current API specification is always available via the "Download Swagger JSON" button in the portal, or you can download it directly here:

- **[Download OpenAPI/Swagger Specification](/printago-api-swagger.json)** - Full API specification in OpenAPI 3.1 format

You can import this specification into tools like:
- [Swagger Editor](https://editor.swagger.io/) - Paste the contents to view interactive documentation
- [Postman](https://www.postman.com/) - Import the JSON file to create a collection
- [Insomnia](https://insomnia.rest/) - Import for API testing
- Any OpenAPI-compatible tool

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

## Troubleshooting

### API Requests Returning 401 Unauthorized

1. Verify both required headers are included: `authorization: ApiKey YOUR_API_KEY` and `x-printago-storeid: YOUR_STORE_ID`
2. Check that the API key has not been revoked or regenerated -- if you regenerated a key, update it in your code
3. Confirm your account has an active Commercial subscription

### API Requests Returning 429 Too Many Requests

1. You have exceeded the rate limit (60 requests/minute or 600 requests/hour)
2. Implement exponential backoff or add delays between requests
3. If the default rate limits are too restrictive for your use case, contact Printago support to discuss your requirements

### MQTT WebSocket Not Connecting

1. Use the correct endpoint: `wss://realtime.printago.io`
2. Ensure the client ID starts with `apiclient_` (e.g., `apiclient_YOUR_STORE_ID_UNIQUE_SUFFIX`)
3. Use your store ID as the username and API key as the password
4. Verify your API key is active and your Commercial subscription is current

### Swagger Import Issues

1. Download a fresh copy of the Swagger JSON from the API Key Portal
2. Verify the file is valid JSON (not truncated or corrupted)
3. If using Postman, use the "Import" function and select the JSON file directly

## FAQ

**Q: Do I need a paid subscription to use the API?**
A: You need a Commercial account, but the first production slot is free. This means you can access the API at no cost with a single production slot.

**Q: Where do I find my Store ID?**
A: Your Store ID is available in the API Key Portal at **Settings** > **Integrations** > **API Keys**. It is displayed alongside your API keys.

**Q: Can I use the API to send print jobs to specific printers?**
A: Yes. The API allows you to submit print jobs with tag-based routing that matches printers based on their assigned tags, model, and nozzle configuration.

**Q: Is there a webhook for real-time events, or do I need to poll?**
A: For real-time data, use the MQTT WebSocket connection at `wss://realtime.printago.io`. You can also configure custom webhook notifications for specific events (see [Notifications](/docs/features/notifications)).

**Q: What programming languages are supported?**
A: The API is language-agnostic -- any language that can make HTTP requests works. The API Key Portal includes code examples in cURL, JavaScript, and Python to help you get started.

## Support

Building something cool with Printago? Our team is here to help! Join our [Discord community](https://discord.gg/RCFA2u99De) to connect with our developers and other print farm automation enthusiasts.
