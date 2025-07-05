---
sidebar_position: 2
---

# OpenSCAD Parts

This guide explains how to upload and use OpenSCAD parts in the Printago system.

## Adding OpenSCAD Parts to Printago

1. Go to `Products -> Parts` and click `+ Add Part`
2. Drag in main `.scad` file or browse to upload
   <img src="/img/parts/add_parts_1.gif" className="margin-left--md" width="600" alt="Uploading a 3MF file" />
3. Name your part and add a description as desired.
4. Choose where to save it (defaults to your current folder)
5. Select your preferred slicer.  You can change your default in your [Account Settings](/docs/settings/account-settings.md#slicer-settings)
6. Pick your process profile:
   - `Printer Default`: will use the default profile assigned to any printer the part matches with
   - `Custom Profile`: Use one of your snyced User Settings for this part.
7. Match materials to your [Material library](/docs/printing/materials.md)
8. Follow the prompts to upload any `use` or `import` files, and 
9. Review the parsed `Parameters` and their values.
10. Click `Create` to finish
<img src="/img/scad/new_scad_part.png" className="margin-left--md" width="600" alt="Uploading a 3MF file" />

## Parameter Management

When adding an OpenSCAD file, Printago will automatically:

- Detect and parse parameters in your file
- Present editable parameter fields with appropriate input types
- Set default values based on your code
- Generate a thumbnail based on default parameter values

### Parameter Types and Display Rules

Printago automatically detects and displays these OpenSCAD parameter types with the following syntax:

**Text Fields**  
For custom text input like names or messages:
<div className="margin-left--md">

```openscad
// Basic text field
greeting = "Hello";

// With description
custom_text = "Engrave me"; // Text to display on the part
```
</div>
**Number Fields**  
For numeric inputs:
<div className="margin-left--md">
```openscad
// Basic number
item_count = 5;
```
</div>
**Boolean Toggles**  
For true/false options displayed as checkboxes:
<div className="margin-left--md">
```openscad
// Basic toggle
include_handle = true;

// With description
rounded_corners = true; // Check to round all corners
```
</div>
**Dropdown Menus**  
For selecting from predefined options:
<div className="margin-left--md">
```openscad
// Text options
material = "PLA"; // [PLA, PETG, ABS, TPU]

// Number options with custom labels
quality = 2; // [1:Fast, 2:Standard, 3:High, 4:Ultra]
```
</div>
### Best Practices

- Place all parameters at the top of your file, before any module or function definitions
- Use descriptive variable names and comments
- Provide reasonable default values
- For dropdowns, list the most common option first
- Keep parameter names under 30 characters for better UI display
- Group related parameters with section comments

### File Management

For OpenSCAD parts with multiple files:

- Ensure all referenced files are uploaded when creating the part
- Keep file paths consistent with your local development setup
- Use relative paths for including library files

Need help with your OpenSCAD parts? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips!
