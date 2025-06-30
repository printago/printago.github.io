---
sidebar_position: 2
---

# OpenSCAD Parts

This guide explains how to upload and use OpenSCAD parts in the Printago system.

## Adding OpenSCAD Parts to Printago

1. Go to `Products -> Parts` and click `+ Add Part`
2. Drag in your .3mf file or browse to upload
   <img src="/img/parts/add_parts_1.gif" className="margin-left--md" width="600" alt="Uploading a 3MF file" />
3. Name your part and add a description if needed
4. Choose where to save it (defaults to your current folder)
5. Printago will auto-select the right slicer version (look for the "Auto-Selected" badge)
6. Pick your process profile:
   - `Embedded 3MF Profile`: Uses the settings saved in the file
   - `Custom Profile`: Use a different process profile
7. Check the build plates and materials found in your file
8. Match materials to your [Material library](/docs/printing/materials.md)
9. Click `Create` to finish


## Parameter Management

When adding an OpenSCAD file, Printago will automatically:

- Detect and parse parameters in your file
- Present editable parameter fields with appropriate input types
- Set default values based on your code
- Generate a 3D preview (thumbnail) based on parameter values

### Supported Parameter Types

Printago supports all standard OpenSCAD parameter types:

- **Text fields**: For strings and variable text
- **Numeric inputs**: For dimensions and measurements
- **Checkboxes**: For boolean (true/false) options
- **Dropdown menus**: For selection among preset options

### Parameter Display Rules

For optimal parameter presentation:

- Add helpful comments to your parameter definitions
- Use descriptive parameter names
- Provide reasonable default values
- Define selection options in comments

Example of well-defined parameters:

```openscad
// Basic dimensional parameters
width = 100;  // [50:150] Width in mm
height = 75;  // [25:100] Height in mm
depth = 30;   // Depth in mm

// Feature toggles with clear names
include_handle = true;  // Include a handle on top
rounded_corners = true; // Round the corners of the box

// Selection menu with defined options
lid_type = "hinged"; // [hinged, friction-fit, magnetic] Type of lid
```

## Parameter Updates

You can update parameters for your parts:

1. Navigate to the part in your Parts management
2. Click "Edit"
3. Modify default parameters as needed
4. Save changes to update the part template

## Advanced OpenSCAD Examples

### Parameter Dependencies

You can create parameters that influence each other:

```openscad
handle_type = "curved"; // [curved, straight, none]
handle_size = (handle_type == "none") ? 0 : 25; // Handle size in mm
```

### Conditional Features

Create features that appear based on parameter selection:

```openscad
if (include_dividers) {
    // Code to create dividers
    for (i = [0:num_dividers-1]) {
        translate([i * width/num_dividers, 0, 0])
            cube([2, depth, height]);
    }
}
```

### File Management

For OpenSCAD parts with multiple files:

- Ensure all referenced files are uploaded when creating the part
- Keep file paths consistent with your local development setup
- Use relative paths for including library files

Need help with your OpenSCAD parts? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips!
