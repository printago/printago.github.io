
# Sub-Components

Sub-components are the individual items tracked by the inventory system. They represent the building blocks that make up finished products.

## Overview

A sub-component might be:
- A case or enclosure
- A lid or cover
- A button or knob
- A mounting bracket
- Any distinct piece that goes into a finished product

Sub-components exist independently and can be produced by multiple different parts. For example, a "Button Cap" sub-component could be produced by both a single-button part file and a multi-button plate.

## Creating Sub-Components

1. Navigate to **Inventory** > **Sub-Components**
2. Click **+ Add Sub-Component**


3. Fill in the details:
   - **Name**: Descriptive name for the sub-component
   - **SKU/Part Number**: Optional identifier for tracking
   - **Description**: Additional details (optional)


4. Click **Save**

## Managing Sub-Components

### Viewing Stock Levels

The sub-components list shows stock information for each item:
- **Total**: All items in inventory
- **Reserved**: Items allocated to orders
- **Available**: Items ready for use


### Low Stock Indicators

Items with low stock display a warning indicator. Stock is considered low when it falls below the minimum threshold set in restock rules.

### Stock by Variant

If you print sub-components in different materials or colors, the system tracks stock separately by material variant. Click on a sub-component to see the breakdown:


### Stock by Location

Stock is also tracked by storage location. The detail view shows where items are stored:


## Sub-Component Details

Click on any sub-component to view its detail page:


The detail page shows:
- **Stock Summary**: Total, reserved, and available quantities
- **Stock by Variant/Location**: Detailed breakdown of where items are stored
- **Producing Parts**: Which parts create this sub-component
- **Activity**: Recent inventory movements

## Linking to Parts

Sub-components gain inventory when parts that produce them complete printing. To set up this link, see [Part Outputs](./part-outputs).

## Best Practices

### Naming Conventions

Use clear, consistent naming:
- Include the product line prefix if applicable
- Be specific about the component type
- Example: "Widget Pro - Top Case" rather than "Case"

### SKU/Part Numbers

Assign unique identifiers to sub-components for:
- Barcode scanning during picking
- Integration with external inventory systems
- Quick lookup and search

### Granularity

Consider the right level of granularity:
- **Too broad**: "Hardware Kit" - hard to track individual pieces
- **Too narrow**: "M3x8mm Screw" - may be overkill for 3D printed parts
- **Just right**: "Enclosure Top", "Enclosure Bottom", "Button Set"

Need help organizing your sub-components? Join our [Discord community](https://discord.gg/RCFA2u99De) for tips!
