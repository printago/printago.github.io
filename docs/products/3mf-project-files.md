---
sidebar_position: 3
---

# 3MF Project Files

3MF (3D Manufacturing Format) parts are complete projects that preserve all your slicer settings, modifiers, and design decisions. Printago fully supports 3MF files from Bambu Studio and Orca Slicer.

## What Makes 3MF Special

3MF files save everything about your print setup:
- **Object placement** on the build plate
- **All modifiers** (support enforcers/blockers, seam placement, etc.)
- **Negative parts** for complex geometries
- **Support structure settings**
- **Color painting** and multi-material assignments
- **Print settings** and configurations

## 3MF in Printago

3MF files in Printago work across different printer models. A 3MF made for an A1 Mini works on an X1 or P1, as long as everything fits on the build plate.

## Adding 3MF Parts

1. Go to `Products -> Parts` and click `+ Add Part`
2. Drag in your .3mf file or browse to upload
 <div className="margin-left--lg">
<img src="/img/parts/add_parts_1.gif" className="margin-left--md" width="600" alt="Uploading a 3MF file" />
</div>
3. Name your part and add a description if needed
4. Choose where to save it (defaults to your current folder)
5. Printago will auto-select the right slicer version (look for the "Auto-Selected" badge)
6. Pick your process profile:
   - `Embedded 3MF Profile`: Uses the settings saved in the file
   - `Custom Profile`: Use one of your snyced User Settings for this part.
   - `Printer Default`: will use the default profile assigned to any printer the part matches with
7. Check the build plates and materials found in your file
8. Match materials to your [Material library](/docs/printing/materials.md)
9. Click `Create` to finish

<img src="/img/parts/part_screen.png" className="margin-left--lg" width="600" alt="3MF part setup screen" />

## Why Use 3MF?

- **Keep your settings**: Your exact slicer setup stays the same
- **Works anywhere**: Use the same file on different printers  
- **Multi-material ready**: Required for color changes and material switching
- **Handle multiple plates**: Print or add plates to SKUs one by one
