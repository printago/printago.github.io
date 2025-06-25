---
sidebar_position: 2
---

# Bulk Actions

Bulk Actions provide powerful controls for managing multiple items simultaneously across Printago. Manage multiple printers, print jobs, parts, or SKUs simultaneously. 

## Understanding the Interface

The Bulk Actions control appears in the top-right corner (top on mobile) of screens that support multi-selection:

1. Initially shows as a disabled <img src="/img/screenshot_000372.png" width="75" alt="actions button" /> button.
2. When you select items, the button enables and updates its text <img src="/img/screenshot_000373.png" width="115" alt="add part 1" />
3. Clicking reveals a context-aware menu of actions available for your selected items

Different screens offer different bulk operations - for example, selecting multiple printers gives you printer-specific actions, while selecting print jobs provides queue management options.

### Selection Patterns

Printago supports several ways to select items:

- **Individual Selection**: Click checkboxes next to items you want to affect
- **Range Selection**: Select an item, hold `Shift`, then select another item to select everything between
- **Select All**: Use the checkbox in the table header to select all items matching your current filters
- **Filter Before Selection**: Use Search and Filters to limit items, then use Select All to capture the filtered items
- **Mixed Selection**: Combine methods - for example, select all, then uncheck specific items

<img src="/img/multi_select.gif" width="700" alt="multi select" />


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
  - For setup details, see [FabMatic Continuous Printing](./fabmatic-continuous-printing.md)
- _Disable FabMatic_: Turns off continuous printing mode

**Organization**
- _Edit Tags_: Modify printer tags in bulk to manage printer groups and categories

### Part & SKU Management 

- _Delete_: Delete Parts or SKUs from Printago.



More ideas for these bulk actions? drop us an email: support@printago.io