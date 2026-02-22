
# API Keys

## Key Concepts

API keys let external applications authenticate with the Printago API on behalf of your organization. Each key can be scoped to a specific set of permissions, so you can grant integrations only the access they actually need.

- **Full Access** keys inherit the Store Owner's permissions and can do everything the API supports. Only Store Owners can create Full Access keys.
- **Custom Permissions** keys are scoped to a specific set of roles and/or individual permissions. The key can never do more than the permissions you assign to it — and you can only assign permissions that you yourself hold. This prevents privilege escalation: a Viewer cannot create an Admin-level API key.
- **IP Allowlists** restrict which IP addresses or CIDR ranges are allowed to use a key. Requests from any other IP are rejected, even if the key is otherwise valid. This is a strong defense-in-depth measure for production integrations.
- **Managed keys** are created automatically by integrations (such as Shopify). They cannot be edited or deleted manually — they are managed by the integration that created them and are removed when the integration is disconnected.

:::important Privilege escalation prevention
You can only assign permissions to an API key that you yourself have. If you hold the Viewer role, you cannot create a key with Admin permissions. Store Owners are the only exception — they can assign any permission.
:::

## Managing API Keys

### Viewing Your Keys

Navigate to **API Keys** from the sidebar under **Settings**. The key list shows:

- **Name** — the label you gave the key
- **API Key** — the first few characters of the key (masked for security)
- **Status** — whether the key is currently active
- **Created** — when the key was created
- **Badges** — "IP-restricted" if an IP allowlist is configured; "Managed by [Service]" for integration-managed keys

<img src="/img/api-keys/api-keys-list.png" width="800" alt="API Keys list" />

### Creating a Key

1. Click **Create API Key**
2. Enter a descriptive **Name** (e.g. "Home Assistant", "Production Script")
3. Choose an **Access Level**:
   - **Custom Permissions** — select specific roles and/or individual permissions
   - **Full Access** — grants all permissions (Store Owner only)
4. Optionally configure an **IP Allowlist** — enter one IP address or CIDR range per line (e.g. `192.168.1.0/24`, `203.0.113.42`)
5. Click **Create API Key**

<img src="/img/api-keys/api-keys-create.png" width="800" alt="Create API Key page" />

:::warning
Your API key is only displayed once upon creation. Copy it immediately and store it in a secure location. It cannot be retrieved later.
:::

### Editing a Key

Click the edit icon on any key row to change its name, permissions, roles, IP allowlist, or active status. Managed keys (created by integrations like Shopify) cannot be edited.

### Deactivating vs. Deleting

- **Toggle status** — temporarily disable a key without deleting it. Useful for troubleshooting or temporary maintenance.
- **Delete** — permanently revoke the key. This cannot be undone. Any integration using this key will immediately lose access.

### IP Allowlists

When an IP allowlist is configured on a key, only requests originating from those addresses are accepted. All other requests are rejected with a 403 error.

- Supports IPv4 and IPv6 addresses
- Supports CIDR notation for ranges (e.g. `10.0.0.0/8`, `2001:db8::/32`)
- A single IP address is treated as a `/32` (IPv4) or `/128` (IPv6) range
- Leave the allowlist empty to allow requests from any IP

This is recommended for production integrations where the calling server has a known, static IP address.

## Related Topics

- [Authentication & Quotas](authentication-and-quotas.md) — required headers, rate limits, and MQTT access
- [Examples](examples.md) — code samples in cURL, JavaScript, and Python
- [Roles & Permissions List](/docs/organization/permissions) — full reference of all permissions you can assign to a key

Need help with API keys? Join our [Discord community](https://discord.gg/RCFA2u99De) for support!
