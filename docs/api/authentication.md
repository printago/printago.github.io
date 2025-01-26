---
sidebar_position: 2
---

# Authentication

Currently API Key provisioning is a manual process.  Please email support@printago.io or join our [Discord community](https://discord.gg/RCFA2u99De) to connect with our developers.

## Required HTTPS Headers

You must include 2 headers in your requests for them to be authenticated properly:

`authorization: ApiKey YOUR_API_KEY`  
`x-printago-storeid: YOUR_STORE_ID`

## Rate Limits

API access is rate-limited to 600 requests over a 10 minute window, which works out to an average of 1 request per second.  If you exceed this, your requests will fail until the time window expires.  

Each API response includes 2 headers:

`x-ratelimit-remaining` - the remaining number of API calls left in your 10 minute window before they reset  
`x-ratelimit-reset` - how many seconds remain before your rate limit window resets

:::warning
API access may be revoked if rate limits are constantly exceeded or any other abusive behavior is detected.
:::
