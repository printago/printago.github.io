---
sidebar_position: 3
---

# OpenSCAD Libraries

Printago provides access to numerous OpenSCAD libraries to enhance your parametric design capabilities. These libraries are pre-installed and available for use in your OpenSCAD designs.

## General Purpose Libraries

### BOSL (Belfry OpenSCAD Library)
A comprehensive library providing advanced geometric primitives, text handling, and mathematical functions.
- **Repository**: [GitHub](https://github.com/revarbat/BOSL)
- **License**: BSD 2-Clause
- **Documentation**: [BOSL Wiki](https://github.com/revarbat/BOSL/wiki)

### BOSL2 (Belfry OpenSCAD Library v2)
The next generation of BOSL with improved performance and additional features.
- **Repository**: [GitHub](https://github.com/revarbat/BOSL2)
- **License**: BSD 2-Clause
- **Documentation**: [BOSL2 Wiki](https://github.com/revarbat/BOSL2/wiki)

### dotSCAD
A library focused on creating dots, lines, and patterns for artistic and functional designs.
- **Repository**: [GitHub](https://github.com/JustinSDK/dotSCAD)
- **License**: LGPL-2.1
- **Documentation**: [dotSCAD Documentation](https://openhome.cc/eGossip/OpenSCAD/)

## Specialized Libraries

### Gridfinity
A modular storage system library for creating customizable bins and organizers.
- **Repository**: [GitHub](https://github.com/kennetek/gridfinity-rebuilt-openscad)
- **License**: MIT
- **Use Case**: Storage solutions, workshop organization

### KeyV2
Comprehensive library for designing custom keyboard keycaps and layouts.
- **Repository**: [GitHub](https://github.com/rsheldiii/KeyV2)
- **License**: MIT
- **Use Case**: Custom keyboards, keycap design

### Knurled Finish Library
Specialized library for adding knurled patterns and textures to cylindrical objects.
- **Repository**: [GitHub](https://github.com/ridercz/KnurledFinishLib)
- **License**: MIT
- **Use Case**: Tool handles, grip surfaces

### MCAD (OpenSCAD Mechanical CAD Library)
Collection of mechanical parts and fasteners for engineering applications.
- **Repository**: [GitHub](https://github.com/openscad/MCAD)
- **License**: LGPL-2.1+
- **Use Case**: Mechanical assemblies, fasteners

### NopSCADlib
Professional library for creating technical drawings and mechanical parts.
- **Repository**: [GitHub](https://github.com/nophead/NopSCADlib)
- **License**: GPL-3.0
- **Use Case**: Technical documentation, mechanical design

## Usage in Printago

### Including Libraries
```scad
// Include BOSL2 library
include <BOSL2/std.scad>

// Use specific modules
cube([10,10,10]);
cylinder(h=5, r=3);
```

### Library-Specific Examples

#### BOSL2 Example
```scad
include <BOSL2/std.scad>

// Create a rounded cube with chamfered edges
cuboid([20,15,10], rounding=2, edges=EDGES_Z_ALL);
```

#### Gridfinity Example
```scad
include <gridfinity-rebuilt-openscad/gridfinity-rebuilt-utility.scad>

// Create a 2x3 grid bin
gridfinityInit(2, 3, height(6));
gridfinityBase();
```

## Best Practices

### Performance Considerations
- Load only the modules you need to reduce compile time
- Test complex library functions locally before uploading
- Consider render complexity for large-scale designs

### Version Compatibility
- Libraries are regularly updated to maintain compatibility
- Report any library-related issues to support
- Some libraries may have specific OpenSCAD version requirements

### Documentation
- Always refer to the official library documentation
- Include comments explaining library usage in your designs
- Test parameter ranges with library functions

## Support

If you encounter issues with any of these libraries or need additional libraries installed, please contact our support team. We regularly evaluate and add new libraries based on user needs.
