---
sidebar_position: 4
title: "ColorSCAD 💎"
---

# ColorSCAD

<div className="text--left">
  <img src="/img/badges/add-on-badge.svg" alt="Add-on Badge" width="12%" />
</div>

ColorSCAD is a premium add-on for Printago that enables multi-colored 3D models in OpenSCAD. ColorSCAD extracts material/filament assignments from `color()` statements in your SCAD file. Each unique color becomes a material slot that can be mapped to specific filaments in Printago.

## Key Concepts

- **`color()` statements**: ColorSCAD scans your .scad file for `color()` calls and converts each unique color into a material slot that maps to a filament in Printago
- **Material extraction**: Each unique color name or variable creates one material slot; reusing the same color/variable reuses the same slot
- **Supported color formats**: Named web colors (e.g., `"red"`, `"cornflowerblue"`) and variable colors (unquoted identifiers) are supported; hex codes and RGB arrays are not
- **Top-level colors only**: Only top-level `color()` statements render correctly; nesting a `color()` inside another `color()` will not produce the expected result
- **Premium add-on**: ColorSCAD is available to Printago Commercial users via the Add-Ons menu

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

---

## Troubleshooting

### Colors Not Detected After Upload

- Ensure `color()` statements are at the top level of your model, not nested inside another `color()` block
- Verify you are using supported formats: named web colors (`"red"`) or variable identifiers (`BaseColor`), not hex codes (`"#FF5733"`) or RGB arrays (`[0.2, 0.8, 0.4]`)
- Check that the ColorSCAD add-on is enabled in your Printago Add-Ons menu

### Fewer Material Slots Than Expected

- ColorSCAD deduplicates colors: the same color name or variable used multiple times creates only one material slot
- Confirm each intended material slot uses a distinct color name or variable identifier

### Nested Colors Not Rendering Correctly

- This is expected behavior. Only top-level `color()` statements are supported. Restructure your model so that each `color()` call is at the top level:
  ```openscad
  // Correct: separate top-level color statements
  color("red") cube(10);
  color("blue") translate([15,0,0]) sphere(5);
  ```

### Model Renders in OpenSCAD but Not in Printago

- ColorSCAD replaces Printago's standard OpenSCAD processor; ensure your model does not rely on features incompatible with the ColorSCAD pipeline
- Test locally using the OpenSCAD Development Snapshot before uploading
- Check for syntax errors or unresolved `import`/`use` references

:::warning
Hex color codes (e.g., `"#FF5733"`) and RGB arrays (e.g., `[0.2, 0.8, 0.4]`) are not supported by ColorSCAD. Use named web colors or variable identifiers instead.
:::

---

## FAQ

**Q: Can customers choose colors when ordering a ColorSCAD product?**
A: Yes. By defining colors as OpenSCAD parameters with dropdown selections, you can let customers pick their preferred colors, and Printago will map those to the appropriate filaments automatically.

**Q: How many material slots can a ColorSCAD model have?**
A: The number of material slots matches the number of unique colors in your model. The practical limit depends on the number of filament slots available on your printer (e.g., 4 for an AMS).

**Q: Can I mix named colors and variable colors in the same model?**
A: Yes. Each named color and each variable identifier creates its own material slot independently. For example, `color("red")` and `color(AccentColor)` are two separate slots even if `AccentColor` is set to `"red"`.

**Q: Does ColorSCAD work with all printers?**
A: ColorSCAD works with any multi-material printer supported by Printago. Single-extruder printers can still print ColorSCAD models but will only use one material.

**Q: Is ColorSCAD compatible with OpenSCAD libraries like BOSL2?**
A: Yes. ColorSCAD works with any OpenSCAD library. Just ensure your `color()` statements are at the top level and not buried inside library function calls.

---

For technical assistance implementing ColorSCAD in your models, contact our support team or join our [Discord community](https://discord.gg/RCFA2u99De).

