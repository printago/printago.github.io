---
sidebar_position: 1
---

# Bulk Actions

Bulk Actions provide powerful controls for managing multiple items simultaneously across Printago. Manage multiple printers, print jobs, parts, or SKUs simultaneously. 

## Understanding the Interface

The Bulk Actions control appears in the top-right corner (top on mobile) of screens that support multi-selection:

1. Initially shows as a disabled <img src="/img/screenshot_000372.png" width="75" alt="add part 1" /> button.
2. When you select items, it updates to show `N Items Selected` (where N is your selection count)
3. Clicking reveals a context-aware menu of actions available for your selected items

Different screens offer different bulk operations - for example, selecting multiple printers gives you printer-specific actions, while selecting print jobs provides queue management options.

### Selection Patterns

Printago supports several ways to select items:

- **Individual Selection**: Click checkboxes next to items you want to affect
- **Range Selection**: Select an item, hold `Shift`, then select another item to select everything between
- **Select All**: Use the checkbox in the table header to select all items matching your current filters
- **Mixed Selection**: Combine methods - for example, select all, then uncheck specific items

## Bulk Actions by Context

### Print Queue Management

The Print Queue offers bulk operations focused on job control and organization:

- **Job Control**
  - Pause/Resume: Temporarily halt or restart multiple print jobs
  - Cancel: Stop selected print jobs (requires confirmation)
  - Move: Reposition jobs in queue to optimize printing order
  
- **Job Settings**
  - Apply Tags: Categorize jobs for better organization
  - Update Print Settings: Modify slicing parameters across jobs
  - Assign to Printers: Route multiple jobs to specific printers

For example, to pause all jobs using a specific material:
1. Filter your queue to show jobs using that material
2. Use Select All to select those jobs
3. Choose "Pause" from the Bulk Actions menu

### Printer Management 

When managing multiple printers, Bulk Actions lets you:

- **Status Control**
  - Set Ready/Maintenance States: Update printer availability
  - Apply Printer Tags: Group printers by capability or location
  - Update Access Settings: Modify who can use selected printers

- **Configuration**
  - Sync Print Profiles: Push profile updates to multiple printers
  - Update Material Settings: Configure filament parameters
  - Set Temperature Presets: Configure heating profiles

Common use case: When changing filament brands, use Bulk Actions to update material settings across all printers using that filament type:
1. Filter to show printers using the specific material
2. Select affected printers
3. Choose "Update Material Settings" to apply new parameters

### Parts Library Organization

Bulk Actions in the Parts Library focuses on organization and settings management:

- **Organization**
  - Move Parts: Relocate multiple parts between folders
  - Update Tags: Categorize parts for easier finding
  - Archive/Restore: Manage part visibility

- **Print Settings**
  - Update Print Parameters: Change settings like layer height or infill
  - Set Material Requirements: Specify filament types and colors
  - Configure Support Settings: Adjust support generation parameters

### SKU Management

For SKUs, Bulk Actions streamlines product management:

- **Product Details**
  - Update Pricing: Modify prices across multiple SKUs
  - Edit Descriptions: Update product information
  - Set Visibility: Control which SKUs are available
  
- **Print Configuration**
  - Set Print Requirements: Update printer/material requirements
  - Configure Auto-Processing: Set up automation rules
  - Update Print Settings: Modify production parameters

## Best Practices

### Filtering Before Selection

Always use filters to narrow down items before applying Bulk Actions:

1. Set relevant filters (e.g., printer type, material, status)
2. Verify filtered results match your target group
3. Use Select All to capture the filtered items
4. Apply your bulk action

### Safety Measures

Printago includes several safety features for Bulk Actions:

- Confirmation dialogs for destructive actions
- Clear indication of selection count
- Preview of affected items for critical changes
- Ability to cancel ongoing bulk operations

### Performance Tips

When working with large numbers of items:

1. Use filters to work with smaller batches
2. Allow bulk operations to complete before starting new ones
3. Verify results after significant changes

## Related Documentation

- [Print Queue Management](/docs/print-queue)
- [Printer Configuration](/docs/printers)
- [Parts Library](/docs/parts)
- [SKU Management](/docs/skus)