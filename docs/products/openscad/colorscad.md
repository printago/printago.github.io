---
sidebar_position: 3
---

# ColorSCAD ![](/img/badges/add-on-badge.svg)

:::tip Add-on Feature
ColorSCAD is available with Printago Commercial plans. Contact sales@printago.io for more information.
:::
ColorSCAD extends OpenSCAD with parametric color control, allowing you to define colors directly within your OpenSCAD files. This enables dynamic color customization for multi-material and painted models.

## Getting Started with ColorSCAD

ColorSCAD lets your customers choose colors for different parts of a 3D model through a simple interface. Each color becomes a parameter that customers can select when ordering, enabling true personalization.

## Parametric Color Definition

Define colors as parameters in your OpenSCAD files:

```openscad
base_color = "red";        // [red, blue, green, yellow, black, white]
accent_color = "#FF5733";  // Hex color codes
trim_color = [0.2, 0.8, 0.4]; // RGB values (0-1)
```

## Color Application

Apply colors to specific parts of your model:

```openscad
// Color a specific module
color(base_color) 
    cube([10, 10, 2]);

// Multi-color assembly
color(accent_color)
    translate([0, 0, 2])
        cylinder(h=5, r=3);
```

## Supported Color Formats

ColorSCAD supports multiple color definition formats:

### Named Colors

Use standard named colors for simple selection:

```openscad
case_color = "blue"; // [red, orange, yellow, green, blue, purple, black, white]
```

### Hex Color Codes

Use hex codes for precise brand color matching:

```openscad
logo_color = "#FF5733"; // Company branding color
```

### RGB Values

Use RGB triplets for precise color control:

```openscad
// RGB values between 0-1
highlight_color = [0.2, 0.8, 0.4]; 
```

## Customer Experience

When customers configure a ColorSCAD-enabled model:

1. They see intuitive color pickers for each customizable component
2. Each component displays its current color selection in the preview
3. Real-time model rendering shows the color changes
4. Color selections are saved with the order for manufacturing

## Manufacturing Workflow

ColorSCAD integrates with your manufacturing process:

### Multi-Material Printing

- Color selections directly map to printer filament choices
- Automatically generates appropriate multi-material G-code
- Supports slicing profiles for specific color combinations

### Painted Model Production

- Generates color maps for post-production painting
- Creates assembly instructions with color references
- Supports quality control verification of color accuracy

## Best Practices

### Color Parameter Organization

- Group color parameters at the top of your file
- Provide clear descriptions for each color's purpose
- Set reasonable default colors that work well together
- Limit color choices to manufacturable options

### Model Organization

- Use separate modules for different colored components
- Apply colors at the appropriate level of your model hierarchy
- Consider how colors will affect material boundaries
- Test color combinations for visual harmony

### Performance Considerations

- ColorSCAD has minimal impact on rendering performance
- Preview rendering in OpenSCAD displays approximate colors
- Final production renders use exact color values

## Technical Implementation

ColorSCAD seamlessly integrates with OpenSCAD's existing color system while adding parametric control through Printago's interface. The feature enhances the standard OpenSCAD `color()` function with dropdown selectors, color pickers, and visualization tools.

For technical assistance implementing ColorSCAD in your models, contact our support team or join our [Discord community](https://discord.gg/RCFA2u99De).

## Commercial Benefits

- **Customer Color Selection**: Let customers choose colors from intuitive dropdowns
- **Brand Color Matching**: Use exact brand colors with hex codes
- **Multi-Material Support**: Define colors for different materials
- **Painted Model Workflows**: Generate color maps for painting services
- **Enhanced Customization**: Combine with other parameters for complete product personalization
