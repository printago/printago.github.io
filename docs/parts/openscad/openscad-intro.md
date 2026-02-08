# About OpenSCAD

OpenSCAD support in Printago lets you create dynamic, customizable 3D models that respond to customer input without touching code. Let's explore how it works!

## What is OpenSCAD?

OpenSCAD is a programming language for creating parametric 3D models. Instead of manually sculpting models, you write code that generates them. With Printago's native OpenSCAD support, you can:

- Create dynamic, customizable models
- Automate model scaling and sizing
- Add personalization options such as text engravings.
- Modify existing STL files
- Define color parametrically using Printago's [ColorSCAD](/docs/parts/openscad/colorscad.md)!


## Editing OpenSCAD Files

To create and edit OpenSCAD files, [download OpenSCAD](https://openscad.org/downloads.html#snapshots).  Be sure to download one of the **Development Snapsnot** versions for your computer.
<div className="margin-left--lg">
    <img src="\img\screenshot_000360.png" width="600" alt="OpenSCAD IDE" />
</div>
If you're new to OpenSCAD, this documentation will **not** serve as a tutorial.  However, you will find a few example snippets and best practices for how to use .scad files in Printago.  

## Importing Files

Printago supports the `use` and `import` commands in OpenSCAD.  You may use fonts or other OpenSCAD libraries, or import STLs, SVG, or DXF files.  
<div className="margin-left--lg">

```openscad
use <ArianaVioleta.ttf>     // fonts
use <text_tools.scad>       // OpenSCAD library
import("iphone16_case.stl") // STL Geometry
import("customer_logo.dxf")  // Flat-Geometry import (SVG works too)
``` 

:::warning
Do not use variables as `import` or `use` arguments.  The Printago OpenSCAD parser will not find these files.
```openscad
filename = "customer_logo.dxf";  
import(filename); 
```
:::
</div>
## Dynamic Models

Dynamic models in Printago use OpenSCAD parameters to create variations of your 3D models automatically.

### Parameter Types

You can use several types of parameters in your OpenSCAD models.  Initial values of each parameter will be used as the default parameter value in Printago.
<div className="margin-left--md">
**Text**: For names, messages, or identifiers
<div className="margin-left--md">
    ```
    input_text_1 = "Custom";
    ```
</div>
**Numbers**: For dimensions and measurements
<div className="margin-left--md">
    ```
    size_in_inches = 8.0;
    ```
</div>
**Boolean**: Presented as a checkbox in Printago
<div className="margin-left--md">
    ```
    size_text_equal = false;
    ```
</div>
**Selection**: Can be text or Numbers and presented as a dropdown selection in Printago.  Note that the comment following the variable declaration drives the values of the dropdown.
<div className="margin-left--md">
    ```
    part_output = part1; //[part1, part2, part3, part4]
    ```
</div>
</div>
:::info 
Printago will ***not*** import variables below the first set of curly braces { }
```openscad
use <Arial.ttf>
variable1 = "Text";
{ }
private_variable = "not parsed";
```
:::

### Font Support

Printago supports **TTF** and **OTF** fonts.

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

## Best Practices

### Modular Design

- Break complex models into separate functional modules - this makes troubleshooting easier and allows for code reuse across projects. For example, split a custom box design into lid, base, and hinge modules
- Create reusable components for common elements like screw holes, mounting brackets, or text engravings. Store these in separate files and import them when needed
- Keep parameter definitions organized at the top of your files in clear sections (dimensions, features, customization options). This makes it easier to modify your designs
- Use clear, descriptive names for modules and variables that indicate their purpose - prefer `wall_thickness` over `wt` and `create_mounting_holes()` over `holes()`

### Performance Optimization 
- Use appropriate `$fn` values: low (20-30) during development for quick previews, higher (60-180) for production quality. Avoid values over 180 unless necessary
- Minimize boolean operations in complex designs - each `difference()` and `union()` adds computational overhead. Consider combining shapes where possible
- Cache expensive calculations in variables rather than repeating them. For example, store complex trigonometric calculations you'll use multiple times
- Test designs across their full parameter ranges to ensure they render correctly at all valid sizes and configurations

### Error Handling

- Set min/max constraints for numeric parameters using `assert()` to prevent impossible dimensions or broken geometry. For example, ensure wall thickness is always greater than printer nozzle size
- Provide sensible default values that work for most common use cases.
- Validate text input lengths and characters to prevent overflow or rendering issues. Consider font size and available space
- Add assertions to catch invalid parameter combinations that could break the model, like when hole diameter exceeds part width

## Common Use Cases

### Product Customization

- Name engravings and custom text with proper font scaling, kerning, and depth control based on text length
- Adjustable dimensions that maintain proper proportions and structural integrity across size ranges
- Optional features that can be toggled on/off while ensuring the base model remains printable
- Custom logos and branding elements with proper depth and detail preservation at various scales

### Batch Production

- Sequential serial numbers with customizable formats, prefixes
- Automated date stamps in various formats (YYYY-MM-DD, batch codes, etc.)
- Unique identifiers and tracking codes that follow industry standards (UPC, EAN, etc.)
- QR codes and barcodes optimized for 3D printing with proper relief and size constraints
- Batch numbers and production codes that integrate with your inventory management system

### Design Variants

- Multiple color options with proper wall thicknesses for multi-material printing
- Style variations from single code base while maintaining consistent quality and printability
- Configurable size ranges that automatically adjust internal structures and support requirements
- Material-specific adjustments like clearances for different filament shrinkage rates

## Troubleshooting

### Rendering Issues

Common rendering problems can be resolved by:

- Checking syntax errors in your code using OpenSCAD's built-in validator
- Verifying parameter types match expectations (numbers for dimensions, strings for text)
- Validating file paths for imported components relative to your project structure

### Performance Problems

If your design is rendering slowly:

- Reduce geometric complexity by simplifying curved surfaces where possible
- Optimize boolean operations by combining them or rethinking the construction method
- Cache repeated calculations in variables instead of recalculating
- Monitor memory usage during rendering and break up large designs
- Consider breaking into smaller modules that can be rendered independently

Need help! Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and support!

## OpenSCAD Resources

- [OpenSCAD Parts](./openscad-parts.md): Learn how to add OpenSCAD files to Printago
- [OpenSCAD Libraries](./libraries.md): Discover libraries available for use with Printago
- [ColorSCAD](./colorscad.md): Commercial feature for color customization
