---
sidebar_position: 1
---

# Part Management

Parts are the foundation of your 3D printing workflow in Printago. A part represents any 3D model that you want to print, and can be used across multiple SKUs.

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

<img src="/img/parts/add_parts_1.gif" className="margin-left--lg" width="500" alt="Orca Sync Preferences" />

1. Navigate to `Products -> Parts` and click the `+ Add Part` button in the top right.
2.  Browse to or drop a compatible file type into Printago.  



4. Give your part a name and description
5. Select the `Allowed Filaments` for the part, as required.  This restricts parts to match with printers loaded with this material type.

6. Select a `Process Profile` to assign to the part.
7. Click "Save" to add the part to your library

:::info Maintainability
When Bambu Lab releases new slicer features, just sync your profiles and we'll automatically re-slice your parts with the latest improvements.
:::

## File-Specific Settings

### OpenSCAD Parameters
If you're using OpenSCAD files, you'll also:
- Be prompted to upload any files leveraged via `import` or `use` statements.
- See parsed parameters, their types, and default values.

See our [OpenSCAD Part Guide](./openscad/openscad-parts.md) guide for more details.

### 3MF-Specific Settings
When using 3MF files, Printago preserves:
- Object placement on the build plate
- Support structure settings
- Seam placement settings

:::important 3MF notes
1. Only the first build plate will be processed from multi-plate files.
2. Slicing settings must be saved in Bambu Studio or Orca Slicer, not embedded within the 3MF file.
3. Color-Painted projects are fully supported, however, without any AMS mapping options
     (`SLOT1` -> `SLOT1` and  `SLOT2` -> `SLOT2`, as so on)
:::

:::warning Part fitment
Printago assumes each of your parts will fit on any of your printers.  It is (currently) up to you, the user, to ensure large prints to not get assigned to A1 Mini.  If they do, the job will be in the `Error` tab of the `Print Queue` page, as it will fail in the slicing phase.
:::

## Next Steps

After adding parts to your library, you can:
- [Create SKUs using these parts](./sku-management.md)
- [Set up automated customization](./openscad/openscad-intro.md)
- Begin production!

Need help with file formats? Contact our support team or check our troubleshooting guides, or join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!
