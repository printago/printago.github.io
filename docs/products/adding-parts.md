---
sidebar_position: 2
---

# Adding Parts
 
Parts are the foundation of your 3D printing workflow in Printago. A part represents any 3D model that you want to print, and can be used across multiple SKUs.

## Supported File Types

Printago supports the most common 3D model file formats. For a complete list of supported file formats and their capabilities, see our [Supported File Types](./parts-management.md#supported-file-types) guide.

## Adding Your First Part

1. Navigate to `Products -> Parts`.
2. Click the `+ Add Part` button in the top right
    <img src="/img/add_part_1.gif" width="650" alt="add part 1" />
3. Click to browse and locate your model on your computer.
4. Give your part a name and description
5. Select the `Allowed Filaments` for the part, as required.  This restricts parts to match with printers loaded with this material type.
6. ***Coming Soon: Assign Color Group Requirement***
6. Select a `Process Profile` to assign to the part.
7. Click "Save" to add the part to your library
    <img src="/img/add_part_2.gif" width="650" alt="add part 2" />
:::info Part Process Profiles
Printago slices your parts on-demand when they're assigned to a printer. If you haven't set a specific `Process Profile` for a part, we'll use the printer's default settings.

- **Cross-Printer Compatibility** - Your process profiles work across your entire mixed-printer farm. Create a profile once in your slicer, and use it anywhere—whether you're printing on an X1C or an A1 Mini.

- **Maintainability** - Forget about managing G-code files. Just version your 3D models, and let us handle the rest. We generate and cache G-code behind the scenes (don't worry, you can still download it if needed). When Bambu Lab releases new slicer features, just sync your profiles and we'll automatically re-slice your parts with the latest improvements.
:::

### OpenSCAD Parameters
    If you're using OpenSCAD files, you'll also:
    - Be prompted to upload any files leveraged via `import` or `use` statements.
    - See  parsed parameters, their types, and default values.
    
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

Have questions about parts? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!