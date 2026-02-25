
# CadQuery & build123d Libraries

Printago pre-installs a curated set of Python libraries alongside CadQuery and build123d. These are available to import in your scripts and cover the most common needs for parametric 3D printing design.

## Core CAD Libraries

### CadQuery
The original Python parametric CAD library. Uses a fluent, chainable API for building 3D geometry.
- **Import**: `import cadquery as cq`
- **Documentation**: [cadquery.readthedocs.io](https://cadquery.readthedocs.io/)
- **Repository**: [GitHub](https://github.com/CadQuery/cadquery)

### build123d
A newer Python CAD library with a context-manager-based API. Built by one of CadQuery's core contributors.
- **Import**: `from build123d import *`
- **Documentation**: [build123d.readthedocs.io](https://build123d.readthedocs.io/)
- **Repository**: [GitHub](https://github.com/gumyr/build123d)

## Part Libraries

### bd_warehouse
The build123d equivalent of cq_warehouse, from the same author.
- **Import**: `from bd_warehouse.thread import IsoThread` (example)
- **Repository**: [GitHub](https://github.com/gumyr/bd_warehouse)
- **Included parts**:
  - **Threads** -- ISO metric, Acme, trapezoidal, and plastic bottle threads
  - **Fasteners** -- Nuts, screws, and washers
  - **Bearings** -- Parametric bearings with press-fit holes
  - **Gears** -- Parametric gears with meshing capabilities
  - **Flanges** -- Standardized slip-on, weld neck, and blind flanges
  - **Pipes** -- Standardized pipes with joint specifications
  - **Sprockets** -- Parametric sprockets

## Geometry & Math Libraries

### NumPy
General-purpose numerical computing. Pre-installed as a dependency of CadQuery and build123d.
- **Import**: `import numpy as np`
- **Use cases**: Point arrays, coordinate transforms, batch geometry operations, mathematical functions
- **Documentation**: [numpy.org](https://numpy.org/doc/stable/)

### SciPy
Scientific computing library with optimization, interpolation, and signal processing.
- **Import**: `from scipy import interpolate`
- **Use cases**: Spline curves and surfaces, parametric curve generation, optimization of part dimensions
- **Documentation**: [scipy.org](https://docs.scipy.org/doc/scipy/)

### Shapely
2D geometry library for creating and manipulating planar shapes.
- **Import**: `from shapely.geometry import Polygon`
- **Use cases**: 2D profile generation, offset curves, boolean operations on 2D shapes, convex hulls
- **Documentation**: [shapely.readthedocs.io](https://shapely.readthedocs.io/)

## SVG & File Import

### svgpathtools
Read, manipulate, and write SVG path data. Useful for extruding logos, artwork, and 2D designs into 3D parts.
- **Import**: `import svgpathtools`
- **Use cases**: Importing SVG paths for extrusion, converting vector artwork to 3D geometry, path manipulation
- **Documentation**: [GitHub](https://github.com/mathandy/svgpathtools)

:::tip
CadQuery can natively import DXF files using `cq.importers.importDXF()`. For SVG files, use svgpathtools to parse the paths and convert them to CadQuery wire geometry.
:::

## Mesh & STL Libraries

### trimesh
Full-featured mesh processing library. Load, analyze, and manipulate triangular meshes.
- **Import**: `import trimesh`
- **Use cases**: Mesh analysis (volume, center of mass, watertightness), STL manipulation, boolean operations on meshes, mesh repair
- **Documentation**: [trimesh.org](https://trimesh.org/)

### numpy-stl
Fast, lightweight STL file reading and writing.
- **Import**: `from stl import mesh`
- **Use cases**: Loading reference STL files, modifying mesh geometry, fast STL export
- **Documentation**: [GitHub](https://github.com/WoLpH/numpy-stl)

## Standard Library

The full **Python 3.11 standard library** is available, including commonly used modules like:

- `math` -- Mathematical functions
- `itertools` -- Iteration utilities
- `functools` -- Higher-order functions
- `json` -- JSON parsing
- `re` -- Regular expressions
- `collections` -- Specialized container types

## Example: Using Libraries Together

Here's an example combining build123d with bd_warehouse to create a threaded bolt:

```python
from build123d import *
from bd_warehouse.fastener import SocketHeadCapScrew

params = {
    "screw_size": "M6-1",
    "screw_length": 20,
}

screw = SocketHeadCapScrew(
    size=params["screw_size"],
    length=params["screw_length"],
    simple=False,
)

result = screw
```

## Requesting Additional Libraries

If you need a library that isn't pre-installed, join our [Discord community](https://discord.gg/RCFA2u99De) and let us know. We regularly evaluate and add libraries based on user needs.
