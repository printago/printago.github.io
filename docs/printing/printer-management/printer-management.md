
# Printer Management

## Key Concepts

**Printer management** is how you configure your physical printers so they can participate in Printago's automatic job matching and production system. Each printer needs three things to receive jobs: assigned materials (so the queue knows what filament is loaded), slicer profiles (so the cloud slicer can generate G-code for that machine), and printer-specific settings like bed type and AMS configuration. Once configured, a printer enters the queue's matching pool and can receive jobs automatically based on material compatibility and tag filters. Day-to-day operations center on marking printers as "clear and ready" after removing a completed print, swapping materials when needed, and monitoring status. The goal is to make each printer a self-sufficient worker in your production system—load filament, clear the bed, and let Printago handle job routing and slicing.

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
        - **Use AMS**: Controls whether the printer uses the AMS system.  The Printers list only shows the active material source (AMS slots or external spool)
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
- **FabMatic**: Enable/disable [continuous printing](/docs/printing/fabmatic-continuous-printing.md)
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
- [FabMatic mode](/docs/printing/fabmatic-continuous-printing.md) for continuous operation

---

## Material Assignment

Click any AMS slot or external spool to open the Material Assignment window.

<img src="/img/printers/printer_material_selection_1.png" width="600" alt="Material assignment window" />

### How Material Assignment Works

The standard material assignment process:

1. **Click any slot**: Select an AMS slot or external spool
2. **Choose material**: Select from your Material library
3. **Assignment options**:
   - **Specific material** (e.g., "Bambu Basic PLA - Black") - uses configured profiles (recommended)
   - **Generic type** (e.g., "Any PLA") - prompts for inline slicing profile selection

:::warning Generic Material Assignment
While you *can* set a generic filament profile directly on the printer (bypassing Printago's material system), this isn't recommended. Here's why:

- **Limited matching**: Only parts set to `Any {Material-Type}` will match (e.g. "Any PLA")
- **More specific Part settings won't match**: If a part requires "Bambu TPU for AMS" specifically, it won't match a generic "Any TPU-AMS" assigned printer.
- **Reduced flexibility**: You lose the benefits of Printago's material management system
:::

### Bambu Lab RFID Enhancement

When using Bambu Lab RFID-tagged filament, the process is enhanced with automatic detection:

#### Automatic Material Detection
- **Auto-reads**: Printago automatically detects the material and color from the RFID tag
- **Instant assignment**: Material is assigned without manual selection
- **Missing material workflow**: Quick-add buttons appear for materials not in your library

#### Missing Material Quick-Add

When RFID-tagged filament isn't in your library:
<div className="margin-left--lg">
**Step 1: Add Base Material**
Click `Add missing material for [Bambu] { MATERIAL-TYPE }` to add the base material (e.g., "TPU for AMS").

**Step 2: Add Color Variant** 
Click `Add missing variant "{ COLOR }"` to add the specific color variant.

**Step 3: Configure Profiles** 
Save the Printer, and go to the [Materials](/docs/printing/materials.md) page to set up slicing profiles for the Material.

<img src="/img/printers/printer_material_selection_2.png" width="400" alt="Add missing material button" />
<img src="/img/printers/printer_material_selection_4.png" width="400" alt="Add missing variant button" />
</div>
#### RFID Override
To assign a different material than the RFID tag, click **"Assign a material manually"** to enable normal selection from your Material library.

<div className="margin-left--lg">
<img src="/img/printers/printer_material_selection_5.png" width="400" alt="Manual material assignment override" />
</div>

:::note Bambu Lab Material Handling
- External spool material can be assigned without physical material loaded
- AMS slots require physical material to be loaded before assignment
- All Bambu Lab materials and variants are built into Printago for easy addition
:::

### Material Slicer Configuration Warning
When selecting materials for a printer, it's possible to assign a material which doesn't have a slicing profile assigned to it for the model of printer in question.  
<div className="margin-left--md">
<img src="/img/printers/printer_material_selection_7.png" width="400" alt="Profile missing warning" />
</div>
Materials tagged with `Missing Profile (won't match)` is letting you know that jobs will not be able to be assigned to this material in the printer until it's resolved. This commonly happens when switching nozzle sizes (e.g., from 0.4mm to 0.2mm) or adding new printer models without matching material profiles.

**Resolution**: Go to Materials page → Open material → Configure slicing profiles for each printer model + nozzle diameter combination

:::info Material Library
For detailed material management and profile configuration, see the [Materials documentation](/docs/printing/materials.md).
:::

---

## AMS Configuration

The `Use AMS` checkbox in slicer configuration controls:
<div className="margin-left--md">
**When Enabled:**
- AMS slots visible in UI
- AMS information shown on printer lists
- Multi-slot material management

**When Disabled:**
- Only external spool holder available
- AMS hidden from interface
- Single material assignment
</div>
<div className="margin-left--sm">
<img src="/img/printers/printers4.png" width="600" alt="Profile missing warning" />
</div>

---

## Related Documentation

- **[Printer Tags](/docs/printing/printer-management/printer-tags.md)**: Dynamic printer grouping and job routing
- **[Printer Control Panel](/docs/printing/printer-management/printer-control-panel.md)**: Manual printer operation and calibration
- **[Materials](/docs/printing/materials.md)**: Material library management and profiles
- **[Cloud Slicer](/docs/printing/cloud-slicer.md)**: Understanding slicer profiles and settings
- **[FabMatic](/docs/printing/fabmatic-continuous-printing.md)**: Continuous printing automation

Need help with printer setup? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and latest updates!
