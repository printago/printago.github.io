---
sidebar_position: 1
---

# Part Management

Parts are the foundation of your 3D printing workflow in Printago. A part represents any 3D model that you want to print, and can be used across multiple SKUs.

![Parts List](/images/parts-list.png)

## Key Concepts

- **Supported file types**: Printago accepts STL, STEP, 3MF (sliced and unsliced), OpenSCAD (.scad), and gcode.3mf files, each with different capabilities
- **Cross-printer compatibility**: Most part types work across all printer models in your farm without creating separate files (exception: gcode.3mf files are printer-specific)
- **Part processing pipeline**: Uploaded parts are automatically parsed for metadata, thumbnails are generated, and files are sliced on-demand when matched to a printer
- **On-demand slicing**: Parts are sliced at print time for the specific printer/material/profile combination, with results cached for future prints
- **Material mapping**: Each part can have materials assigned from your Material Library, allowing flexible matching across your printer fleet
- **Folder organization**: Parts are stored in your current folder location and can be organized using [Printago's folder system](/docs/features/folders.md)

## Supported Part Types

Printago supports several types of parts, each with different capabilities:

| Part Type | Description | Capabilities |
|-----------|-------------|--------------|
| **STL** | Static models | Same as STEP files to Printago - single material, can set slicer process per-part override |
| **STEP** | Static models with single material | Can set slicer process per-part as an override |
| **3MF Projects** | Complete projects with all modifiers | Preserves all modifiers, negative parts, support enforcers, and any type of painting. 3MFs are preserved and can easily be sliced and sent to any printer they fit on |
| **OpenSCAD** | Parametric design files | Parametrically generate STL files with customizable parameters |
| **ColorSCAD** | Enhanced OpenSCAD | Add-on feature allowing you to define colors in OpenSCAD models to paint them |
| **GCODE 3MF** | Pre-sliced files | From Bambu Studio or Orca - tightly bound to the type of printer they were sliced for, however can still re-map materials as required |

## Cross-Printer Compatibility

Using Printago, your parts are seamlessly used across any models of printers in your farm.  A 3MF created for a Bambu A1 Mini will work on a Bambu P1S and vice versa and without creating seperate files for each printer.  The same goes for all other part types, *except* for `gcode.3mf` files.  More information about how this works can be found on the [Cloud Slicer](/docs/printing/cloud-slicer.md) page.

## Part Processing
Printago automatically processes uploaded parts to:
- Parse material, color, and build-plate metdata (3MF).
- Generate thumbnails and previews
- Calculate print time estimates (coming soon)
- Calculate material usage estimates (coming soon)

When parts are used in print jobs, they're sliced on-demand for the specific configuration (printer model, material, process settings, build plate type, etc). Printago intelligently caches the generated G-code in the background for faster future prints. When you update a part or change a setting, Printago automatically re-slices it with the new configuration.  

[Read more about how slicing works in Printago](/docs/printing/cloud-slicer.md).

---

## Adding Parts to Printago

1. Navigate to `Products -> Parts` and click `+ Add Part` in the top right.
2. Browse or drag a compatible file into Printago.
<img src="/img/parts/add_parts_1.gif" className="margin-left--lg" width="600" alt="click the new part button" />
3. Enter a name and description for your part.
4. Parts are created in your current [folder location](/docs/features/folders.md) (click to change if needed).
5. Select your slicer (3MF files auto-select the matching version with an "Auto-Selected" badge).
6. Choose a [process profile override](/docs/printing/cloud-slicer.md), or leave as "Printer Default" to use each printer's default settings.
7. Review the build plates and materials detected in your file.
8. Map each material to items in your [Material library](/docs/printing/materials.md).
9. Click `Create` to upload your part.
<img src="/img/parts/part_screen.png" className="margin-left--lg" width="600" alt="click the new part button" />

## File-Specific Settings

Different file types have unique capabilities and configuration options:

- **[STL and STEP Parts](./stl-step-parts.md)** - Static single-material parts with process profile overrides
- **[3MF Project Files](./3mf-project-files.md)** - Complete projects with modifiers, supports, and multi-material painting  
- **[GCODE 3MF Files](./gcode-3mf-files.md)** - Pre-sliced files with printer-specific limitations
- **[Dynamic OpenSCAD Parts](./openscad/openscad-parts.md)** - Parametric parts with customizable parameters

---

## Troubleshooting

### Part Upload Fails or Stalls

- Verify the file is a supported format (STL, STEP, 3MF, .scad, or gcode.3mf)
- Check that the file is not corrupted by opening it in your slicer or CAD tool first
- Ensure the file size is within acceptable limits; very large files may take longer to process

### Thumbnails or Previews Not Generating

- Refresh the page after uploading -- the processing pipeline may still be running
- If the preview remains blank, the geometry may be invalid; re-export the file from your slicer

### Materials Not Detected Correctly

- For 3MF files, ensure materials are properly assigned in Bambu Studio or Orca Slicer before exporting
- For STL/STEP files, materials must be assigned manually during the part creation workflow

### Part Not Matching to Printers

- Confirm the assigned materials exist in your [Material Library](/docs/printing/materials.md) and are loaded on at least one printer
- Check that the part dimensions fit on the target printer's build plate

:::tip
If changes to a part or profile do not appear to take effect, refresh the page to reconnect the realtime service.
:::

---

## FAQ

**Q: Can I use the same part across different printer models?**
A: Yes. All part types except gcode.3mf files work across any compatible printer in your farm. Printago handles slicing for each printer model automatically via the [Cloud Slicer](/docs/printing/cloud-slicer.md).

**Q: What happens when I update a part file?**
A: Printago automatically invalidates any cached slicing results and re-slices the part with the current configuration the next time it is printed.

**Q: How do I choose the right file format for my parts?**
A: Use 3MF for complex multi-material prints with modifiers, STL/STEP for simple single-material parts, OpenSCAD for parametric designs, and gcode.3mf only when you need exact control over pre-sliced G-code.

**Q: Can I organize my parts into folders?**
A: Yes. Parts are created in your current folder location. You can create and manage folders using the [folder system](/docs/features/folders.md).

**Q: Is there a limit to how many parts I can upload?**
A: There is no hard limit on the number of parts. However, very large files may take longer to process. Check your plan details for any storage-related limits.

---

Need help with your parts? Contact our support team or check our troubleshooting guides, or join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!