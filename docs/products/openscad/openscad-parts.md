---
sidebar_position: 2
---

# OpenSCAD Parts

This guide explains how to upload and use OpenSCAD parts in the Printago system.

## Adding OpenSCAD Parts to Printago

1. Click `Products` -> `Parts`
2. Click the `+ New Part` button in the upper right.
3. Browse to select your main `.scad` file.
4. Follow the prompts to upload any `use` or `import` files, and review the parsed `Parameters`
    <img src="/img/screenshot_000362.png" width="600" alt="create openSCAD part" />
5. Save the Part.  

## Printing the Part

1. Find your saved part in the parts list and open it, clicking the `Print` button.
2. Set any parameters, quantity, and `Print` the part.
    <img src="/img/screenshot_000364.png" width="600" alt="print OpenSCAD Part" />

## Parameter Management

When adding an OpenSCAD file, Printago will automatically:

- Detect and parse parameters in your file
- Present editable parameter fields with appropriate input types
- Set default values based on your code
- Generate a 3D preview based on parameter values

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

## Version Management

Printago supports version control for OpenSCAD parts:

1. Edit your original `.scad` file locally
2. Click "Upload New Version" in the parts management page
3. Select your updated `.scad` file
4. Review parameter changes
5. Save the new version

## Advanced Usage

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
