---
sidebar_position: 2
---

# OpenSCAD Parts

This guide explains how to upload and use OpenSCAD parts in the Printago system.

## Adding OpenSCAD Parts to Printago

1. Go to `Products -> Parts` and click `+ Add Part`
2. Drag in main .scad file or browse to upload
   <img src="/img/parts/add_parts_1.gif" className="margin-left--md" width="600" alt="Uploading a 3MF file" />
3. Name your part and add a description if needed
4. Choose where to save it (defaults to your current folder)
5. Select your preferred slicer.  You can change your default in your [Account Settings](/docs/settings-integrations/account-settings.md#slicing-preferences)
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

### Supported Parameter Types

Printago supports all standard OpenSCAD parameter types:

- **Text fields**: For strings and variable text
- **Numeric inputs**: For dimensions and measurements
- **Checkboxes**: For boolean (true/false) options
- **Dropdown menus**: For selection among preset options

### Parameter Display Rules

Printago supports the OpenSCAD Customizer syntax for defining parameter inputs. Here's how to use it effectively:

#### Supported Parameter Types

1. **Numbers with Range**  
   Define min/max values and optional step size:
   ```openscad
   width = 100;  // [50:150] Width in mm (min:max)
   height = 1.5; // [0.1:0.1:5] Height in mm (min:step:max)
   ```

2. **Dropdown Selections**  
   Enclose options in square brackets:
   ```openscad
   // Text options
   lid_style = "hinged"; // [hinged, snap-fit, magnetic, none]
   
   // Number options (with display text)
   quality = 3; // [1:Low, 2:Medium, 3:High, 4:Ultra]
   ```

3. **Boolean Toggles**  
   Use `true`/`false` for checkboxes:
   ```openscad
   include_handle = true;  // Include handle
   rounded_corners = false; // Round corners
   ```

4. **Text Input**  
   Simple string variables become text fields:
   ```openscad
   custom_text = "Hello"; // Engraving text
   ```

#### Best Practices

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
