---
sidebar_position: 1
---

# Dashboard

The Printago Dashboard is your central hub for monitoring and managing all connected 3D printers. It provides real-time status updates, job progress tracking, and quick access to printer controls.

![Dashboard Overview](/images/dashboard-overview.png)

## Key Concepts

- **Printer Cards** -- Each connected printer is represented as a card showing real-time status, temperatures, job progress, and quick-action controls.
- **Status Indicators** -- Color-coded borders on each card indicate the printer's current state (Busy, Waiting, Ready, Needs Config, Offline, Stale, Disabled).
- **All-Source Job Monitoring** -- The dashboard shows jobs from all sources, including Printago, external slicers (Orca Slicer, Bambu Studio), Bambu Handy, and SD card prints.
- **Quick Actions** -- Set printers as ready, adjust temperatures, access the control panel, and navigate to part details directly from the dashboard.
- **Real-Time Updates** -- Printer data updates in real time via Printago's realtime service, so status changes appear without manual refreshing.

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
This differs from the **In-Progress** tab in the [Print Queue](/docs/printing/print-queue-management), which only shows jobs initiated through Printago.
:::

### Dashboard Actions

The dashboard provides quick access to several important features:

- **Set Clear & Ready** - After a job completes, the status indicator will switch to a button labeled `Set Ready`
- **Quick-Set Printer Temps** - Click the temps to set them without needing to open the control panel.
- **Printer Control Panel** - Access the [Printer Control Panel](docs/printing/printer-management/printer-control-panel.md) via the game controller icon
- **Printer Slicer Settings** - Access printer-specific settings via the gear icon
- **Part Navigation** - View part details by clicking on the part name or thumbnail (Printago jobs only)

## Troubleshooting

### Printer Card Shows "Offline" or "Stale"

1. Check that your printer is powered on and connected to the network
2. For Cloud Mode printers, verify your Bambu Lab authentication has not expired
3. For Fuse-connected printers, check the Fuse Status page to confirm the client is running and connected
4. Try refreshing the page to re-establish the realtime connection

### Dashboard Not Updating in Real Time

1. Refresh the browser page -- the realtime service may need to reconnect
2. Check your internet connection
3. If using the PWA, close and reopen the app
4. Clear your browser cache if the issue persists

### Job Shows on Dashboard but Not in Print Queue

This is expected behavior. The dashboard shows jobs from all sources (including external slicers and SD card prints), while the Print Queue only shows jobs initiated through Printago.

## FAQ

**Q: Does the dashboard show jobs started from Bambu Studio or OrcaSlicer?**
A: Yes. The dashboard monitors all jobs running on your connected printers, regardless of how they were started. The Print Queue's In-Progress tab, however, only shows Printago-initiated jobs.

**Q: What does the "Needs Config" (yellow) status mean?**
A: This means the printer is missing its slicing configuration (machine profile, process profile, or materials). Click the gear icon on the printer card to configure it.

**Q: Can I control printer temperatures from the dashboard?**
A: Yes. Click the temperature readings on a printer card to set bed and nozzle temperatures directly without opening the full control panel.

**Q: How do I mark a printer as ready after a completed print?**
A: After a job completes, the status indicator changes to a "Set Ready" button. Click it to mark the printer as clear and ready for the next job.