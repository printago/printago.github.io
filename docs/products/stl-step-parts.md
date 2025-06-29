---
sidebar_position: 2
---

# `STL` and `STEP` Parts

STL and STEP files are static 3D models that work identically in Printago's system. Both file types represent single-material parts that can have custom slicer process profiles applied.

## Overview

Both STL and STEP parts are treated the same way by Printago:
- **Single Material**: Each part uses one material type
- **Process Override**: Can set custom slicer process per-part  
- **Static Geometry**: No parametric or customizable elements

## File Format Details

### STL Files (.stl)
- **Standard Tessellation Language** - Industry standard mesh format
- Represents 3D geometry as triangulated surfaces
- No material or color information embedded
- Lightweight and universally supported

### STEP Files (.stp/.step) 
- **Standard for the Exchange of Product model data**
- CAD-native format with precise geometric definitions
- Contains more geometric detail than STL
- Better for complex curves and surfaces

## Adding STL/STEP Parts

1. Navigate to `Products -> Parts`
2. Click `+ Add Part`
3. Upload your .stl or .step/.stp file
4. Configure part settings:
   - **Name and Description**: Identify your part
   - **Allowed Filaments**: Restrict to compatible materials
   - **Process Profile**: Override default printer settings if needed

## Process Profile Benefits

Setting a custom process profile on STL/STEP parts allows you to:
- Optimize layer height for part details
- Adjust infill patterns and density
- Configure support structures
- Set custom print speeds
- Apply across your entire printer fleet

## Best Practices

- **Use STEP files** when you have complex curved surfaces or need maximum geometric precision
- **Use STL files** for simpler parts or when file size matters
- **Set material restrictions** to ensure parts only print with compatible filaments
- **Create reusable process profiles** for similar part types

## Next Steps

After adding STL/STEP parts:
- [Create SKUs using these parts](./sku-management.md)
- [Set up bulk production workflows](../printing/advanced-printing/bulk-actions.md)
- Monitor prints through the [Print Queue](../print-queue-management.md)
