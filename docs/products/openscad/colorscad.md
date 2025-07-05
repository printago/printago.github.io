---
sidebar_position: 4
title: "ColorSCAD 💎"
---

# ColorSCAD

<div className="text--left">
  <img src="/img/badges/add-on-badge.svg" alt="Add-on Badge" width="12%" />
</div>

ColorSCAD is a premium add-on for Printago that enables multi-colored 3D models in OpenSCAD. Each `color()` statement in your SCAD file becomes a separate, independently colored component in Printago.

## How It Works

1. Define separate modules for each colored component
2. Use `color()` to specify the color for each component
3. Position components so they don't overlap
4. Upload to Printago - each color becomes a separate component

## Example: Two-Color Model

```openscad

module make_cube() {
    difference() {
        cube(20, center=true);
        make_sphere();
    }
}


module make_sphere(diam = 12) {
    sphere(diam);
}


color("cornflowerblue") 
    make_cube();
color("#AC6456") 
    make_sphere();
```
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
    <img src="/img/scad/color_scad_2.png" width="25%" alt="ColorSCAD Output 1" />
    <div style={{ fontSize: '2rem', color: '#666', margin: '0 -0.5rem' }}>+</div>
    <img src="/img/scad/color_scad_1.png" width="25%" alt="ColorSCAD Output 2" />
    <div style={{ fontSize: '2rem', color: '#666', margin: '0 -0.5rem' }}>=</div>
    <img src="/img/scad/color_scad_3.png" width="25%" alt="ColorSCAD Output 3" />
</div>

## Key Points

- **No Overlapping**: Position components and use the `difference` command so colored bodies do not overlap.
- **Complete Components**: Each `color()` should wrap a complete, separate component
- **Module Organization**: Assign color at the end of your flow, using modules for organization.

## Supported Color Formats

- Named colors: `"red"`, `"blue"`, `"green"`
- Hex codes: `"#FF5733"`
- RGB values: `[0.2, 0.8, 0.4]` (values 0-1)

Read more about the OpenSCAD `color()` command here: 
https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#color

## Getting Started

ColorSCAD is available in the Add-Ons menu for Printago Commercial users. To enable it:

1. Go to your Printago dashboard
2. Open the Add-Ons menu
3. Enable ColorSCAD

ColorSCAD seamlessly integrates with OpenSCAD's existing Material system and replaces our standard OpenSCAD processor.  Using parameters you can easily define colors as dropdown selections on parts in Printago.

## Commercial Benefits

- **Customer Color Selection**: Let customers choose colors and automate for easy bespoke order fulfillment.
- **Enhanced Customization**: Combine with other parameters for complete product personalizations

For technical assistance implementing ColorSCAD in your models, contact our support team or join our [Discord community](https://discord.gg/RCFA2u99De).

