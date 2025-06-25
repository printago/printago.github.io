---
sidebar_position: 2
---

# Gutenb3d Smart Queue

Meet Gutenb3d, our intelligent print queue system that revolutionizes how you manage your print farm. With smart material matching and intelligent printer assignment, you'll maximize efficiency and minimize printer downtime.

## Core Features

Gutenb3d acts as your print farm's central nervous system by:

* Automatically routing all print jobs through an intelligent queueing system
* Matching jobs with available printers based on material type, printer tags, and color requirements
* Managing printer availability and status in real-time
* Optimizing queue processing for maximum efficiency

<img src="/img/gutenbed.gif" width="650" alt="add part 2" />

## How It Works

### Printer Matching

Gutenb3d looks for `Available` printers matching these criteria:

* Material type requirements (PLA, PET, etc.)
* User-defined printer tags
* Material color groups (coming soon)

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

The queue processes top to bottom, with flexible reordering capabilities to adjust priorities.

### Job Management

* Each part of a SKU appears separately in the queue
* Jobs can be cancelled through [Bulk Actions](../printing/advanced-printing/bulk-actions.md)
* Queue position can be adjusted through drag-and-drop interface
* Cancelled or Errored jobs may be retried via Bulk Action, placing the job back in the queue.

## Best Practices

* Maintain accurate printer status and availability
* Use printer tagging to create dynamic groupings of printers.

## Related Topics

* [Bulk Actions](../printing/advanced-printing/bulk-actions.md)
* [Cloud Slicer](../printing/cloud-slicer.md)

Need help printing from your queue? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!