---
sidebar_position: 3
---

# 3MF Project Files

3MF (3D Manufacturing Format) parts are complete projects that preserve all your slicer settings, modifiers, and design decisions. Printago fully supports 3MF files from Bambu Studio and Orca Slicer.

## Key Concepts

- **Sliced vs. unsliced 3MF**: Unsliced 3MF files (recommended) contain models and settings but no G-code, allowing Printago to reslice for any compatible printer. Sliced 3MF files contain pre-generated G-code locked to a specific printer model.
- **Multi-material support**: 3MF files preserve color painting and multi-material assignments, making them essential for multi-filament prints
- **Modifiers and supports preservation**: All modifiers (support enforcers/blockers, seam placement, negative parts) are retained when uploading to Printago
- **Cross-printer compatibility**: An unsliced 3MF made for one printer model works on any other compatible model, as long as the objects fit on the build plate
- **Process profile options**: You can use the profile embedded in the 3MF, select a custom synced profile, or fall back to the printer's default
- **Auto-detected slicer version**: Printago detects which slicer and version created the 3MF and auto-selects the matching slicer

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

## Sliced vs Unsliced 3MF Files

Understanding the difference between sliced and unsliced 3MF files is important for getting the most flexibility from Printago.

### Unsliced 3MF Files (Recommended)

**Unsliced 3MF files** contain the 3D model and settings but no GCODE. These are the files you create by simply saving your project in Bambu Studio or Orca Slicer.

**How to export**: In Bambu Studio or Orca Slicer, use `File → Save Project` or press `Ctrl/Cmd + S`.

**Benefits**:
- ✅ Works on any compatible printer (A1, P1, X1, etc.)
- ✅ Printago can reslice with different materials
- ✅ Material profiles are applied automatically
- ✅ Can switch from PLA to PETG, Sparkle to Matte, etc.
- ✅ Uses correct settings for each printer model

**When Printago slices**: After a job is matched to a printer, it goes through a slicing step using:
- The printer profile from the matched printer
- The filament profiles from your assigned materials
- The process profile from the 3MF or printer default

### Sliced 3MF Files (GCODE 3MF)

**Sliced 3MF files** contain pre-generated GCODE. These are created by exporting the plate after slicing.

**How to export**: In Bambu Studio or Orca Slicer, slice your model, then use `File → Export plate sliced file`.

**Limitations**:
- ⚠️ Locked to specific printer model
- ⚠️ Cannot be resliced by Printago
- ⚠️ Material changes won't affect print settings
- ⚠️ Uses the exact GCODE that was exported

**When to use**: Only use sliced 3MF files when you need absolute control over the exact GCODE being sent to the printer, or when you've done extensive manual GCODE modifications.

:::tip Best Practice
Use unsliced 3MF files whenever possible. They give you maximum flexibility and allow Printago to optimize settings for each printer and material combination.
:::

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

---

## Troubleshooting

### Materials Not Detected From 3MF File

- Ensure materials were properly assigned in Bambu Studio or Orca Slicer before saving the project
- Re-export the 3MF using `File -> Save Project` (not `Export plate sliced file`, which creates a gcode.3mf)
- Check that the 3MF is not corrupted by opening it in your slicer

### 3MF File Treated as gcode.3mf

- This happens when you export using `File -> Export plate sliced file` instead of `File -> Save Project`
- Re-export as an unsliced 3MF by using `File -> Save Project` or `Ctrl/Cmd + S`

### Slicer Version Mismatch Warning

- Printago auto-detects the slicer version but may show a warning if the exact version is unavailable
- Select the closest available slicer version manually, or update your slicer and re-export

### Modifiers or Paint Not Preserved

- Verify the modifiers appear correctly in your slicer before exporting
- Ensure you are saving as a project file (unsliced 3MF), which retains all modifier data

:::warning
Sliced 3MF files (gcode.3mf) do not retain modifiers or painting data -- they contain only the final G-code. Always use unsliced 3MF files if you need to preserve these features.
:::

---

## FAQ

**Q: How do I know if my 3MF is sliced or unsliced?**
A: If you saved using `File -> Save Project` (`Ctrl/Cmd + S`), it is unsliced. If you used `File -> Export plate sliced file`, it is a sliced gcode.3mf. Printago will indicate the file type during upload.

**Q: Can I use a 3MF made for a Bambu A1 Mini on a Bambu X1 Carbon?**
A: Yes, as long as the objects fit on the X1 Carbon's build plate. Printago reslices the unsliced 3MF with the correct printer profile automatically.

**Q: What process profile should I choose when uploading a 3MF?**
A: Use "Embedded 3MF Profile" to keep the exact settings from your slicer. Use "Custom Profile" if you want to apply a synced user profile. Use "Printer Default" to let each printer apply its own default settings.

**Q: Can I switch materials after uploading a 3MF?**
A: Yes. You can remap materials in Printago's UI each time the part is queued for printing, allowing you to switch between material types or color variants.

**Q: Do multi-plate 3MF files work in Printago?**
A: Yes. Printago detects multiple build plates in the 3MF and lets you print or add individual plates to SKUs one by one.
