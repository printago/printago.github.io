---
sidebar_position: 3
---

# Materials

Printago's material system enables intelligent job matching and automated printer selection across your entire printer fleet. Materials are central to how Printago routes jobs to the right printers with the right settings.

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

## Material Assignment

Materials are assigned to printers to enable job matching and automatic printer selection.

### Printer Material Assignment

1. **Navigate to Printers**: Go to `Printing → Printers`
2. **Select Material Slot**: Click any AMS slot or external spool holder
3. **Choose Assignment Method**:
   - **Specific Material + Color**: Exact material variant (e.g., "Bambu PLA Basic Red")
   - **Generic Type**: Any material of that type (e.g., "Any PLA")
   - **RFID Auto-Detection**: Automatic assignment for Bambu RFID-tagged filaments

### RFID Enhancement (Bambu Lab)

Bambu Lab RFID-tagged filaments provide enhanced workflow:

- **Auto-Detection**: Printago automatically reads material and color from RFID tags
- **Instant Assignment**: Materials assign without manual selection
- **Missing Material Workflow**: Quick-add buttons for materials not in your library
- **Override Option**: Manual assignment available if needed

:::info RFID vs Manual Assignment
- **External spool**: Can assign materials without physical filament loaded
- **AMS slots**: Require physical material to be loaded before assignment
:::

### Adding Materials

Materials are typically added through:

1. **RFID Detection**: Automatic addition when RFID filament is detected
2. **Manual Addition**: Add materials during part creation or printer assignment
3. **Bulk Import**: Import all materials loaded into AMS units.

![Import from AMS](/img/materials/materials_import_from_ams.png)

#### Manual Material Creation

To manually add a new material:

![Manual Material Creation](/img/materials/material_manual_new.png)

### Built-in Material Database

Printago includes comprehensive material databases:
- **Bambu Lab Materials**: All official Bambu materials and variants built-in
- **Third-Party Materials**: Common brands and types pre-configured
- **Custom Materials**: Add your own materials with custom profiles

#### Adding All Material Variants

When adding materials, you can quickly add all available color variants:

![Add All Variants](/img/materials/material_add_all_variants.png)

## Slicing Profile Configuration

Materials require slicing profiles to work with the [Cloud Slicer](./cloud-slicer.md).

### Profile Resolution Priority

When slicing, material profiles are resolved in this order:
1. **Material Variant Override** (color-specific adjustments)
2. **Base Material Profile** (fundamental material settings)

![Material Variant Override](/img/materials/material_variant_override.png)

### Configuring Material Profiles

1. **Access Materials Page**: Navigate to `Printing → Materials`
2. **Select Material**: Choose the material to configure
3. **Configure Profiles**: Set up slicing profiles for each:
   - **Printer Model** (A1 Mini, X1C, P1S, etc.)
   - **Nozzle Diameter** (0.4mm, 0.6mm, etc.)

![Material Detail Configuration](/img/materials/material_detail.png)

:::warning Profile Requirements
Materials must have configured slicing profiles for each printer model + nozzle combination they'll be used with. Missing profiles will prevent job matching.
:::

## Job Matching System

Printago's intelligent job matching uses materials to route jobs to compatible printers.

### How Matching Works

1. **Part Requirements**: Parts specify required materials during creation
2. **Printer Capabilities**: Printers advertise loaded materials
3. **Automatic Matching**: Jobs route to printers with compatible materials

### Material Specification Levels

Parts can specify materials at different levels of specificity:

- **Exact Match**: "Bambu PLA Basic Red" - matches only that specific variant
- **Material Type**: "Bambu PLA Basic" - matches any color of that material
- **Generic Type**: "Any PLA" - matches any PLA material from any brand

### Matching Priority

Printago matches jobs using this priority:
1. **Exact material + color match**
2. **Same material, different color** (if part allows)
3. **Generic type match** (if part allows)

:::tip Smart Matching
More specific material requirements provide better print consistency, while generic requirements offer more printer flexibility.
:::

## Material Override During Printing

When printing parts, you can override the default material selection:

1. **Single Part Printing**: Select different material in print dialog
2. **Bulk Printing**: Configure materials individually for each part
3. **OpenSCAD Parts**: Material selection affects ColorSCAD color mapping

## Material Organization

- **Use Specific Materials**: Prefer exact material specifications for consistent results
- **Generic Fallbacks**: Use "Any [Type]" for prototyping or non-critical prints
- **Profile Completeness**: Ensure all materials have profiles for your printer fleet
- **Consistent Naming**: Use clear, descriptive names for custom materials

## Common Issues

**Jobs Not Matching Printers**:
- Verify material is loaded and assigned to printer
- Check that material has slicing profiles configured
- Ensure part material requirements match available materials

Need help with materials? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips from other users!
