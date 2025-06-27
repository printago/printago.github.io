---
sidebar_position: 2
---

# Gutenb3d Smart Queue

Meet Gutenb3d, our intelligent print queue system that revolutionizes how you manage your print farm. With smart material matching and intelligent printer assignment, you'll maximize efficiency and minimize printer downtime.

## Core Features

Gutenb3d acts as your print farm's central nervous system by:

* Automatically routing all print jobs through an intelligent queueing system
* Matching jobs with available printers based on material type and color, as well as printer tags.
* Managing printer availability and status in real-time
* Optimizing queue processing for maximum efficiency

<img src="/img/gutenbed.gif" width="650" alt="add part 2" />

## How It Works

### Printer Matching

Gutenb3d looks for `Available` printers matching these criteria:

* Material type requirements (PLA, PET, etc.)
* Material variant (color) requirements
* User-defined printer tags

* Material color groups (coming soon)
* Nozzle compatability (coming soon) - incompatible matched jobs currently error in the slicing phase.
* Print Bed Size Compatability (coming soon) - incompatible matched jobs currently error in the slicing phase

Gutenb3d processes printers for matching on a last-used basis.  All your printers may be printed to regardless of commercial slots.  The production slots only control the number of simulaneous jobs Printago will process and manage at at time.

:::info
A printer is considered `Available` when it is:
* Online and connected
* Not processing another job
* Marked as "clear & ready for next print"
:::

### Queue Processing

Jobs remain in queue when:

* No printers match the required criteria
* Matching printers are not in `Available` status
* All printer production slots are busy

### Job Management

* Each part of a SKU appears separately in the queue
* Jobs can be managed via through [Bulk Actions](../printing/advanced-printing/bulk-actions.md)
* Queue position can be adjusted through drag-and-drop interface.
* Cancelled or Errored jobs may be retried via Bulk Action, placing the job back in the queue.

Gutenb3d processes jobs top to bottom, with flexible reordering capabilities to adjust priorities.

### Interface
- The Print Queue is split between 5 tabs: Queued, In Progress, Completed, Cancelled, Errored
- Using [Bulk Actions](../printing/advanced-printing/bulk-actions.md), jobs may be manipulated. 
- All Jobs have a "Printer Matching" dialog which shows the printers Printago attempted to match with and why they did not.

#### Queued Jobs
- Bulk Actions Available: Cancel
- Drag/Drop Jobs to re-order.
- Why are jobs in the queue?
    - All jobs are processed through the Queue, regardless if it is printed "To A Specific Printer", all job start here.
    - The jobs has not yet matched with an printer that is : Available, Ready, and Compatible (including materials).
    - All production slots are currently in use.  As each job finishes, its slot will become available.

#### In-Progress Jobs
- Bulk Actions Available: Pause, Resume, Cancel
- Jobs move to In-Progress after they are assigned to a printer and fill up one production slot each.
- Prints started outside of Printago will not use up any production slots, and will not be monitored on this page.  You can view those on the [Dashboard](/docs/dashboard-queue/dashboard-overview.md), however.
- After being assigned, Jobs will have a shortcut showing the `Material Mapping` for the job - after matching with the printer, how the part's materials were mapped to those loaded in the physical printer.
- Jobs enter the slicing phase, [auto-slicing](/docs//printing/cloud-slicer.md) for the assigned printer.
- After slicing the part will be downloaded by the printer, and begin printing.

#### Completed, Cancelled, and Errored Jobs
- Bulk Actions Available: Completed, Cancelled, Error: Retry, Clear
- Jobs in these states "free up" their corresponding Production Slots.
- Completed jobs reached their end of their gcode normally.
- Cancelled jobs were cancelled by the user (via Printago, desktop slicer, Handy, or on the printer itself)
- Errored jobs are unique: a job may error during the slicing phase, and will be sent to "error" state.  Alternatively, if the printer halts itself for any reason (such as severe HMS Error).  

:::tip
The clear bulk action "soft deletes" jobs from the visible history, which may help performance issues after completing many jobs.  Printago will add reporting in the future to view statistics on historic data.
:::



## Related Topics

* [Bulk Actions](../printing/advanced-printing/bulk-actions.md)
* [Cloud Slicer](../printing/cloud-slicer.md)

Need help printing from your queue? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!