
# CadQuery & build123d Parts

CadQuery and build123d support in Printago lets you create parametric 3D models using Python. Write real Python code to generate models, define customizable parameters, and leverage a rich ecosystem of engineering libraries -- all without leaving Printago.

## What are CadQuery and build123d?

**CadQuery** and **build123d** are Python libraries for creating precise, parametric 3D CAD models using code. Both are built on the OpenCASCADE (OCCT) geometry kernel -- the same kernel used by FreeCAD and other professional CAD tools -- giving you access to BREP (boundary representation) modeling with fillets, chamfers, lofts, sweeps, booleans, and more.

| | CadQuery | build123d |
|---|---|---|
| **Style** | Fluent/chained API | Context managers (builder pattern) |
| **Maturity** | Established, large community | Newer, rapidly growing |
| **Best for** | Quick one-liners, chained operations | Complex assemblies, cleaner code structure |

Printago supports both -- your script's imports determine which library is used. If Printago detects a `build123d` import (`import build123d`, `from build123d import ...`, or `import build123d as ...`), it uses build123d. Otherwise, it defaults to CadQuery.

## How Scripts Work

A Printago CadQuery/build123d script is a standard Python file with two conventions:

1. Define a `params` dictionary at the top with default values
2. Set `result` to your final geometry

That's it. Your script works identically on your local machine and in Printago.

### CadQuery Example

```python
import cadquery as cq

params = {
    "width": 30,
    "depth": 20,
    "height": 15,
    "fillet": 3,
}

# Optional: UI hints for Printago (ignored when running locally)
printago = {
    "width":  {"min": 10, "max": 100, "label": "Width (mm)"},
    "depth":  {"min": 10, "max": 100, "label": "Depth (mm)"},
    "height": {"min": 5,  "max": 50,  "label": "Height (mm)"},
    "fillet": {"min": 0,  "max": 10,  "label": "Corner Radius"},
}

box = cq.Workplane("XY").box(params["width"], params["depth"], params["height"])

if params["fillet"] > 0:
    box = box.edges("|Z").fillet(params["fillet"])

result = box
```

### build123d Example

```python
from build123d import *

params = {
    "width": 30,
    "depth": 20,
    "height": 15,
    "fillet": 3,
}

printago = {
    "width":  {"min": 10, "max": 100, "label": "Width (mm)"},
    "depth":  {"min": 10, "max": 100, "label": "Depth (mm)"},
    "height": {"min": 5,  "max": 50,  "label": "Height (mm)"},
    "fillet": {"min": 0,  "max": 10,  "label": "Corner Radius"},
}

box = Box(params["width"], params["depth"], params["height"])

if params["fillet"] > 0:
    box = fillet(box.edges().filter_by(Axis.Z), radius=params["fillet"])

result = box
```

### Parameters

When you upload a script, Printago automatically detects the `params` dictionary and creates editable fields in the UI. Users can override any parameter value without touching the code.

- **Numbers** become numeric input fields
- **Strings** become text fields
- **Booleans** become toggles

Place your `params` dictionary near the top of the file, after any imports but before geometry code.

### Parameter UI Hints (`printago` dict)

You can optionally add a `printago` dictionary to control how parameters appear in the Printago UI. This dict is parsed by Printago when you upload the script but is ignored when running locally, so your script stays fully portable.

```python
import cadquery as cq

params = {
    "width": 30,
    "depth": 20,
    "height": 15,
    "fillet": 3,
    "style": "rounded",
}

printago = {
    "width":  {"min": 10, "max": 100, "description": "Box width in mm"},
    "depth":  {"min": 10, "max": 100, "description": "Box depth in mm"},
    "height": {"min": 5,  "max": 50,  "label": "Height (mm)"},
    "fillet": {"min": 0,  "max": 10,  "label": "Corner Radius"},
    "style":  {"options": ["rounded", "chamfered", "sharp"]},
}
```

