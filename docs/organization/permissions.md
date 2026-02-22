
# Roles & Permissions List

## System Roles

Printago ships with five built-in roles. Role definitions may be updated over time as new features are released — users assigned to a role automatically receive any new permissions added to it.

| Role | Description | Permissions |
|------|-------------|-------------|
| **Store Owner** | Full access to all current and future features. Automatically bypasses every permission check. | All |
| **Admin** | Manages users, settings, integrations, and all day-to-day operations. | Everything except organization deletion and subscription management |
| **Operator** | Runs printers, manages the queue, and monitors jobs on the shop floor. | Printer control, queue & job management, material tracking, read-only access to parts, SKUs, orders, and analytics |
| **Viewer** | Read-only access to printers, queue, parts, and analytics. | View-only across all operational areas |
| **Part Manager** | Creates and manages parts, SKUs, and file exports for the design team. | Full parts & SKU management, part export, read-only queue and printer visibility |

### Role Comparison

The table below shows which permissions each role includes. **Store Owner** is omitted because it implicitly grants all permissions.

| Permission | Admin | Operator | Viewer | Part Manager |
|------------|:-----:|:--------:|:------:|:------------:|
| organization.edit | x | | | |
| user.view | x | | | |
| user.invite | x | | | |
| user.edit | x | | | |
| user.delete | x | | | |
| permission.view | x | | | |
| permission.grant | x | | | |
| permission.revoke | x | | | |
| part.view | x | | | x |
| part.create | x | | | x |
| part.edit | x | | | x |
| part.delete | x | | | x |
| part.export | x | | | x |
| sku.view | x | | | x |
| sku.create | x | | | x |
| sku.edit | x | | | x |
| sku.delete | x | | | x |
| material.view | x | x | x | |
| material.create | x | | | |
| material.edit | x | | | |
| material.delete | x | | | |
| material.instance.view | x | x | x | |
| material.instance.create | x | x | | |
| material.instance.edit | x | x | | |
| material.instance.delete | x | | | |
| printer.view | x | x | x | x |
| printer.create | x | | | |
| printer.edit | x | x | | |
| printer.delete | x | | | |
| printer.control | x | x | | |
| printer.config | x | | | |
| printer.stats | x | x | x | x |
| profile.view | x | x | x | |
| profile.create | x | | | |
| profile.edit | x | | | |
| profile.delete | x | | | |
| queue.view | x | x | x | x |
| queue.manage | x | x | | |
| queue.override | x | | | |
| job.create | x | x | | |
| job.edit.own | x | x | | |
| job.edit.all | x | | | |
| job.delete.own | x | x | | |
| job.delete.all | x | | | |
| build.view | x | x | x | x |
| build.create | x | x | | |
| build.edit | x | | | |
| build.delete | x | | | |
| order.view | x | x | x | |
| order.create | x | | | |
| order.edit | x | | | |
| order.delete | x | | | |
| order.print | x | | | |
| settings.view | x | | | |
| settings.edit | x | | | |
| integration.view | x | | | |
| integration.manage | x | | | |
| subscription.view | x | | | |
| analytics.view | x | x | x | |
| reports.generate | x | | | |
| audit.log.view | x | | | |
| apiKey.view | x | | | |
| apiKey.create | x | | | |
| apiKey.edit | x | | | |
| apiKey.delete | x | | | |
| file.download | x | x | | x |

---

## All Permissions

Below is every permission in the system, organized by category, with a description of what it enables.

### Organization

| Permission | Description |
|------------|-------------|
| `organization.owner` | Grants unrestricted access to the entire organization. Implicitly satisfies every other permission check. Only one user per organization holds this permission. |
| `organization.edit` | Change the organization's name and general settings. |
| `organization.delete` | Permanently delete the organization and all its data. |

### Users & Permissions

| Permission | Description |
|------------|-------------|
| `user.view` | View the list of organization members, their roles, and invitation status. Required to access the Users page. |
| `user.invite` | Send, resend, and revoke email invitations to new team members. |
| `user.edit` | Edit user profile details such as display name. Also required to view individual user detail pages. |
| `user.delete` | Remove a user from the organization. |
| `permission.view` | View the permission assignments and role details for users in the organization. |
| `permission.grant` | Grant individual permissions or assign roles to other users. You can only grant permissions that you yourself hold (Store Owners are exempt). |
| `permission.revoke` | Revoke individual permissions or remove roles from other users. |

### Parts

| Permission | Description |
|------------|-------------|
| `part.view` | View the parts library, including 3D model details, thumbnails, and associated metadata. Required to access the Parts page. |
| `part.create` | Upload new parts (STL, STEP, 3MF, OpenSCAD, or GCODE files) to the parts library. |
| `part.edit` | Modify part properties such as name, description, tags, print settings, and OpenSCAD parameters. |
| `part.delete` | Permanently remove parts from the library. |
| `part.export` | Download original part source files (STL, STEP, etc.) from the library. |

### SKUs

| Permission | Description |
|------------|-------------|
| `sku.view` | View the SKU catalog, including which parts make up each SKU and their quantities. Required to access the SKUs page. |
| `sku.create` | Create new SKUs by combining parts with quantities and configuring parameters. |
| `sku.edit` | Modify SKU definitions — add or remove parts, change quantities, update descriptions and variant configurations. |
| `sku.delete` | Permanently remove SKUs from the catalog. |

