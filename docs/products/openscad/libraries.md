---
sidebar_position: 3
---

# OpenSCAD Libraries

Printago provides access to numerous OpenSCAD libraries to enhance your parametric design capabilities. These libraries are pre-installed and available for use in your OpenSCAD designs.

## Key Concepts

- **Pre-installed libraries**: Printago includes several popular OpenSCAD libraries (BOSL, BOSL2, dotSCAD, Gridfinity, KeyV2, MCAD, NopSCADlib, and more) ready to use without manual uploads
- **Include syntax**: Use `include <LibraryName/file.scad>` or `use <LibraryName/file.scad>` to reference libraries; the exact path depends on each library's structure
- **Version compatibility**: Libraries are regularly updated by the Printago team; some libraries may have specific OpenSCAD version requirements
- **No upload needed**: Pre-installed libraries do not need to be uploaded alongside your .scad files -- Printago resolves them automatically
- **Custom libraries**: If you need a library that is not pre-installed, you can upload it as part of your OpenSCAD part's file bundle, or request it from the Printago team

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

---

## Troubleshooting

### Library Not Found During Rendering

- Verify the `include` or `use` path matches the library's directory structure exactly (case-sensitive)
- Check the library name against the list of pre-installed libraries on this page; if it is not listed, you will need to upload it manually with your .scad file
- Test the import locally in OpenSCAD (Development Snapshot) to confirm the path resolves correctly

### Rendering Fails When Using a Library

- Some library functions are computationally expensive; try reducing `$fn` or simplifying your design to isolate the issue
- Ensure you are only loading the modules you need (e.g., `include <BOSL2/std.scad>` instead of including the entire library tree)
- Verify your code is compatible with the library version installed on Printago; check the library's documentation for breaking changes

### Library Works Locally but Not in Printago

- Local OpenSCAD installations may have libraries in different paths; ensure you use the Printago-compatible include path shown in the examples above
- If your local setup uses a newer library version with features not yet on Printago, contact support to request an update

### Conflicts Between Libraries

- Avoid including multiple libraries that define functions or modules with the same name
- If you experience unexpected behavior, try isolating each library in a test file to identify the conflict

:::tip
Always test your designs locally before uploading. Load only the specific modules you need from a library to reduce compile time and avoid conflicts.
:::

---

## FAQ

**Q: Do I need to upload pre-installed libraries when creating an OpenSCAD part?**
A: No. Pre-installed libraries are automatically available on Printago. Just use the correct `include` or `use` statement in your .scad file.

**Q: Can I request a new library be added to Printago?**
A: Yes. Contact the support team or post in the [Discord community](https://discord.gg/RCFA2u99De). The Printago team regularly evaluates and adds new libraries based on user needs.

**Q: What if I need a specific version of a library?**
A: Printago maintains current versions of all pre-installed libraries. If you need a specific version, you can upload it manually alongside your .scad file, or contact support to discuss the requirement.

**Q: Can I use multiple libraries in the same OpenSCAD file?**
A: Yes. You can include as many libraries as needed. Be mindful of compile time and potential naming conflicts between libraries.

**Q: Are library updates automatic, or do I need to re-upload my parts?**
A: Library updates on Printago are managed by the team and apply automatically. You do not need to re-upload parts unless the update introduces breaking changes (which would be communicated in advance).

---

## Support

If you encounter issues with any of these libraries or need additional libraries installed, please contact our support team. We regularly evaluate and add new libraries based on user needs.
