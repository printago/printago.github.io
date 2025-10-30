---
sidebar_position: 3
---

# Materials

Printago's material system enables intelligent job matching and automated printer selection across your entire printer fleet. Materials are central to how Printago routes jobs to the right printers with the right settings.

![Materials Library](/static/materials.png)

## How Materials Work

Materials in Printago consist of two levels:

### 1. Base Materials
**Base materials** define the fundamental filament type and properties:
- **Material Type**: PLA, PETG, ABS, TPU, etc.
- **Brand**: Bambu Lab, Polymaker, Elegoo, etc.
- **Filament Profile**: Core slicing profiles for the material, one for each printer model

### 2. Material Variants (Colors)
**Material variants** are specific colors or finishes of a base material:
- **Color Variant**: Red, Blue, Matte Black, Silk Gold, etc.
- **Profile Override**: Optional color-specific slicing adjustments, one for each printer model

:::tip Material Hierarchy
Think of it as: **Bambu PLA Basic** (base material) → **Bambu PLA Basic Red** (variant)
:::

#### Dual-Color Filaments

Some filaments have two distinct colors (like Bambu Lab's Dual Silk series). These are identified by two hex color codes separated by a semicolon:

```
#FF9425FF;#C16784FF
```

**Auto-Detection**: When Printago reads RFID tags from your AMS, it uses these hex codes to match against your material library. If the hex codes don't match exactly (or there it san error in our filament database) it may create a new variant instead of matching an existing one.

**Fixing Mismatched Colors**:
1. If a new unexpected variant is created (e.g., "Dark Orange"), note its hex code
2. Find your intended variant in the materials list
3. Modify the name from the actual Bambu filament name to enable editing the hex code
4. Update the hex code to match what's in your AMS
5. Delete the incorrectly created variant
6. Remove and re-add the filament to your AMS to test auto-detection

:::tip Gradient Hex Codes
Gradient filaments support any number of colors.  Separate the hex codes by a semicolon to input gradient colors, e.g. `000000FF;FFFFFFFF;FF0000FF` (black to white to red).
:::

## Material Assignment

Materials are assigned to printers and their AMS units to enable job matching and automatic printer selection.

### Adding Materials

Materials are typically added through:

1. **[RFID Detection](/docs/printing/printer-management/printer-management.md#automatic-material-detection)**: Automatic addition when RFID filament is detected
2. **Manual Addition**: Add materials during part creation or printer assignment
3. **Bulk Import**: Import all missing materials currently loaded and read by your AMS units.

<div className="margin-left--sm">
  <img src="/img/materials/materials_import_from_ams.png" width="600" alt="Import from AMS" />
</div>

### Manual Material Creation

To manually add a new material:
1. Navigate to the `Printing` → `Materials` Page, and click the `New Material` button.
2. Select a Brand or you can type it in if it's not in the pre-loaded list.
3. Select a Material Type, or type one in if yours isn't found!
4. Give the material a name and a unique identifier for the system to use for the material.
5. Click `Create`

<div className="margin-left--sm">
  <img src="/img/materials/material_manual_new.png" width="600" alt="Manual Material Creation" />
</div>
### Built-in Material Database

Printago includes comprehensive material databases:
- **Bambu Lab Materials**: All official Bambu materials and variants built-in
- **Third-Party Materials**: Extensive brand dropdown with popular manufacturers (Polymaker, Elegoo, etc.) or enter custom brand names.

### Adding All Material Variants

When adding materials, you can quickly add all available color variants for known materials:

<div className="margin-left--sm">
  <img src="/img/materials/material_add_all_variants.png" width="300" alt="Add All Variants" />
</div>

## Slicing Profile Configuration

Materials require slicing profiles to work with the [Cloud Slicer](./cloud-slicer.md).

### Configuring Material Profiles

1. **Access Materials Page**: Navigate to `Printing → Materials`
2. **Select Material**: Choose the material to configure
3. **Configure Profiles**: Assign slicing profiles for each combination of:
   - **Printer Model** (A1 Mini, X1C, P1S, etc.)
   - **Nozzle Diameter** (0.4mm, 0.6mm, etc.)

<div className="margin-left--sm">
  <img src="/img/materials/material_detail.png" width="600" alt="Material Detail Configuration" />
</div>

:::tip Auto-Complete Search
Profile selection boxes support auto-complete! Start typing "Matte" to quickly find "Matte PLA" profiles, or any partial text to wildcard search through available options.
:::

### Profile Resolution Priority

When slicing, material profiles are resolved in this order:
1. **Material Variant Override** (color-specific adjustments)
2. **Base Material Profile** (fundamental material settings)

<div className="margin-left--sm">
  <img src="/img/materials/material_variant_override.png" width="600" alt="Material Variant Override" />
</div>

:::warning Profile Requirements
Materials must have configured slicing profiles for each printer model + nozzle combination they'll be used with. Missing profiles will prevent job matching.
:::

## Assigning Materials to Printers

Materials must be assigned to printers to enable the job matching described above. See [Printer Management: Material Assignment](/docs/printing/printer-management/printer-management.md#material-assignment) for detailed assignment instructions including RFID auto-detection and manual assignment workflows.

## Material Override When Queuing Jobs

When adding parts to the print queue, you can override the default material selection:

1. **Single Part Printing**: Select different material in print dialog - see [Printing Parts](./printing-parts.md)
2. **Bulk Printing**: Configure materials individually for each part
3. **SKU Printing**: Material overrides available during SKU printing - see [Printing SKUs](../commerce/printing-skus.md)
4. **OpenSCAD Parts**: Material selection affects ColorSCAD color mapping

## Job Matching System

Materials enable Printago's intelligent job-to-printer matching. For detailed information about how the print queue processes jobs and matches them to printers, see [Print Queue Management](../print-queue-management.md).

### Material Matching Levels

Parts can specify materials at different levels of specificity:

- **Exact Variant**: "Bambu PLA Basic Red" - matches only that specific color
- **Base Material**: "Bambu PLA Basic" - matches any color of that material  
- **Generic Type**: "Any PLA" - matches any PLA material from any brand

### Matching Examples

**Example 1: Exact Match**
- Part requires: "Bambu PLA Basic Red"
- Printer has: "Bambu PLA Basic Red" ✅ Match!
- Printer has: "Bambu PLA Basic Blue" ❌ No match

**Example 2: Base Material Match**
- Part requires: "Bambu PLA Basic" (any color)
- Printer has: "Bambu PLA Basic Red" ✅ Match!
- Printer has: "Bambu PLA Basic Blue" ✅ Match!
- Printer has: "Generic PLA" ❌ No match (different brand)

**Example 3: Generic Type Match**
- Part requires: "Any PLA"
- Printer has: "Bambu PLA Basic Red" ✅ Match!
- Printer has: "Generic PLA" ✅ Match!
- Printer has: "Any PLA" ✅ Match!

**Example 4: Mismatch Scenario**
- Part requires: "Bambu PLA Basic" (specific brand/material)
- Printer assigned: "Any PLA" (generic type)
- Result: ❌ No match - part requirement is more specific than printer capability

### Multi-Color 3MF Matching

When working with multi-color 3MF files, understanding how material matching works across multiple slots is crucial:

**Important Behavior**: When you assign "Any Color [Material]" to multiple slots in a 3MF file, Printago will use the first matching material it finds for ALL those slots. This may result in multiple slots pulling from the same physical spool.

**Example: Sparkle Dragon (2 colors)**
- 3MF Slot 1 configured as: "Any Color PLA Sparkle"
- 3MF Slot 3 configured as: "Any Color PLA Sparkle"
- AMS has: Red Sparkle in slot 1, Gold Sparkle in slot 3
- Result: Both 3MF slots will use Red Sparkle (the first match found) ❌

**Solution**: Assign specific color variants for multi-color prints:
- 3MF Slot 1: "PLA Sparkle Red" (specific variant)
- 3MF Slot 3: "PLA Sparkle Gold" (specific variant)
- Result: Each slot uses its intended color ✅

:::tip Multi-Color Workflow
For parts with multiple colors, always assign specific material variants rather than using "Any Color" matching. This ensures each color in your 3MF file uses the intended filament.
:::

## Material Tips

- **Use Specific Materials**: Prefer exact material specifications for consistent results
- **Generic Fallbacks**: Use "Any [Type]" for prototyping or non-critical prints
- **Profile Completeness**: Ensure all materials have profiles for your printer fleet

## Common Issues

**Jobs Not Matching Printers**:
- Verify material is loaded and assigned to printer
- Check that material has slicing profiles configured
- Ensure part material requirements match available materials



Need help with materials? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips from other users!
