---
sidebar_position: 1
---

# Printer Management

Configure your 3D printers for automatic job matching and slicing. Manage your day-to-day operations like changing materials and letting Printago know the printer is ready to accept jobs.

### Required Configuration
For jobs to match with printers from the queue, each printer must be properly configured:

**1. Material Assignment**
- At least one material must be loaded and assigned to the Printer.
- Materials are assigned through the [Material Assignment](#material-assignment) window

**2. Slicer Profiles**
- **Machine Profile**: Slicer setting from Bambu Studio or Orca (default or sync'd [User Profile](/docs/printing/slicer-profiles.md))
- **Process Profile**: Used as a fallback whenever a part does not specify a process profile.

**3. Printer-Specific Settings** 
<div className="margin-left--lg">

    For Bambu Lab printers:
        - **Bed Type**: Smooth PEI, Textured, etc.
        - **Use AMS**: Controls whether the printer uses the AMS system.  The printers list only shows the active material source (AMS slots or external spool)
        - **Bed Leveling & Flow Calibration**: Standard Bambu "start print" options
</div>
### Slicer Configuration Dialog

- **Printers page**: Select printer → "Slicing Configuration" button
- **Dashboard**: Click gear icon ⚙️ on any printer

<div className="margin-left--md">
:::tip Multi-Printer Configuration
For multiple printers with identical model and nozzle configuration, click `Save to All Similar Printers` in the Slicer Configuration dialog.  

**Quick Select:** In the Printers List, select one printer and press `G` to automatically select all printers with matching model and nozzle size.
:::
</div>
---

## Printers List

Navigate to `Printing → Printers` to view all printers with their current status and loaded materials.  Click on any printer to go to its [Printer page](#printer-page)

<img src="/img/printers/printers1.png" width="800" alt="Printers list view" />

### Display Information
- **Printer Name and Info**: Shows the printer's name, model, serial number, and nozzle diameter.
- **Printer status**: Current state and connection status
- **Material Info**: Shows AMS slots (if "Use AMS" enabled) or external spool
- **Material Assignment**: Click any filament slot to open Material Assignment window
- **Configuration Warnings**: Alerts about issues that prevent the printer from accepting jobs.

<div className="margin-left--lg">
<img src="/img/printers/printers3.png" width="300" alt="Individual printer view" />
</div>

### Multi-Printer Actions

Select multiple printers using checkboxes to access bulk operations via the Actions menu.

**Keyboard Shortcuts:**
- `A` - Toggle select all printers (press again to deselect all)
- `G` - Select all printers matching the first selected (same model/nozzle)
- `R` - Mark selected printers as ready (skips printers that are currently printing)

**Available Actions:**
- **Availability**: Mark ready (`R`) or not-ready (`U`)
- **FabMatic**: Enable/disable [continuous printing](/docs/printing/fabmatic.md)
- **Control Panel**: Multi-printer control (`P`)
- **Configure**: Bulk slicer configuration (`C`)
- **Materials**: Bulk material assignment (`M`)
- **Tags**: Bulk tag editing (`T`)
- **Temperature**: Quick bed/nozzle temperature presets

---

## Printer Page

Each printer page displays:

1. **Printer Information**: Name, type, connection status
2. **Current Job**: Active print information
3. **Print Controls**: Pause/Stop buttons
4. **Slicer Configuration**: Access printer/process profiles, bed type, and print-start options
5. **[Printer Tags](/docs/printing/printer-management/printer-tags.md)**: Dynamic grouping labels
6. **[Control Panel](/docs/printing/printer-management/printer-control-panel.md)**: Manual printer control & calibration tools
7. **Ready Button**: "Confirm clear & ready for next print" - let's Printago know this printer may accept a job.
8. **HMS Alerts**: Displays any Health and Maintenance System (HMS) warnings or errors from Bambu Lab printers, with direct links to the relevant Bambu Lab Wiki articles for resolution.

<img src="/img/printers/printers2.png" width="800" alt="Individual printer view" />

### Ready State Management

The `Confirm clear & ready for next print` button is critical for queue processing. Click after:
- Print completion
- Printer recovery from unknown state
- Printer comes online
- Manual bed clearing

**Alternatives:**
- Multi-action from Printers page
- [FabMatic mode](/docs/printing/fabmatic.md) for continuous operation

---

## Material Assignment

Click any AMS slot or external spool to open the Material Assignment window.

<img src="/img/printers/printer_material_selection_1.png" width="600" alt="Material assignment window" />

Click any AMS slot or external spool to open the Material Assignment window.

### RFID Material Detection

For Bambu Lab RFID-tagged filament:
- **Auto-detection**: Automatically reads loaded spools
- **Missing materials**: Warning if material not in your library
- **Manual override**: Option to assign different material than RFID tag

:::note Bambu Lab Material Handling
- External spool material can be assigned in Printago without physical material loaded
- AMS slots require physical material to be loaded before assignment in Printago
:::

### Manual Material Assignment

1. **Select slot**: Click empty or occupied slot
2. **Choose material**: Select from your Material library
3. **Assignment options**:
   - Generic material (e.g., "Bambu Basic PLA")
   - Specific variant (e.g., "Bambu Basic PLA - Black")

### Configuration Warnings

- **Missing profiles**: Alert when materials lack slicing profiles for current nozzle size
- **Incompatible setup**: Notification when switching nozzle sizes without matching material profiles

:::info Material Library
For detailed material management, see the [Materials documentation](/docs/printing/materials.md).
:::

---

## AMS Configuration

The "Use AMS" checkbox in slicer configuration controls:

**When Enabled:**
- AMS slots visible in UI
- AMS information shown on printer lists
- Multi-slot material management

**When Disabled:**
- Only external spool holder available
- AMS hidden from interface
- Single material assignment

---

## Related Documentation

- **[Printer Tags](/docs/printing/printer-management/printer-tags.md)**: Dynamic printer grouping and job routing
- **[Printer Control Panel](/docs/printing/printer-management/printer-control-panel.md)**: Manual printer operation and calibration
- **[Materials](/docs/printing/materials.md)**: Material library management and profiles
- **[Cloud Slicer](/docs/printing/cloud-slicer.md)**: Understanding slicer profiles and settings
- **[FabMatic](/docs/printing/fabmatic.md)**: Continuous printing automation

Need help with printer setup? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and latest updates!