Each key in the `printago` dict matches a key in `params` and supports these fields:

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Minimum allowed value (number parameters only) |
| `max` | number | Maximum allowed value (number parameters only) |
| `description` | string | Description shown in the UI for this parameter |
| `label` | string | Short label for the parameter (used if `description` is not set) |
| `options` | array | List of allowed values -- converts the field to a dropdown |

:::tip
The `printago` dict is completely optional. Without it, Printago still generates UI controls from `params` -- you just won't have min/max constraints, descriptions, or dropdowns.
:::

### Multi-Color Assemblies

Both CadQuery and build123d support multi-color output, just like [ColorSCAD](/docs/parts/openscad/colorscad). Each unique color in your script becomes a separate material slot, so you can assign different filaments to each color in the Printago UI.

If you use a local viewer like [OCP CAD Viewer](https://github.com/bernhard-42/vscode-ocp-cad-viewer) for model development, you can structure your script so it works both locally and in Printago. The `try/except` block for `ocp_vscode` is safely ignored in Printago's sandbox, so you can develop and preview with the same script you upload.

#### CadQuery

Build a `cq.Assembly` and assign colors with `cq.Color()`:

```python
import cadquery as cq

try:
    from ocp_vscode import show
except ImportError:
    show = None

params = {"size": 20}

body = cq.Workplane("XY").box(params["size"], params["size"], params["size"])
accent = cq.Workplane("XY").sphere(params["size"] * 0.3)

assy = cq.Assembly()
assy.add(body, color=cq.Color("blue"))
assy.add(accent, color=cq.Color("red"))

result = assy

if show:
    show(result)
```

Colors cascade through nested assemblies -- a parent color applies to all children unless overridden:

```python
assy = cq.Assembly()

sub = cq.Assembly()
sub.add(part_a)  # inherits "blue" from parent
sub.add(part_b, color=cq.Color("red"))  # overrides to red

assy.add(sub, color=cq.Color("blue"))

result = assy
```

:::info
Multi-color output requires returning a `cq.Assembly`. A single `Workplane` or shape produces single-color output.
:::

#### build123d

Assign `.color` to individual shapes and set `result` to a list:

```python
from build123d import *

try:
    from ocp_vscode import show
except ImportError:
    show = None

params = {"size": 20}

body = Box(params["size"], params["size"], params["size"])
body.color = Color("blue")

accent = Sphere(params["size"] * 0.3)
accent.color = Color("red")

result = [body, accent]

if show:
    show(*result)
```

This pattern works identically in both environments -- `show(*result)` previews your colored model in [OCP CAD Viewer](https://github.com/bernhard-42/vscode-ocp-cad-viewer) during local development, and Printago reads the same `.color` attributes to split the model into separate material slots.

:::info
Multi-color output requires setting `result` to a **list** of shapes with `.color` set. Do not use `Compound` -- wrapping shapes in a `Compound` loses the per-shape color information and produces single-color output. A single shape (not in a list) also produces single-color output.
:::

#### How Colors Are Processed

- Parts with the same color are merged into a single STL file
- Parts with no color are grouped together as a single uncolored file
- Each unique color becomes a material slot in the Printago UI, where you can assign filaments to each slot
- **CadQuery**: use a `cq.Assembly` with `color=cq.Color(...)` on each `.add()` call. Child nodes inherit their parent's color unless they specify their own.
- **build123d**: set `.color = Color(...)` on individual shapes and return them as a list. Color is per-shape -- there is no inheritance.

#### Supported Color Formats

Both `cq.Color()` (CadQuery) and `Color()` (build123d) accept the same formats:

```python
# Named colors (CSS/X11 color names)
cq.Color("red")         # CadQuery
Color("red")             # build123d

# RGB floats (0.0 - 1.0)
cq.Color(1.0, 0.0, 0.0)           # CadQuery
Color(0.39, 0.58, 0.93)           # build123d
Color(0.2, 0.8, 0.4, 0.5)        # with alpha (4th value)

# Hex integer (build123d only)
Color(0x4683CE)
```

## Execution Environment

Scripts run in a secure sandboxed environment with:

- **No network access** -- scripts cannot make HTTP requests or download files
- **No disk access** -- scripts cannot read or write files outside the sandbox
- **Resource limits** -- 2 GB memory, 5-minute time limit
- **Python 3.11** with the full standard library available

You can import any [pre-installed library](./libraries.md) using standard Python `import` statements. See the [Libraries](./libraries.md) page for the full list.

## Local Development

Since Printago scripts are standard Python, you can develop and test them on your local machine before uploading.

### Setup

```bash
pip install cadquery build123d
```

To include all the same libraries available in Printago:

```bash
pip install cadquery build123d bd-warehouse trimesh shapely scipy svgpathtools numpy-stl
```

### Viewing Models

For real-time 3D preview while you code, we recommend one of:

- **[OCP CAD Viewer](https://github.com/bernhard-42/vscode-ocp-cad-viewer)** -- VS Code extension with inline 3D preview for both CadQuery and build123d
- **[CQ-editor](https://github.com/CadQuery/CQ-editor)** -- Standalone GUI editor for CadQuery

### Exporting STL Locally

To export your model to STL for local testing:

```python
# CadQuery
import cadquery as cq
# ... your model code ...
cq.exporters.export(result, "model.stl")

# build123d
from build123d import export_stl
# ... your model code ...
export_stl(result, "model.stl")
```

:::tip
Keep your `params` dictionary and `result` assignment in your script even during local development. This ensures your script works in both environments without modification.
:::

## Best Practices

### Script Structure
- Place `params` near the top of your file, after imports but before geometry code
- Use descriptive parameter names (`wall_thickness` not `wt`)
- Provide sensible defaults that produce a valid model
- Always set `result` to your final geometry

### Performance
- CadQuery and build123d share the same OCCT kernel -- both produce identical geometry quality
- Minimize the number of boolean operations (unions, cuts) where possible
- For complex models, build up geometry incrementally rather than creating large compound operations
- Test your script's full parameter range to ensure it produces valid geometry at all values

### 3D Printing Considerations
- Design with your printer's tolerances in mind (typically 0.1-0.2mm for FDM)
- Use the pre-installed [bd_warehouse](./libraries.md#bd_warehouse) library for standard threads, fasteners, and mechanical features instead of modeling them from scratch
- Consider wall thickness and overhang angles when designing parametric ranges

## Using Existing CadQuery Scripts

The [CadQuery examples gallery](https://cadquery.readthedocs.io/en/latest/examples.html) has dozens of ready-made scripts you can adapt for Printago. To make any existing CadQuery script work as a parametric Printago part:

1. **Keep the imports** -- your `import cadquery as cq` (or any other imports) stay as-is
2. **Add a `params` dict** -- extract any hardcoded values you want to be configurable into a `params` dictionary near the top, after imports
3. **Optionally add a `printago` dict** -- add min/max constraints, labels, or dropdown options for a better UI experience
4. **Read values from `params`** -- replace hardcoded values with `params["key"]` references
5. **Set `result`** -- assign your final geometry to `result` at the end of the script

For example, if an existing script has:

```python
import cadquery as cq

width = 30
height = 15

box = cq.Workplane("XY").box(width, width, height)
```

You would adapt it by adding `params` and `printago` after the imports, replacing the hardcoded values with `params` lookups, and assigning `result` at the end -- the rest of the script stays unchanged:

```python
import cadquery as cq

params = {
    "width": 30,
    "height": 15,
}

printago = {
    "width":  {"min": 5, "max": 100, "label": "Width (mm)"},
    "height": {"min": 5, "max": 50,  "label": "Height (mm)"},
}

width = params["width"]
height = params["height"]

box = cq.Workplane("XY").box(width, width, height)

result = box
```

## Resources

- [CadQuery Documentation](https://cadquery.readthedocs.io/)
- [CadQuery Examples](https://cadquery.readthedocs.io/en/latest/examples.html) -- ready-made scripts to adapt for Printago
- [build123d Documentation](https://build123d.readthedocs.io/)
- [Pre-installed Libraries](./libraries.md)

Need help? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips!
