---
sidebar_position: 2
---

# Print Queue

The Print Queue is where Printago's intelligent job management system, Gutenb3d, automatically matches your print jobs with the best available printers. Think of it as your print farm's mission control—routing jobs efficiently while you focus on what matters most.

## Key Concepts

- **Smart Matching (Gutenb3d)**: Printago's intelligent engine that automatically matches queued jobs to compatible printers based on material, color, tags, and availability
- **Production Slots**: The number of jobs Printago can actively manage at once; completed, cancelled, or errored jobs free slots immediately
- **Job States**: Every job moves through Queued, In-Progress, and then to Completed, Cancelled, or Errored
- **Queue Priority**: Normal priority jobs always process before Low priority jobs; drag-and-drop reordering is supported within a priority level
- **Printer Availability**: A printer is available when it is online, not processing another job, and marked "Clear & Ready"
- **Last-Used Distribution**: Gutenb3d prefers the least recently used printer to distribute wear evenly across your fleet

## Understanding the Queue Interface

The Print Queue is organized into five tabs that represent different stages of your print jobs:

![Print Queue Interface](/images/print-queue-in-progress.png)

| Tab   | Description | Available Actions |
|-------|-------------|-------------------|
| **Queued** | Waiting for printer assignment | Cancel, Move to Top, Drag/Drop reorder |
| **In‑Progress** | Actively printing on assigned printers | Pause, Resume, Cancel |
| **Completed**   | Successfully completed prints | Retry, Clear |
| **Cancelled**   | User-cancelled jobs | Retry, Clear |
| **Errored** | Jobs that failed during slicing or printing | Retry, Clear |

### **Job Interaction**
Clicking the thumbnail of any job will show an interactive 3D model preview for STL and STEP files. This includes OpenSCAD or other Add-On output, allowing you to verify the generated output easily. You can also download the STL file from this window, which is particularly useful for OpenSCAD output.

After a job is sliced, this preview window will enable the `Download GCODE` button  that was generated and sent to the printer.

Beyond thumbnail previews, you can also link directly to the SKU or Part associated with each job, and drag queued jobs to reorder their priority. All other job actions require selecting jobs with checkboxes and using the Bulk Action menus.

### **Why Jobs Wait in Queue**
Every job starts in the Queued tab, even those sent "To A Specific Printer." Jobs remain queued when:
- No compatible printers are currently available
- All production slots are busy with other jobs  
- Required materials or printer tags don't match any ready printers

### **In-Progress Jobs**
Once Gutenb3d assigns a job to a printer, it moves to In-Progress and follows this path:

- **Assignment** - Job matched with compatible printer
- **Material Mapping** - Part materials mapped to printer's loaded filaments  
- **Slicing** - Job automatically sliced for assigned printer
- **Send & Print** - Sliced file sent to printer, printing begins

After printing begins, in-progress job show their time remaining, percent complete and other statistics.

:::info Production Slots
Print jobs started outside Printago (via slicer, Handy app, etc.) don't use production slots and won't appear here. You can monitor all printer activity on the [Dashboard](/docs/features/dashboard-overview) instead.
:::

### **Job Outcomes**

- **Completed** - Print finished successfully and reached end of gcode normally
- **Cancelled** - User stopped the job via Printago, slicer, Handy, or printer
- **Errored** - Job failed during slicing or printer halted due to issues (HMS errors, etc.)

:::info HMS Events (Bambu Lab Printers)
Bambu Lab printer HMS events are reflected in the queue:
- **HMS Warnings** that pause printing (like filament runout) keep jobs in the In-Progress tab
- **HMS Errors** that halt printing move jobs to the Errored tab

When able, Printago provides a link to Bambu Lab's documentation on the HMS Code
:::

## How Smart Matching Works

Gutenb3d's intelligent matching system considers multiple factors when assigning jobs to printers:

### **Matching Criteria**

| Criteria   | Description |
|------------|-------------|
| **Printer Availability** | Is the printer Available to Printago to assign any job? (see below) |
| **Material Type** | Specified on the part or SKU printed.  May be things like "Any PLA" or "Bambu Basic PLA" |
| **Material Variant** | Material color, also stored on the part or SKU. |
| **Printer Tags** | Custom labels for organizing printer groups |
<!-- | **Color Groups** | Group colors for even more streamlined management |
| **Nozzle Size**  | Automatic nozzle compatibility checking (currently errors at slice-time) |
| **Bed Size**  | Ensuring parts fit within build volume (currently errors at slice-time) | -->

