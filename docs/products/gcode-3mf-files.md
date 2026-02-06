---
sidebar_position: 4
---

# Gcode.3mf Files

gcode.3mf files are pre-sliced files from Bambu Studio or Orca Slicer that contain ready-to-print G-code wrapped in a 3MF container. While Printago supports gcode.3mf, we recommend using other formats for most workflows.

## Key Concepts

- **Pre-sliced files**: gcode.3mf files contain final G-code ready for immediate printing -- they cannot be resliced by Printago
- **Printer-specific**: Each gcode.3mf is locked to the exact printer model it was sliced for and will not work on other models
- **Limited flexibility**: Temperature, speed, and other print settings are baked into the G-code and cannot be changed by Printago
- **Material remapping**: Basic material remapping is supported (e.g., swapping color variants within the same material type), but temperature settings remain fixed
- **Migration path**: For most workflows, migrating to STL/STEP, unsliced 3MF, or OpenSCAD provides significantly more flexibility and cross-printer compatibility

## What Are Gcode.3mf Files?

gcode.3mf files contain:
- **Pre-sliced G-code** - Ready for immediate printing
- **Printer-specific settings** - Baked into the G-code
- **No geometry data** - Only contains print instructions and metadata

### Key Limitations

- **Printer-specific** - Only works with the exact printer model they were sliced for
- **No re-slicing** - Cannot use Printago's slice-on-demand features

<div className="margin-left--lg">
:::tip 
Printago supports gcode.3mf files, but we recommend using other formats to take full advantage of our automatic slicing capabilities.
:::
</div>

## When to Use gcode.3mf Files

Consider gcode.3mf only in these specific cases:
- **Legacy projects** - When original model files are unavailable
- **Custom G-code** - For prints requiring manual G-code modifications
- **Beta slicer features** - When using unreleased slicer versions
- **Printer testing** - For sending custom G-code commands

## Adding gcode.3mf Files

1. Go to `Products -> Parts`
2. Click `+ Add Part`
3. Upload your `.gcode.3mf` file
4. Configure part settings:
   - **Name and Description**: Identify your part
   - **Allowed Filaments**: Must match G-code requirements
   - **Target Printer Types**: Specify compatible printers

<img src="/img/parts/add_gcode3mf.png" className="margin-left--lg" width="600" alt="Adding a gcode.3mf file" />

## Material Remapping

gcode.3mf files support basic material remapping:
- Reassign color variants within the same material type
- Printago can auto-map similar materials
- Temperature settings remain fixed in the G-code

## Migration to Better Formats

For better workflow management, consider migrating to:
- **STL/STEP** - For simple parts with custom profiles
- **3MF** - For complex parts with modifiers and settings
- **OpenSCAD** - For parametric or customizable designs

This approach keeps your library clean and takes full advantage of Printago's features.

## Troubleshooting

### File Not Recognized as gcode.3mf

- Ensure the file was exported using `File -> Export plate sliced file` in Bambu Studio or Orca Slicer
- Check that the file extension is `.3mf` and that it contains sliced G-code (not a project save)

### Part Will Not Match to Any Printer

- gcode.3mf files only work with the exact printer model they were sliced for; verify the target printer type matches
- Check that the specified printer model is online and available in your Printago farm

### Material Remapping Not Working as Expected

- Temperature and speed settings are baked into the G-code and cannot be changed via remapping
- Remapping is limited to swapping color variants within the same material type; switching between fundamentally different materials (e.g., PLA to ABS) may produce unsafe results

### Print Quality Issues After Remapping Materials

- The G-code was optimized for the original material; remapping to a different material variant may result in suboptimal print quality
- Consider migrating to an unsliced format (STL, STEP, or 3MF) for full material flexibility

:::info
gcode.3mf files cannot benefit from slicer improvements or profile updates without re-exporting from your slicer. Consider migrating to other formats for a more maintainable workflow.
:::

---

## FAQ

**Q: Can I use a gcode.3mf sliced for a Bambu P1S on a Bambu X1 Carbon?**
A: No. gcode.3mf files are locked to the specific printer model they were sliced for. You would need to reslice the original model for the X1 Carbon and re-export.

**Q: Why does Printago recommend against gcode.3mf files?**
A: Because they cannot be resliced, they miss out on Printago's core features like cross-printer compatibility, on-demand slicing, and automatic profile updates. Other formats provide far more flexibility.

**Q: Can I change print temperatures when using gcode.3mf?**
A: No. All temperature, speed, and other settings are embedded in the G-code and cannot be modified by Printago. To change settings, reslice the original model and re-export.

**Q: When is gcode.3mf the right choice?**
A: Use gcode.3mf only when original model files are unavailable, when you need manual G-code modifications, when testing beta slicer features, or when sending custom G-code commands for printer testing.

**Q: How do I migrate away from gcode.3mf files?**
A: Locate the original model files (STL, STEP, or 3MF project) and upload those to Printago instead. This gives you full access to cross-printer slicing, material flexibility, and automatic profile updates.
