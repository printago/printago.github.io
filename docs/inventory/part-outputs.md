
# Part Outputs

Part outputs define what sub-components a part produces when printed. This is the link between your 3D print files and inventory tracking.

## Overview

When you configure part outputs:
- Each successful print automatically creates QC entries
- The system knows how many sub-components to expect
- Stock levels update after QC approval

## Configuring Part Outputs

1. Navigate to the **Part** detail page
2. Scroll down to the **Sub-Component Outputs** section
3. Click **+ Add Output**


4. Select the sub-component this part produces
5. Set the quantity produced per print
6. Click **Save**


## Multiple Outputs

A single part can produce multiple sub-components. This is common for:

### Multi-Plate 3MF Files

If your 3MF file contains multiple plates or objects:


Example: A "Widget Complete" 3MF might produce:
- 1x Top Case
- 1x Bottom Case
- 1x Button Set
- 2x Side Panels

### Quantity Per Print

Set the quantity for parts that produce multiples:
- A button plate producing 12 buttons = quantity 12
- A single case = quantity 1

## How It Works

### Print Completion Flow

1. Print job completes successfully
2. System reads the part's configured outputs
3. Creates QC entries for each output × quantity
4. Material variant is captured from the print job

```
Print Job Completes
       ↓
Part has outputs: [Case ×1, Buttons ×4]
       ↓
Create QC entries:
  - 1× Case (Blue PLA)
  - 4× Buttons (Blue PLA)
       ↓
Items appear in QC Pending tab
```

### Material Variant Tracking

The system automatically captures which material variant was used:
- If you print with "Blue PLA", items are tagged "Blue PLA"
- Stock is tracked separately by variant
- Useful for color-matched products

## Editing Outputs

To modify part outputs:

1. Go to the part detail page
2. Find the output in the **Sub-Component Outputs** list
3. Click the edit icon to change quantity
4. Click the delete icon to remove the output


:::note
Changes only affect future prints. Existing QC entries and stock are not modified.
:::

## Viewing Part Outputs

From a sub-component's detail page, you can see which parts produce it:


This helps you understand:
- Which parts to print when restocking
- Alternative parts that produce the same component
- Production efficiency (output per print)

## Best Practices

### Accurate Quantities

Always set accurate quantities:
- Count the actual pieces in multi-plate files
- Update if you modify the 3MF file
- Incorrect quantities lead to inventory discrepancies

### Single vs. Multi-Component Parts

Consider your workflow:
- **Single-component parts**: Easier to track and restock
- **Multi-component parts**: More efficient printing, but all components produced together

### Test Prints

Before production runs:
1. Do a test print
2. Verify the actual output matches configured quantities
3. Adjust if needed

Need help configuring part outputs? Join our [Discord community](https://discord.gg/RCFA2u99De)!
