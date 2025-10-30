---
sidebar_position: 2
---

# Dashboard

The Printago Dashboard is your central hub for monitoring and managing all connected 3D printers. It provides real-time status updates, job progress tracking, and quick access to printer controls.

![Dashboard Overview](/images/dashboard-overview.png)

### Printer Cards

Each connected printer is displayed as an individual card on the dashboard, providing a comprehensive view of its current status and active jobs.

### Card Information Display

- **Printer thumbnail** - Visual preview of the current print job
- **Job progress** - Percentage completion of the active print
- **Time remaining** - Estimated time until job completion
- **Layer progress** - Current layer / total layers (e.g., "45/120")
- **Temperature readings** - Current nozzle and bed temperatures

### Status Indicators

The colored border at the top of each printer card indicates the current printer status:

| Status | Color | Description |
|:--------:|-------|--------------|  
| **BUSY** | 🟢 Green | Actively printing a job |
| **WAITING** | 🟣 Purple | Connected but waiting for a job |
| **READY** | 🔵 Blue | Connected and ready to print |
| **NEEDS CONFIG** | 🟡 Yellow | Missing slicing configuration. |
| **OFFLINE** | ⚪ Gray | Disconnected from the network |
| **STALE** | ⚪ Gray | Hasn't reported status recently |
| **DISABLED** | ⚪ Gray | Has been manually disabled |

## Job Monitoring

The dashboard displays the status of **all jobs** currently running on your printers, regardless of their source:

The dashboard shows jobs started from any source, including:
- Printago
- External slicers (Orca Slicer, Bambu Studio)
- Bambu Handy app
- SD card prints

:::tip
This differs from the **In-Progress** tab in the [Print Queue](/docs/print-queue-management.md), which only shows jobs initiated through Printago.
:::

### Dashboard Actions

The dashboard provides quick access to several important features:

- **Set Clear & Ready** - After a job completes, the status indicator will switch to a button labeled `Set Ready`
- **Quick-Set Printer Temps** - Click the temps to set them without needing to open the control panel.
- **Printer Control Panel** - Access the [Printer Control Panel](docs/printing/printer-management/printer-control-panel.md) via the game controller icon
- **Printer Slicer Settings** - Access printer-specific settings via the gear icon
- **Part Navigation** - View part details by clicking on the part name or thumbnail (Printago jobs only)