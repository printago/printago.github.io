---
sidebar_position: 2
---

# Authentication

Currently API Key provisioning is a manual process.  Please email support@printago.io or join our [Discord community](https://discord.gg/RCFA2u99De) to connect with our developers.

## Required HTTPS Headers

You must include 2 headers in your requests for them to be authenticated properly:

`authorization: ApiKey YOUR_API_KEY`  
`x-printago-storeid: YOUR_STORE_ID`

:::warning
API access may be revoked if abusive behavior is detected.
:::
