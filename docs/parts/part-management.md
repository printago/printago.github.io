
# Part Management

## Key Concepts

A **part** in Printago is an uploaded 3D model file—STL, STEP, 3MF, OpenSCAD, or GCODE—along with its associated printing configuration such as material requirements, slicer process profiles, and build plate settings. Parts are the atomic unit of your print library: every print job in Printago originates from a part, and parts can be reused across multiple SKUs to build complete products. Because Printago's cloud slicer generates printer-specific G-code on demand, a single part file works across every compatible printer in your fleet without needing separate exports for each machine model. Whether you're prototyping a one-off design or producing thousands of units across dozens of printers, parts give you a single source of truth for each model's geometry and print settings.

![Parts List](/images/parts-list.png)

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
4. Parts are created in your current [folder location](/docs/tools/folders.md) (click to change if needed).
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

Need help with your parts? Contact our support team or check our troubleshooting guides, or join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!