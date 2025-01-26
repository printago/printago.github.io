---
sidebar_position: 3
---
# OpenSCAD in Printago

OpenSCAD support in Printago lets you create dynamic, customizable 3D models that respond to customer input without touching code. Let's explore how it works!

## What is OpenSCAD?

OpenSCAD is a programming language for creating parametric 3D models. Instead of manually sculpting models, you write code that generates them. With Printago's native OpenSCAD support, you can:

- Create dynamic, customizable models
- Automate model generation
- Add personalization options like text and sizing
- Reference external fonts and STL files
- Generate parts on-the-fly

## Getting Started

1. Upload your OpenSCAD files (.scad) directly to Printago
2. Reference external fonts or STL files in your SCAD code
3. Define parameters for customization
4. Create SKUs using your OpenSCAD models

Here's a basic example:

```openscad
// Basic text extrusion example
module custom_text(text="Hello", height=10) {
    linear_extrude(height=height)
        text(text, size=20, font="Arial");
}

custom_text("Welcome to Printago");
```

## Dynamic Models

Dynamic models in Printago use OpenSCAD parameters to create variations of your 3D models automatically. Common uses include:

- Custom text engravings
- Adjustable dimensions
- Personalized designs
- Size variations

### Parameter Types

You can use several types of parameters in your OpenSCAD models:

- **Text**: For names, messages, or identifiers
- **Numbers**: For dimensions and measurements
- **Boolean**: For optional features
- **Selection**: For preset choices

## Working with Parameters

Here's how to set up parameters in your models:

```openscad
// Example with multiple parameter types
module customizable_nameplate(
    name="John Doe",  // Text parameter
    height=5,         // Number parameter
    include_border=true,  // Boolean parameter
    style="modern"    // Selection parameter
) {
    // Model logic here
}
```

## Font Management

Printago supports:
- System fonts
- Custom TTF/OTF fonts
- Font collections

To use custom fonts:

1. Upload fonts to your Printago account
2. Reference them in your OpenSCAD code:
```openscad
text("Custom Text", font="Your-Font-Name");
```

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

Need help? Check our FAQ or contact support at support@printago.com.