:::info A PRINTER IS AVAILABLE WHEN...
- Online and connected to Printago
- Not currently processing another job
- Marked as "clear & ready for next print"
:::

### **Printer Assignment Strategy**
Gutenb3d processes printers on a "last-used" basis to distribute wear evenly across your fleet. All your printers can receive jobs regardless of your commercial production slot limit—those slots only control how many jobs Printago actively manages simultaneously.

## Managing Your Queue

### **Job Organization**
- Each individual printed part appears as a separate queue item (even within multi-part SKUs)
- Use drag-and-drop to reorder job priorities within the same priority level
- Jobs process from top to bottom, with flexible reordering anytime
- Streamline management with [Bulk Actions](/docs/features/bulk-actions.md)

### **Queue Priority**
Printago supports two job priority levels:

- **Normal Priority**: Standard jobs that process first
- **Low Priority**: Jobs that only process when no normal priority jobs are available

**Important Notes:**
- Jobs cannot be dragged between priority groups (normal ↔ low)
- Use the multi-action dropdown to change priority for selected jobs
- Low priority jobs function identically to normal jobs, but only begin processing when the normal priority queue is empty
- Job priority can be adjusted at any time from the queue interface

:::tip Managing Job History
Clearing completed jobs removes them from the interface but preserves all data for future reporting features. This soft-delete keeps the interface responsive while ensuring your print history remains available for upcoming analytics.
:::

## Production Slot Management

Your production slots determine how many jobs Printago can actively manage at once. When slots are full:
- New jobs wait in the queue until slots become available
- Completed, cancelled, or errored jobs free up their slots immediately
- External prints (from slicers, apps, etc.) don't consume slots

This system ensures optimal resource allocation while maintaining full visibility of your entire print farm's activity.

## Troubleshooting

### Job Not Matching Any Printer

Every job includes a **Printer Matching** dialog that shows which printers Gutenb3d attempted to match and the specific reason each printer was not selected.

 <div className="margin-left--lg">
        <img src="/img/queue/queue1.png" width="500" alt="" />
    </div>

**Common reasons a job stays in the Queued tab:**
- No printer has the required material loaded and assigned
- All matching printers are busy or not marked "Clear & Ready"
- Required printer tags do not match any available printer
- All production slots are currently occupied

**Job moved to Errored tab:**
- Slicing failed -- check the slicer logs via the job detail view (see [Cloud Slicer](./cloud-slicer.md))
- Printer reported an HMS error during printing (Bambu Lab printers)
- Network or communication loss interrupted the print

:::tip Fast Diagnosis
Open the Printer Matching dialog on any queued job to see a per-printer breakdown of why the job has not been assigned. This is the quickest way to identify material, tag, or availability mismatches.
:::

## FAQ

**Q: Can I reorder jobs across Normal and Low priority groups?**
A: No. Drag-and-drop reordering works within the same priority level only. To change a job's priority, select it and use the multi-action dropdown.

**Q: Do prints started outside Printago (e.g., from Bambu Studio or the Handy app) consume production slots?**
A: No. Only jobs managed by Printago's queue use production slots. External prints can be monitored on the [Dashboard](/docs/features/dashboard-overview) but do not count against your slot limit.

**Q: What happens when I clear completed jobs -- is the data lost?**
A: No. Clearing completed jobs removes them from the interface but performs a soft-delete. All print data is preserved for future reporting and analytics features.

**Q: Can I retry a failed or cancelled job?**
A: Yes. Jobs in the Completed, Cancelled, or Errored tabs have a **Retry** action that re-queues them with the same settings.

**Q: How does Gutenb3d decide which printer gets the next job?**
A: Gutenb3d uses a "last-used" strategy to distribute wear evenly. Among all printers that match a job's requirements and are available, the one that has been idle the longest is selected first.

## Related Topics

- [Bulk Actions](/docs/features/bulk-actions.md) - Efficient job management tools
- [Cloud Slicer](/docs/printing/cloud-slicer.md) - Automatic slicing for assigned printers

Need help with your print queue? Join our [Discord community](https://discord.gg/RCFA2u99De) for the latest tips and support!