### Materials

| Permission | Description |
|------------|-------------|
| `material.view` | View the material library including filament types, brands, colors, and properties. Required to access the Materials page. |
| `material.create` | Add new materials (filament types) to the library. |
| `material.edit` | Modify material properties such as name, brand, color, temperature settings, and density. |
| `material.delete` | Remove materials from the library. |
| `material.instance.view` | View individual material instances (spools) — track remaining weight, location, and usage history. |
| `material.instance.create` | Register new spools by creating material instances. Used when you receive new filament stock. |
| `material.instance.edit` | Update spool details such as remaining weight, location, or notes. Used during material swaps and usage logging. |
| `material.instance.delete` | Remove a spool record from inventory tracking. |

### Printers

| Permission | Description |
|------------|-------------|
| `printer.view` | View the list of connected printers, their current status, and basic details. Required to access the Printers page. |
| `printer.create` | Add new printers to the organization (connect via Bambu Cloud, Printago Fuse / Klipper, or Prusa Link). |
| `printer.edit` | Rename printers, update tags, change material assignments, and modify general printer settings. |
| `printer.delete` | Remove a printer from the organization and disconnect it. |
| `printer.control` | Start, pause, resume, and cancel prints. Required to operate printers from the control panel. |
| `printer.config` | Access and modify advanced printer configuration such as Bambu Lab LAN mode settings, network credentials, and provider-specific options. |
| `printer.stats` | View real-time printer telemetry (temperatures, progress, speed) streamed via MQTT on the printer control panel. |

### Slicer Profiles

| Permission | Description |
|------------|-------------|
| `profile.view` | View available slicer profiles and their settings. Required to access the Profiles page. |
| `profile.create` | Upload or create new slicer profiles. |
| `profile.edit` | Modify profile settings, rename profiles, or change the associated slicer version. |
| `profile.delete` | Remove slicer profiles from the organization. |

### Print Queue & Jobs

| Permission | Description |
|------------|-------------|
| `queue.view` | View the print queue — queued, in-progress, completed, cancelled, and errored jobs. Required to access the Queue page. |
| `queue.manage` | Reorder jobs in the queue, move jobs between printers, and perform bulk queue operations. |
| `queue.override` | Force-cancel or force-complete any job regardless of its current state. Bypasses normal job ownership restrictions. Use with caution. |
| `job.create` | Create new print jobs by sending parts to the queue with printer and material assignments. |
| `job.edit.own` | Edit jobs that you created — change priority, notes, material, or printer assignment. Does not allow editing other users' jobs. |
| `job.edit.all` | Edit any job in the queue regardless of who created it. |
| `job.delete.own` | Cancel and remove jobs that you created from the queue. |
| `job.delete.all` | Cancel and remove any job from the queue regardless of who created it. |

### Builds

| Permission | Description |
|------------|-------------|
| `build.view` | View build plates — grouped collections of parts arranged for a single print. Required to access build pages. |
| `build.create` | Create new build plates by arranging multiple parts together. |
| `build.edit` | Modify build plate layouts, add or remove parts, and change build settings. |
| `build.delete` | Remove build plates. |

### Orders

| Permission | Description |
|------------|-------------|
| `order.view` | View customer orders, their line items, and fulfillment status. Required to access the Orders page. |
| `order.create` | Create new orders manually or allow integration-created orders to be stored. |
| `order.edit` | Modify order details — close, reopen, or cancel orders. Add or remove line items. |
| `order.delete` | Permanently delete orders. |
| `order.print` | Send order line items to the print queue (the "Print Jobs" action) and reconcile order changes with existing queue jobs. |

### Settings & Integrations

| Permission | Description |
|------------|-------------|
| `settings.view` | View organization settings including store configuration and slicer settings. Required to access the Settings page. |
| `settings.edit` | Modify organization settings such as slicer configuration, notification preferences, and general store options. |
| `integration.view` | View connected e-commerce integrations (Shopify, Etsy, etc.) and their status. |
| `integration.manage` | Connect, disconnect, and configure e-commerce integrations. Manage webhook settings and sync options. |

### Subscription & Billing

| Permission | Description |
|------------|-------------|
| `subscription.view` | View the current subscription plan, usage, and billing information. |
| `subscription.manage` | Upgrade, downgrade, or cancel the organization's subscription plan. Manage payment methods. |

### Analytics & Audit

| Permission | Description |
|------------|-------------|
| `analytics.view` | View dashboards showing printer utilization, job success rates, material usage, and production trends. |
| `reports.generate` | Generate and export reports on production data, material consumption, and operational metrics. |
| `audit.log.view` | View the audit log — a chronological record of all significant actions taken by users in the organization. |

### API Keys

| Permission | Description |
|------------|-------------|
| `apiKey.view` | View existing API keys, their names, permissions, and last-used timestamps. Required to access the API Keys page. |
| `apiKey.create` | Create new API keys with a specific set of scoped permissions. |
| `apiKey.edit` | Modify API key settings such as name, permission scope, and IP allowlist. |
| `apiKey.delete` | Revoke and permanently delete API keys. |

### Files

| Permission | Description |
|------------|-------------|
| `file.download` | Download files from the organization — part source files, sliced output, and exported data. |

---

Need help understanding permissions? Join our [Discord community](https://discord.gg/RCFA2u99De) for support!
