---
sidebar_position: 3
---

# 3MF Project Files

3MF (3D Manufacturing Format) parts are complete projects that preserve all your slicer settings, modifiers, and design decisions. Printago fully supports 3MF files from Bambu Studio and Orca Slicer.

## What Makes 3MF Special

Unlike simple STL files, 3MF parts preserve:
- **Object placement** on the build plate
- **All modifiers** (support enforcers/blockers, seam placement, etc.)
- **Negative parts** for complex geometries
- **Support structure settings**
- **Color painting** and multi-material assignments
- **Print settings** and configurations

## 3MF Capabilities in Printago

Your 3MF files are preserved exactly as designed and can be:
- **Easily sliced** for any compatible printer
- **Re-sliced automatically** when slicer updates are available
- **Sent to any printer** they fit on in your fleet
- **Scaled or modified** while preserving all settings

## Adding 3MF Parts

1. Navigate to `Products -> Parts`
2. Click `+ Add Part`
3. Upload your .3mf file
4. Configure part settings:
   - **Name and Description**: Identify your part
   - **Allowed Filaments**: Restrict to compatible materials
   - **Process Profile**: Usually not needed - 3MF contains settings

## Important 3MF Considerations

:::important 3MF Processing Notes
1. **Single Build Plate**: Only the first build plate will be processed from multi-plate files
2. **Saved Settings Required**: Slicing settings must be saved in Bambu Studio or Orca Slicer, not just embedded in the 3MF
3. **AMS Mapping**: Color-painted projects use direct slot mapping (`SLOT1` → `SLOT1`, `SLOT2` → `SLOT2`, etc.)
:::

## Multi-Material Support

3MF parts with color painting are fully supported:
- **Direct slot mapping** ensures colors print as designed
- **Material compatibility** checking still applies
- **Automatic material remapping** when different materials are loaded

## Workflow Benefits

Using 3MF parts provides:
- **Design preservation** - Your exact slicer setup is maintained
- **Cross-printer compatibility** - One design works across your fleet  
- **Version control** - Update designs without losing print settings
- **Consistency** - Every print matches your original design intent

## Best Practices

- **Save settings in your slicer** before exporting 3MF files
- **Use single build plates** for Printago compatibility
- **Test print settings** before creating production SKUs
- **Organize by complexity** - Group similar 3MF parts together

## Troubleshooting

### Common Issues
- **Missing settings**: Re-save 3MF with settings embedded in Bambu Studio/Orca
- **Multi-plate files**: Split complex builds into separate 3MF files
- **Material conflicts**: Check that required materials are available on target printers

## Next Steps

After adding 3MF parts:
- [Create SKUs for production](./sku-management.md)
- [Monitor prints in the queue](../print-queue-management.md)
- [Set up bulk production](../printing/advanced-printing/bulk-actions.md)
