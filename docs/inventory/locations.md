
# Locations

Organize your inventory by creating storage locations. Locations help you track where sub-components are physically stored and streamline order picking.

## Overview

Storage locations can represent:
- Shelving units
- Bins and containers
- Rooms or areas
- Cabinets or drawers

Locations support hierarchy, so you can organize like:
- Warehouse A → Shelf 1 → Bin A

## Creating Locations

1. Navigate to **Inventory** > **Locations**
2. Click **+ Add Location**


3. Fill in the location details:
   - **Name**: Descriptive name (e.g., "Shelf A", "Bin 12")
   - **Description**: Optional additional details
   - **Parent Location**: Optional, for hierarchical organization


4. Click **Save**

## Hierarchical Organization

Create parent-child relationships for detailed tracking:

### Example Structure

```
Warehouse
├── Shelf A
│   ├── Bin 1
│   ├── Bin 2
│   └── Bin 3
├── Shelf B
│   ├── Bin 1
│   └── Bin 2
└── Work Bench
```

### Setting Parent Location

When creating or editing a location:
1. Select a **Parent Location** from the dropdown
2. The location becomes a child of that parent


## Location Management

### Viewing Locations

The locations list shows:
- Location name and hierarchy path
- Number of sub-component types stored
- Total items in location


### Editing Locations

1. Click on a location in the list
2. Modify the name, description, or parent
3. Click **Save**

### Deleting Locations

:::warning
You can only delete locations with no inventory. Move or transfer items first.
:::

## Stock by Location

### From Sub-Component View

Each sub-component shows stock broken down by location:


### From Location View

Click a location to see all stock stored there:


## Using Locations in QC

When approving items in QC, you can specify the storage location:

1. Select items in QC
2. Click **Approve**
3. Choose the target location


## Using Locations in Picking

Pick lists show the location for each item:


This helps pickers:
- Navigate efficiently through storage
- Find items quickly
- Confirm they're pulling from the right spot

## Best Practices

### Naming Conventions

Use clear, consistent naming:
- **Good**: "Shelf A - Bin 3", "Storage Room - Cabinet 2"
- **Avoid**: "Bin", "Here", "Misc"

### Logical Organization

Group related items:
- Products by type or product line
- Fast-moving items in accessible locations
- Rarely-used items in back storage

### Not Too Deep

Keep hierarchy manageable:
- 2-3 levels is usually sufficient
- Deeper hierarchies become cumbersome
- Example: Room → Shelf → Bin (3 levels)

### Label Physical Locations

Match labels in Printago to physical labels:
- Print location labels/barcodes
- Post at each storage area
- Makes picking faster and more accurate

Need help organizing storage? Join our [Discord community](https://discord.gg/RCFA2u99De)!
