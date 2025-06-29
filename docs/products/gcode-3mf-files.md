---
sidebar_position: 4
---

# gcode.3MF Files

gcode.3MF files are pre-sliced files from Bambu Studio or Orca Slicer that contain ready-to-print G-code wrapped in a 3MF container. While supported by Printago, they come with important limitations.

## What Are GCode.3MF Files?

GCode.3MF files contain:
- **Pre-sliced G-code** ready for immediate printing
- **Printer-specific settings** baked into the G-code
- **No geometry data** - only print instructions

## Limitations and Considerations

:::info "We don't do that here."
Printago supports `.gcode.3MF` files, however, this is **not recommended** as it precludes you from taking advantage of our on-demand automatic slicer.
:::

### Key Limitations

- **Printer-specific**: Tightly bound to the exact printer type they were sliced for
- **No re-slicing**: Cannot take advantage of slicer updates or improvements
- **Limited flexibility**: Difficult to adapt to different printer configurations

## When gcode.3MF Makes Sense

Despite limitations, gcode.3MF files can be useful for:
- **Legacy workflows** from existing Bambu Studio/Orca projects
- **Highly optimized prints** that require specific G-code tweaks
- **Emergency situations** when immediate printing is needed
- **Specific printer testing** scenarios

## Material Remapping

The one flexibility gcode.3MF files retain is **material remapping**:
- Materials can be reassigned to different slots
- Compatible material types can be substituted
- Color changes are possible within the same material family

## Adding gcode.3MF Files

1. Navigate to `Products -> Parts`
2. Click `+ Add Part`
3. Upload your .gcode.3mf file
4. Configure part settings:
   - **Name and Description**: Identify your part
   - **Allowed Filaments**: Must match G-code requirements
   - **Target Printer Types**: Specify compatible printers

## Best Practices

### Do This:
- **Document printer compatibility** clearly in part descriptions
- **Test thoroughly** on target printer types before production
- **Use for specialized cases** where G-code optimization is critical
- **Keep original source files** for future re-slicing needs

### Avoid This:
- **General production use** - prefer STL/STEP/3MF for flexibility
- **Cross-printer deployment** - G-code may not be compatible
- **Long-term storage** - G-code becomes outdated quickly

## Migration Path

If you're using 3MF.GCODE files, consider migrating to:
- **STL/STEP files** for simple parts with custom process profiles
- **3MF projects** for complex parts with modifiers and settings
- **OpenSCAD files** for parametric or customizable parts

## Troubleshooting

### Common Issues
- **Printer incompatibility**: G-code may fail on different printer models
- **Material conflicts**: Pre-sliced settings may not match available materials
- **Outdated G-code**: May not work with newer printer firmware

### Solutions
- **Re-slice from original files** when possible
- **Test on target hardware** before production runs
- **Document compatibility requirements** clearly

## Next Steps

When working with gcode.3MF files:
- [Create targeted SKUs](./sku-management.md) for specific printer types
- [Monitor queue carefully](../print-queue-management.md) for compatibility issues
- Consider [migrating to more flexible formats](./stl-step-parts.md) for better long-term maintainability
