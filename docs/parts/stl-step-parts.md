
# STL and STEP Parts

STL and STEP files are static 3D models that work identically in Printago's system. Both file types represent single-material parts that can have custom slicer process profiles applied.

## Overview

Both STL and STEP parts are treated the same way by Printago:
- **Single Material**: Each part uses one material type
- **Process Override**: Can set custom slicer process per-part  
- **Static Geometry**: No parametric or customizable elements

## Adding STL/STEP Parts

1. Navigate to `Products -> Parts` and click `+ Add Part` in the top right.
2. Browse or drag a compatible file into Printago.
3. Enter a name and description for your part.
4. Parts are created in your current [folder location](/docs/tools/folders.md) (click to change if needed).
5. Select your preferred slicer.  You can change your default in your [Account Settings](/docs/settings/account-settings.md#slicer-settings)
6. Choose a [process profile override](/docs/printing/cloud-slicer.md), or leave as "Printer Default" to any printer's default setting.
7. Select 1+ materials for the part.  This is used to match the part with the correct printers.[Material library](/docs/printing/materials.md).  
9. Click `Create` to upload your part.
<img src="/img/parts/stl-step-screen.png" className="margin-left--lg" width="600" alt="click the new part button" />

## Material Selection

When adding a part, you can assign multiple materials that are compatible with it. Printers will match these materials in the order you specify, using the first available match when printing.  

This mapping can be edited each time the part is added to the queue for printing.

<img src="/img/parts/material_selection_1.png" className="margin-left--lg margin-top--md margin-bottom--md" width="600" alt="material selection modal" />
You can specify materials at different levels of specificity:

- **Material Type Only**: Match any brand and color (e.g., "Any ABS")
- **Brand + Type**: Match any color of a specific brand and material (e.g., "Any Bambu Basic PLA")
- **Specific Variant**: Match an exact material variant including color (e.g., "Sunflower Yellow Bambu Basic PLA")

This flexible system allows you to balance between printer availability and material requirements.

## Process Profile Override

Setting a custom process profile on STL/STEP parts provides powerful workflow advantages:

- **Cloud-Synced Settings**: Process profiles are pulled from your Bambu Lab account's "User Profiles".
- **Printer-Agnostic**: Settings are independent of any specific printer, making them work across your entire fleet
- **Smart Slicing**: Just hit print - the system automatically handles slicing and caching behind the scenes
- **Centralized Updates**: Update a profile once, and all parts using it automatically benefit from the changes

For example, when new slicer features become available (like fuzzy skin or scarf seams), simply update your profile in Bambu Studio and sync with Printago. All parts using that profile will automatically use the updated settings on their next print, with no additional work required from you.

Learn more about [managing slicer profiles](/docs/printing/slicer-profiles.md) and [cloud-based slicing](/docs/printing/cloud-slicer.md).

## STL/STEP Tips

- **Use STEP files** when you have complex curved surfaces or need maximum geometric precision
- **Use STL files** for simpler parts or when file size matters
- **Set material restrictions** to ensure parts only print with compatible filaments
- **Create reusable process profiles** for similar part types
