---
sidebar_position: 3
---

# Bulk Actions

Bulk Actions provide powerful controls for managing multiple items simultaneously across Printago. Manage multiple printers, print jobs, parts, or SKUs simultaneously.

## Key Concepts

- **Selection Patterns** -- Select items individually via checkboxes, in ranges with `Shift + Click`, or all at once with the header checkbox or the `A` key.
- **Context-Specific Actions** -- The available bulk actions change depending on which page you are on (Print Queue, Printers, Parts, SKUs, etc.) and the state of selected items.
- **State-Dependent Options** -- Within a given context, the actions offered depend on the current state of the selected items (e.g., Pause is only available for in-progress jobs).
- **Keyboard Shortcuts** -- Many bulk actions have single-key shortcuts (e.g., `R` for Set Ready, `T` for Edit Tags, `C` for Configure) for faster operation.
- **Confirmation on Destructive Actions** -- Actions like Cancel and Delete require explicit confirmation before executing.

## Understanding the Interface

The Bulk Actions control appears in the top-left corner (top on mobile) of screens that support multi-selection:

![Bulk Actions Menu](/images/bulk-actions-printers.png)

1. Initially shows as a disabled `Actions` dropdown button.
2. When you select items, the button enables and updates its text.
3. Clicking reveals a context-aware menu of actions available for your selected items

Different screens offer different bulk operations - for example, selecting multiple printers gives you printer-specific actions, while selecting print jobs provides queue management options.

### Selection Patterns

Printago supports several ways to select items:

- **Individual Selection**: Click checkboxes next to items you want to affect
- **Range Selection**: Select an item, hold `Shift`, then select another item to select everything between
- **Select All**: Use the checkbox in the table header to select all items matching your current filters, or press `A` to toggle select all

:::tip Quick Selection
Use `Shift + Click` for range selection across most list views in Printago.
:::

## Bulk Actions by Context

### Print Queue Management

The Print Queue offers bulk operations focused on job control and organization. Available actions depend on the state of selected print jobs:

- **In Progress Jobs**
  - _Pause_: Temporarily stop active print jobs
  - _Resume_: Continue paused print jobs
  
- **Queue Management**
  - _Cancel_: Stop selected print jobs (requires confirmation)
  - _Clear_: Remove jobs in `Completed`, `Cancelled`, or `Errored` states
  - _Retry_: Return `Cancelled` or `Errored` jobs to queue for another attempt
  
### Printer Management 

Control multiple printers simultaneously through the following Bulk Actions:

**Availability Control**
- _Set as Clear & Ready_: Makes selected printers available in the print queue
- _Set as Hold/Not Ready_: Temporarily removes printers from the available queue

**FabMatic Configuration**  
- _Enable FabMatic_: Activates continuous printing mode for selected printers
  - For setup details, see [FabMatic Continuous Printing](/docs/printing/fabmatic-continuous-printing)
- _Disable FabMatic_: Turns off continuous printing mode

**Organization**
- _Edit Tags_: Modify printer tags in bulk to manage printer groups and categories

### Part & SKU Management 

- _Delete_: Delete Parts or SKUs from Printago.



## Complete Bulk Actions Reference

### Print Queue

| Action | Description | Requirements/Notes |
|--------|-------------|--------------------|
| **Cancel** | Stop selected print jobs | Requires confirmation |
| **Move to Top** | Prioritize selected jobs in queue | Alternative to drag/drop (Queued jobs only) |
| **Pause** | Temporarily stop active print jobs | In-Progress jobs only |
| **Resume** | Continue paused print jobs | Paused jobs only |
| **Clear** | Remove jobs from queue | Completed/Cancelled/Errored jobs only |
| **Retry** | Return jobs to queue for another attempt | Cancelled/Errored jobs only |

### Printers
The Printers list page has one additional keyboard shortcut: `G` to select all matching Printers (same model/nozzle)

| Action | Description | Requirements/Notes | Shortcut |
|--------|-------------|--------------------|---------|
| **Set as Clear & Ready** | Makes selected printers available in print queue | Skips currently printing printers | `R` |
| **Set as Hold/Not Ready** | Removes printers from available queue | Temporarily disables job assignment | `U` |
| **Enable FabMatic** | Activates continuous printing mode | See [FabMatic documentation](/docs/printing/fabmatic-continuous-printing) | - |
| **Disable FabMatic** | Turns off continuous printing mode | - | - |
| **Edit Tags** | Modify printer tags in bulk | For printer grouping and organization | `T` |
| **Control Panel** | Multi-printer control interface | Manual printer operation and calibration | `P` |
| **Configure** | Bulk slicer configuration | Set machine/process profiles for multiple printers | `C` |
| **Materials** | Bulk material assignment | Assign materials to multiple printers | `M` |
| **Temperature** | Quick bed/nozzle temperature presets | Set temperatures across multiple printers | - |




### Parts & SKUs

| Action | Description | Requirements/Notes |
|--------|-------------|--------------------|
| **Delete** | Remove parts or SKUs from Printago | Permanent deletion |
| **Move to Folder** | Organize items into folders | Bulk organization tool |

### Materials & Slicer Profiles

Both Materials and Slicer Profiles pages currently support only **Delete** bulk actions for removing items from your library.



Find out more about Printago [Keyboard Shortcuts](/docs/features/keyboard-shortcuts.md)

## Troubleshooting

### Actions Button Stays Disabled

1. Make sure you have at least one item selected -- the button enables only when items are checked
2. Verify you are on a page that supports bulk actions (Print Queue, Printers, Parts, SKUs, Profiles, or Materials)

### Expected Action Not Appearing in the Menu

1. Bulk action menus are context-aware and state-dependent. For example, "Pause" only appears when in-progress jobs are selected, and "Retry" only appears for cancelled or errored jobs
2. Ensure your selected items are all in a state that supports the action you need
3. If selecting items in mixed states, only actions valid for the entire selection will appear

### Shift-Click Range Selection Not Working

1. First click a single item normally, then hold `Shift` and click a second item to select the range
2. Range selection works across most list views but may not work in card-based layouts

## FAQ

**Q: Can I select items across multiple pages of results?**
A: The "Select All" checkbox selects all items matching your current filters, not just what is visible on the current page.

**Q: Is there a limit to how many items I can act on at once?**
A: There is no hard limit. However, very large bulk operations (hundreds of items) may take a moment to process.

**Q: What does the `G` shortcut do on the Printers page?**
A: Pressing `G` selects all printers that match the same model and nozzle configuration as the currently selected printer. This is useful for applying settings to all printers of the same type.

**Q: Can I undo a bulk action?**
A: Destructive actions like Delete cannot be undone. Other actions like Cancel, Pause, and Set Hold can be reversed with the corresponding opposite action (Retry, Resume, Set Ready).