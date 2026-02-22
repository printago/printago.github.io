
# Authentication & Quotas

## Authentication

### Required Headers

Every API request must include two headers:

```
authorization: ApiKey YOUR_API_KEY
x-printago-storeid: YOUR_STORE_ID
```

- **`authorization`** — your API key, prefixed with `ApiKey `.
- **`x-printago-storeid`** — the ID of the organization (store) you are accessing. You can find this on the API Keys page.

Requests missing either header will receive a `401 Unauthorized` response.

### How Permissions Apply

An API key's effective permissions are the union of its directly assigned permissions and any permissions inherited from assigned roles. If a key attempts an action it does not have permission for, the request returns `403 Forbidden`.

Full Access keys behave as Store Owner and can perform any action.

## Rate Limits

API access is rate-limited across two sliding windows:

| Window | Limit |
|--------|-------|
| Per minute | 60 requests |
| Per hour | 600 requests |

When you exceed a limit, requests return **HTTP 429 Too Many Requests** until the window resets. The response includes a `Retry-After` header indicating how long to wait.

:::tip
If these limits are too restrictive for your use case, contact us to discuss higher quotas.
:::

## Real-time Data with MQTT

For real-time printer updates, Printago provides MQTT access. This is the same data stream that powers the Printago web dashboard — giving you immediate access to printer states, temperatures, progress, and more.

### Connection Details

| Setting | Value |
|---------|-------|
| **MQTTS** | `mqtts://realtime.printago.io:8883` |
| **MQTT over WebSockets** | `wss://realtime.printago.io:9001` |
| **Username** | Your store ID |
| **Password** | Your API key |
| **Client ID** | Must start with `apiclient_` (e.g. `apiclient_YOUR_STORE_ID_unique_suffix`) |

### Subscription Topics

- **Printer stats** — real-time temperature, progress, and state updates for each printer
- **Entity change events** — notifications when entities (parts, orders, jobs, etc.) are created, updated, or deleted

See the API Keys page in the Printago app for full topic documentation and interactive examples.

## Swagger / OpenAPI Specification

The most current API specification is always available from the API Keys page via the **Download Swagger JSON** button, or directly at:

- **[Download OpenAPI/Swagger Specification](/printago-api-swagger.json)** — OpenAPI 3.1 format

You can import this specification into tools like:
- [Swagger Editor](https://editor.swagger.io/)
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Any OpenAPI-compatible tool

Need help? Join our [Discord community](https://discord.gg/RCFA2u99De) for support!
