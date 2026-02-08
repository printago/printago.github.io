---
title: "ColorSCAD 💎"
---

# ColorSCAD

<div className="text--left">
  <img src="/img/badges/add-on-badge.svg" alt="Add-on Badge" width="12%" />
</div>

ColorSCAD is a premium add-on for Printago that enables multi-colored 3D models in OpenSCAD. ColorSCAD extracts material/filament assignments from `color()` statements in your SCAD file. Each unique color becomes a material slot that can be mapped to specific filaments in Printago.

## How It Works

1. Add `color()` statements to your OpenSCAD model
2. ColorSCAD scans your file and identifies unique colors
3. Each unique color becomes a material slot
4. Upload to Printago and map each slot to a specific filament

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
color("coral")
    make_sphere();
```
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
    <img src="/img/scad/color_scad_2.png" width="25%" alt="ColorSCAD Output 1" />
    <div style={{ fontSize: '2rem', color: '#666', margin: '0 -0.5rem' }}>+</div>
    <img src="/img/scad/color_scad_1.png" width="25%" alt="ColorSCAD Output 2" />
    <div style={{ fontSize: '2rem', color: '#666', margin: '0 -0.5rem' }}>=</div>
    <img src="/img/scad/color_scad_3.png" width="25%" alt="ColorSCAD Output 3" />
</div>

## Supported Color Formats

ColorSCAD supports two formats for material slot assignment:

### 1. Named Web Colors (Quoted Strings)

```openscad
color("red") cube(10);
color("cornflowerblue") sphere(5);
color("lime") cylinder(h=20, r=3);
```

- Must use quoted color names
- Supports all standard CSS/web color names (e.g., "red", "blue", "cornflowerblue", "darkseagreen")
- Same color name used multiple times = same material slot

### 2. Variable Colors (Unquoted Identifiers)

```openscad
BaseColor = "blue";
AccentColor = "red";

color(BaseColor) cube(10);
color(AccentColor) sphere(5);
color(BaseColor) cylinder(h=20, r=3);  // Reuses BaseColor slot
```

- Variable names are unquoted identifiers
- Each unique variable name creates one material slot
- Same variable name used multiple times = same material slot
- Variables are automatically assigned colors when displayed in OpenSCAD

**Note:** Hex codes (e.g., `"#FF5733"`) and RGB arrays (e.g., `[0.2, 0.8, 0.4]`) are **not supported** by ColorSCAD.

## How Materials Are Extracted

ColorSCAD scans your entire .scad file for `color()` statements and:

1. **Deduplicates colors**: Same name or variable = same material slot
2. **Creates material slots**: Each unique color/variable becomes a separate material slot
3. **Maps to filaments**: You can then map each slot to a specific filament in Printago's UI

:::warning Important: Top-Level Colors Only
Only **top-level** `color()` statements will be rendered properly. Nesting a `color()` statement inside another `color()` statement may be parsed but will not render correctly in Printago.

```openscad
// ✅ Good - keep colors at top level
color("red") cube(10);
color("blue") translate([15,0,0]) sphere(5);

// ❌ Bad - nested color statement won't render
color("red") {
    cube(10);
    color("blue") sphere(5);  // This won't render properly!
}
```
:::

Read more about the OpenSCAD `color()` command here:
https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#color

## Complete Example

```openscad
// Define color variables (optional)
BaseColor = "blue";
AccentColor = "orange";

// Define your model however you want
module body() {
    cube([20, 20, 10], center=true);
}

module accent() {
    sphere(6);
}

// Assign colors - these create material slots
color(BaseColor) body();                        // Material slot 1
color("red") accent();                          // Material slot 2
color(BaseColor) translate([25,0,0]) body();    // Reuses material slot 1
```

After uploading to Printago:
- **Material Slot 0**: `BaseColor` variable
- **Material Slot 1**: `"red"` named color

You can then assign specific filaments to each slot in the Printago UI.

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

