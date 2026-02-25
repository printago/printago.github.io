
# Inventory Overview

:::tip Commercial Feature
Inventory management requires a Commercial subscription. [Learn more](/docs/settings/subscription-management)
:::

Track sub-component inventory produced by your 3D prints. The inventory system provides visibility into stock levels, quality control workflows, storage locations, and automated restocking suggestions.

## Key Concepts

### Sub-Components

Sub-components are the building blocks tracked by the inventory system. A single 3D print may produce one or more sub-components. For example, a multi-plate 3MF file might produce a case, lid, and button holder in a single print job.

### Part Outputs

Parts are linked to sub-components through **part outputs**. When you configure a part, you specify which sub-components it produces and in what quantity. After each successful print, these sub-components flow into the QC queue.

### Quality Control (QC)

Before items enter available stock, they can go through quality control. The QC workflow allows you to:
- Review items pending approval
- Approve good items (individually or in batch)
- Reject defective items

### Inventory Locations

Organize your stock by creating storage locations. Locations can be hierarchical (e.g., "Shelf A" > "Bin 1") and help track where specific items are stored.

### Stock Tracking

The system tracks three key quantities for each sub-component:
- **Total**: All items in inventory
- **Reserved**: Items allocated to orders
- **Available**: Items ready for use (Total - Reserved)

### Restock Rules

Set minimum and target stock levels for sub-components. When stock falls below the minimum, the system generates restock suggestions or can automatically queue print jobs.

## Navigation

Access inventory features from the **Inventory** item in the sidebar.

The inventory section includes:
- **Dashboard**: Overview of stock levels and alerts
- **Sub-Components**: Manage inventory items
- **QC**: Quality control workflow
- **Locations**: Storage location management
- **Restock**: View and configure restocking
- **Picking**: Order fulfillment picking lists

## Typical Workflow

1. **Configure Parts**: Set up which sub-components each part produces
2. **Print Jobs Complete**: Items automatically enter the QC queue
3. **Quality Control**: Approve or reject items from QC
4. **Stock Tracking**: Monitor stock levels by sub-component and location
5. **Restocking**: Get notified when stock is low and create reprint jobs
6. **Order Fulfillment**: Use pick lists to gather items for orders

## Getting Started

1. Create your sub-components in [Sub-Components](./sub-components)
2. Link parts to sub-components in [Part Outputs](./part-outputs)
3. Set up storage areas in [Locations](./locations)
4. Configure automatic restocking in [Restock](./restock)
5. Use [Quality Control](./quality-control) to review printed items
6. Fulfill orders with [Picking](./picking)

Need help with inventory tracking? Join our [Discord community](https://discord.gg/RCFA2u99De) for support!
