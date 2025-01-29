---
sidebar_position: 1
---

# Supported File Types

Printago supports the most common 3D model file formats used in the industry. Upload your files directly to our cloud platform and let us handle the rest! 🚀

:::caution Important
We do not support direct G-code files (.gcode) or G-code embedded 3MF files (.gcode.3mf). These files contain printer-specific instructions that may not be compatible with your setup. Instead, upload your source model files and let Printago handle the slicing automatically!
:::

## STL Files
The industry standard for 3D printing. STL files describe only the surface geometry of three-dimensional objects. Perfect for basic models and most printing needs.

## STEP/STP Files
Professional-grade 3D CAD files that maintain precise geometry and assembly information. Ideal for engineering projects and complex parts.

## 3MF Files
Modern 3D Manufacturing Format files that can include color, materials, and other printing preferences. Note: we support standard 3MF files but not .gcode.3mf files.

:::info 3MF notes

1. Only the first build plate will be processed from multi-plate files.
2. Slicing settings must be saved in Bambu Studio or Orca Slicer, not embedded within the 3MF file.
3. Color-Painted projects are fully supported, however, without any AMS mapping options
     (`SLOT1` -> `SLOT1` and  `SLOT2` -> `SLOT2`, as so on)
4. Full-support of "painted" support enforcers/blockers.  As well as "painted" seams.
5. Object placement on the build plate is preserved.

:::

## OpenSCAD Files
Parametric design files that generate models through code. Perfect for creating customizable products with Printago. [Learn more about our OpenSCAD integration](./openscad).