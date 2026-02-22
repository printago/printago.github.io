
# Audit Log

The Audit Log provides a chronological record of all significant actions taken within your organization — who did what, when, from where, and what changed. Use it to investigate incidents, verify compliance, and understand how your team interacts with Printago.

:::info Beta
Audit logging is currently in beta and available for free on all commercial accounts. It will become a paid feature in a future update.
:::

## Availability

- **Plan requirement** — Commercial accounts only
- **Permission** — Requires the `audit.log.view` permission (included in the Admin role by default)
- **Retention** — Logs are retained for **30 days** and automatically cleaned up after that

## What's Tracked

Every auditable operation records:

- **What** happened (action type and field-level changes)
- **Who** did it (user, API key, webhook, system process, or scheduler)
- **Where** it came from (web UI, API, webhook, CLI, scheduler, or system)
- **When** it occurred
- **Request context** — IP address, user agent, correlation ID, and optional reason

### Action Types

| Action | Description |
|--------|-------------|
| `create` | Single entity created |
| `update` | Single entity updated |
| `delete` | Single entity deleted |
| `bulk_create` | Multiple entities created in one operation |
| `bulk_update` | Multiple entities updated in one operation |
| `bulk_delete` | Multiple entities deleted in one operation |
| `login` | User logged in |
| `logout` | User logged out |
| `export` | Data exported |
| `import` | Data imported |
| `sensitive_access` | Sensitive data or operation accessed |

### Actor Types

| Actor Type | Description |
|------------|-------------|
| `user` | A human user in your organization |
| `api_key` | An API key making requests |
| `webhook` | A webhook integration |
| `system` | An internal system operation (e.g. cascaded deletes) |
| `scheduler` | A scheduled/cron job |

### Sources

| Source | Description |
|--------|-------------|
| `web` | Action taken from the Printago web UI |
| `api` | Direct API call |
| `webhook` | Triggered by a webhook integration |
| `scheduler` | Triggered by a scheduled job |
| `system` | Internal system operation |
| `cli` | Command-line interface |

## Navigating the Audit Log

Open the audit log from **Settings → Audit Log** in the sidebar.

<img src="/img/organization/audit-log-overview.png" width="800" alt="Audit log page overview" />

### Searching

The search bar filters across actor email, actor ID, action, entity type, entity ID, source, correlation ID, and reason fields. Type any term to instantly narrow the results.

### Filtering

Click the filter icon to expand the filter panel with these options:

- **Action** — filter by action type (create, update, delete, etc.)
- **Entity** — filter by entity type (part, printer, order, etc.)
- **Source** — filter by where the action originated (web, API, webhook, etc.)
- **Actor** — filter by email address or actor ID
- **Date Range** — set a from/to date window

<img src="/img/organization/audit-log-filters.png" width="800" alt="Audit log filter panel" />

Active filters show a count badge on the filter button. Click **Clear all filters** to reset.

### Correlation Grouping

When a single request triggers multiple changes (for example, deleting an entity that cascades to related records), those entries share a **correlation ID** and are grouped together. The primary entry appears in the table row, and you can expand it to see all related entries.

### Viewing Details

Click any row to expand it and see the full context:

- **Request context** — IP address, user agent, API key ID (if applicable), impersonation info, reason, and correlation ID
- **Field changes** — a table showing exactly which fields changed, with old and new values side by side
- **Entity IDs** — for bulk operations, the full list of affected entity IDs
- **Metadata** — additional key-value pairs attached to the operation

<img src="/img/organization/audit-log-detail.png" width="800" alt="Expanded audit log entry showing field changes" />

For update actions, each changed field shows the **old value** in red and the **new value** in green. Create actions show only new values, and delete actions show only the removed values. Long values are truncated with an option to expand.

:::tip
Sensitive fields like passwords, tokens, and secrets are automatically redacted and display as `[REDACTED]` in the change log.
:::

## Color Coding

Actions and sources are color-coded for quick scanning:

| Color | Actions |
|-------|---------|
| Green | create, bulk_create |
| Blue | update, bulk_update |
| Red | delete, bulk_delete |
| Purple | login, logout |
| Amber | export, import |
| Orange | sensitive_access |

## Related Topics

- [Roles & Permissions List](permissions.md) — see the `audit.log.view` permission
- [User Management](user-management.md) — manage who has access to audit logs
- [API Keys](/docs/api/keys) — API key actions are tracked in the audit log

Need help with audit logs? Join our [Discord community](https://discord.gg/RCFA2u99De) for support!
