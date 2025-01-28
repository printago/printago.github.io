---
sidebar_position: 3
---
# OpenSCAD in Printago

OpenSCAD support in Printago lets you create dynamic, customizable 3D models that respond to customer input without touching code. Let's explore how it works!

## What is OpenSCAD?

OpenSCAD is a programming language for creating parametric 3D models. Instead of manually sculpting models, you write code that generates them. With Printago's native OpenSCAD support, you can:

- Create dynamic, customizable models
- Automate model scaling and sizing
- Add personalization options like text and color
- Reference external fonts
- Modify existing STL files

## Editing OpenSCAD Files

To create and edit OpenSCAD files, [download OpenSCAD](https://openscad.org/downloads.html#snapshots).  Be sure to download one of the **Development Snapsnot** versions for your computer.
<img src="\img\screenshot_000360.png" width="600" alt="OpenSCAD IDE" />
If you're new to OpenSCAD, this documentation will not serve as a tutorial.  However, you will find a few example snippets.  

If you're interested in using OpenSCAD in Printago, reach out to support@printago.io or chat with the development team on our [Discord server](https://discord.gg/RCFA2u99De) - we will gladly help you!

## Importing Files

Printago supports the `use` and `import` commands in OpenSCAD.  You may use fonts or other OpenSCAD libraries, or import STLs, SVG, or DXF files.  

```openscad
use <ArianaVioleta.ttf>     // fonts
use <text_tools.scad>       // OpenSCAD library
import("iphone16_case.stl") // STL Geometry
import("customer_logo.dxf") // Flat-Geometry import (SVG works too)
``` 

:::warning
Do not use variables as `import` or `use` arguments.  The Printago OpenSCAD parser will not find these files.
```openscad
filename = "customer_logo.dxf");  
import(filename); 
```
:::

## Dynamic Models

Dynamic models in Printago use OpenSCAD parameters to create variations of your 3D models automatically. Common uses include:

- Custom text engravings
- Adjustable dimensions
- Personalized designs
- Size variations
- COMING SOON: Define parts colors (automatically painted models)

### Parameter Types

You can use several types of parameters in your OpenSCAD models:

- **Text**: For names, messages, or identifiers
- **Numbers**: For dimensions and measurements
- **Boolean**: For optional features
- **Selection**: For preset choices

### Working with Parameters

Here's how to set up parameters in your models:

<!-- ```openscad
// Example with multiple parameter types
module customizable_nameplate(
    name="John Doe",  // Text parameter
    height=5,         // Number parameter
    include_border=true,  // Boolean parameter
    style="modern"    // Selection parameter
) {
    // Model logic here
}
``` -->

### Font Management

Printago supports **TTF** and **OTF** fonts.  

## Adding OpenSCAD Parts to Printago


## Best Practices

### Modular Design
- Break complex models into smaller modules
- Reuse common components
- Keep parameters organized

### Performance
- Use `$fn` judiciously
- Minimize complex operations
- Test with different parameter values

### Error Handling
- Set parameter constraints
- Provide default values
- Add input validation

## Common Use Cases

### Product Customization
- Name engravings
- Size adjustments
- Feature toggles

### Batch Production
- Serial numbers
- Date stamps
- Unique identifiers
- Bar Codes

### Design Variants
- Color options
- Style variations
- Size ranges

## Troubleshooting

Common rendering problems can be solved by:
- Checking syntax errors
- Verifying parameter types
- Confirming font availability

For performance issues:
- Reduce complexity
- Optimize operations
- Check resource usage

Stay tuned for updates and new features! Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!