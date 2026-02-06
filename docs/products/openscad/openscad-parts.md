---
sidebar_position: 2
---

# OpenSCAD Parts

This guide explains how to upload and use OpenSCAD parts in the Printago system.

## Key Concepts

- **Parameter types**: Printago auto-detects text fields, number fields, boolean toggles, and dropdown menus from your .scad file's variable declarations
- **Parameter parsing rules**: Only variables declared above the first set of curly braces `{ }` are imported; variables below are treated as private
- **File management**: OpenSCAD parts with multiple files (fonts, libraries, imported STLs) require all referenced files to be uploaded together during part creation
- **Upload process**: The upload workflow guides you through naming, slicer/profile selection, material mapping, uploading referenced files, and reviewing parsed parameters
- **Default values**: Initial values of each parameter in your code become the default parameter values in Printago
- **Dropdown syntax**: Selection parameters use a comment-based syntax (e.g., `// [option1, option2]`) to define available options

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

---

## Troubleshooting

### Parameters Not Detected After Upload

- Ensure all parameters are declared above the first set of curly braces `{ }` in your .scad file
- Verify the variable syntax is correct (e.g., `variable_name = "value";` with a semicolon)
- Dropdown parameters require the comment-based syntax: `variable = "default"; // [option1, option2]`

### Referenced Files Missing or Not Found

- All files referenced via `use` or `import` must be uploaded during part creation
- Do not use variables as arguments to `import()` or `use` -- the Printago parser cannot resolve dynamic file paths
- Ensure file names and paths match exactly (case-sensitive)

### Rendering Fails or Times Out

- Reduce `$fn` values to lower complexity during initial testing
- Minimize boolean operations (`difference()`, `union()`) where possible
- Break large designs into smaller modules to isolate the issue
- Test the file locally in OpenSCAD (Development Snapshot) to confirm it renders without errors

### Thumbnail Not Generating Correctly

- The thumbnail is generated using default parameter values; ensure defaults produce valid geometry
- If the default model is very small or has unusual proportions, the thumbnail may appear blank or cropped

:::tip
Always test your .scad file locally in OpenSCAD across the full range of parameter values before uploading to Printago.
:::

---

## FAQ

**Q: Can I update an OpenSCAD part's parameters after it has been created?**
A: Parameters are parsed from the .scad file at upload time. To change available parameters, update the .scad file and re-upload the part.

**Q: How many files can I include with a single OpenSCAD part?**
A: There is no strict limit. You can upload the main .scad file along with any fonts, libraries, STLs, SVGs, or DXFs it references. All files are uploaded during part creation.

**Q: What happens if my OpenSCAD file uses a library that is pre-installed on Printago?**
A: Pre-installed libraries (such as BOSL2, MCAD, Gridfinity, etc.) are automatically available. You do not need to upload them -- just use the correct `include` or `use` statement. See [OpenSCAD Libraries](/docs/products/openscad/libraries.md) for the full list.

**Q: Can customers change parameters when ordering?**
A: Yes. When OpenSCAD parts are used in products, the exposed parameters become customization options that customers can modify before ordering.

**Q: Why does my dropdown parameter show as a text field instead?**
A: The dropdown syntax requires a comment directly after the variable declaration: `variable = "default"; // [option1, option2]`. If the comment is missing or malformed, Printago falls back to a text or number field.

---

Need help with your OpenSCAD parts? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips!
