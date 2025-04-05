---
sidebar_position: 4
---
# OpenSCAD Libraries

Printago provides a collection of popular OpenSCAD libraries to extend your design capabilities. This page lists the available libraries and how to use them in your OpenSCAD designs. For each library, we've included links to the original repository, documentation, and the license under which it's available. These license links are provided to help you understand how you can use each library in accordance with its terms.

## Using Libraries in Printago

Each library is stored in a folder with the same name as its GitHub repository. All library paths in Printago are prepended with `printago/`. To use a library in your OpenSCAD files, include it with the `use` or `include` statement followed by the path to the specific library file.

```openscad
// Examples of importing libraries
use <printago/BOSL2/ball_bearings.scad>           // Import specific modules from BOSL2 library
include <printago/catchnhole/catchnhole.scad>     // Import all modules from catchnhole library
```

## Available Libraries

Printago includes a comprehensive collection of OpenSCAD libraries to enhance your 3D modeling capabilities.

### Table of Contents

#### General Libraries
- [BOSL](#bosl)
- [BOSL2](#bosl2)
- [dotSCAD](#dotscad)
- [NopSCADlib](#nopscadlib)
- [UB.scad](#ubscad)
- [Functional OpenSCAD](#functional-openscad)
- [Constructive Library](#constructive-library)
- [StoneAgeLib](#stoneagelib)
- [BOLTS](#bolts)
- [Asset Collection](#asset-collection)

#### Specialized Libraries
- [Round Anything](#round-anything)
- [Mark's Enclosure Helper](#marks-enclosure-helper)
- [funcutils](#funcutils)
- [OpenSCAD threads.scad Module](#openscad-threadsscad-module)
- [OpenSCAD Smooth Primitives Library](#openscad-smooth-primitives-library)
- [OpenSCAD Function Plotting Library](#openscad-function-plotting-library)
- [OpenSCAD ClosePoints Library](#openscad-closepoints-library)
- [Tray Library](#tray-library)
- [YAPP Generator](#yapp-generator)
- [STEMFIE Parts Library](#stemfie-parts-library)
- [Catch'n'Hole](#catchnhole)
- [Pathbuilder](#pathbuilder)
- [Altair's 2D Library](#altairs-2d-library)
- [Gridfinity Rebuilt](#gridfinity-rebuilt)
- [KeyV2](#keyv2)
- [Getriebe](#getriebe)
- [Knurled Finish Library](#knurled-finish-library)

### General Libraries

#### <a id="bosl"></a>BOSL

The Belfry OpenScad Library - A library of tools, shapes, and helpers to make OpenScad easier to use.

- [Library Repository](https://github.com/revarbat/BOSL)
- [Documentation](https://github.com/revarbat/BOSL/wiki)
- License: [BSD-2-Clause](https://spdx.org/licenses/BSD-2-Clause.html)

```openscad
use <printago/BOSL/threading.scad>  // Import specific BOSL module
```

#### <a id="bosl2"></a>BOSL2

Belfry OpenScad Library v2 - A library of tools, shapes, and helpers to make OpenScad easier to use.

- [Library Repository](https://github.com/BelfrySCAD/BOSL2/)
- [Documentation](https://github.com/BelfrySCAD/BOSL2/wiki)
- [Tutorials](https://github.com/BelfrySCAD/BOSL2/wiki/Tutorials)
- License: [BSD-2-Clause](https://spdx.org/licenses/BSD-2-Clause.html)

```openscad
use <printago/BOSL2/ball_bearings.scad>  // Import specific BOSL2 module
```

#### <a id="dotscad"></a>dotSCAD

Reduce the burden of 3D modeling in mathematics.

- [Library Repository](https://github.com/JustinSDK/dotSCAD)
- [Documentation](https://openhome.cc/eGossip/OpenSCAD/)
- License: [LGPL-3.0-only](https://spdx.org/licenses/LGPL-3.0-only.html)

```openscad
use <printago/dotSCAD/bezier_surface.scad>  // Import bezier surface module
```

#### <a id="nopscadlib"></a>NopSCADlib

An ever expanding library of parts modelled in OpenSCAD useful for 3D printers and enclosures for electronics, etc.

- [Library Repository](https://github.com/nophead/NopSCADlib)
- [Documentation](https://github.com/nophead/NopSCADlib/blob/master/readme.md)
- License: [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html)

```openscad
use <printago/NopSCADlib/vitamins/screws.scad>  // Import screws module
```

#### <a id="ubscad"></a>UB.scad

This library is a full 3D printing workflow solution for OpenSCAD, bringing tools for modifying and generating 3D objects, view helpers and a selection of mechanical parts.

- [Library Repository](https://github.com/UBaer21/UB.scad)
- [Documentation](https://github.com/UBaer21/UB.scad/blob/main/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/UB.scad/UB.scad>  // Import the main UB.scad library
```

#### <a id="functional-openscad"></a>Functional OpenSCAD

Implementing OpenSCAD in OpenSCAD.

- [Library Repository](https://github.com/thehans/FunctionalOpenSCAD)
- [Documentation](https://github.com/thehans/FunctionalOpenSCAD/blob/master/README.md)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/FunctionalOpenSCAD/func.scad>  // Import functional utilities
```

#### <a id="constructive-library"></a>Constructive Library

Extends OpenScad Language for complex and complementary mechanical parts with less mathematical code. Offers a "Stamping" approach to quickly create mechanical parts fitting and complementing one another. This is used as a replacement for Constraints known from other CAD systems.

- [Library Repository](https://github.com/solidboredom/constructive)
- [Documentation](https://github.com/solidboredom/constructive/blob/main/README.md)
- Tutorials: [Basics](https://github.com/solidboredom/constructive/blob/main/tutorials/basic-tutorial.md), [Part II](https://github.com/solidboredom/constructive/blob/main/tutorials/tutorial-partII.md), [Part III](https://github.com/solidboredom/constructive/blob/main/tutorials/tutorial-partIII.md)
- License: [GPL-2.0-only](https://spdx.org/licenses/GPL-2.0-only.html)

```openscad
include <printago/constructive/constructive-all.scad>  // Import the constructive library
```

#### <a id="stoneagelib"></a>StoneAgeLib

StoneAgeLib - All sorts of scripts for OpenSCAD. The scripts are for 3D models for 3D printing. An important aspect of this library is the CC0 (Public Domain) license.

- [Library Repository](https://github.com/Stone-Age-Sculptor/StoneAgeLib)
- [Documentation](https://github.com/Stone-Age-Sculptor/StoneAgeLib/tree/main/examples)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/StoneAgeLib/utils.scad>  // Import general utilities
```

#### <a id="bolts"></a>BOLTS

BOLTS is an Open Library of Technical Specifications.

- [Library Repository](https://github.com/boltsparts/BOLTS)
- [Documentation](https://boltsparts.github.io/en/index.html)
- License: [LGPL-2.1-or-later](https://spdx.org/licenses/LGPL-2.1-or-later.html) | [GPL-3.0-only](https://spdx.org/licenses/GPL-3.0-only.html)

```openscad
use <printago/BOLTS/bolts.scad>  // Import BOLTS library
```

#### <a id="asset-collection"></a>Asset Collection

A collection of OpenSCAD Scripts. There are some mechanical parts, as well as furniture and models that can be used as base mesh for 3D animations and game design.

- [Library Repository](https://github.com/AngeloNicoli/OpenSCAD-Snippet)
- [Documentation](https://github.com/AngeloNicoli/OpenSCAD-Snippet/blob/main/README.md)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/OpenSCAD-Snippet/models/something.scad>  // Import a specific asset
```

### Specialized Libraries

#### <a id="round-anything"></a>Round Anything

Round-Anything is primarily a set of OpenSCAD utilities that help with rounding parts, but it also embodies a robust approach to developing OpenSCAD parts.

- [Library Repository](https://github.com/Irev-Dev/Round-Anything)
- [Overview](https://learn.cadhub.xyz/docs/round-anything/overview/) - *A pragmatic approach to OpenSCAD design*
- [Documentation](https://learn.cadhub.xyz/docs/round-anything/api-reference/) - *API reference and examples*
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/Round-Anything/polyround.scad>  // Import polyround module
```

#### <a id="marks-enclosure-helper"></a>Mark's Enclosure Helper

A script for generating a two piece hinged box, with rounded corners, lid, interlocking rims, snap fit, magnet, or screw closures, and easy places for adding cutouts or additions to any face.

- [Library Repository](https://github.com/sbambach/MarksEnclosureHelper)
- [Documentation](https://github.com/sbambach/MarksEnclosureHelper/blob/master/REFERENCE.md)
- License: [GPL-3.0-only](https://spdx.org/licenses/GPL-3.0-only.html)

```openscad
use <printago/MarksEnclosureHelper/enclosure.scad>  // Import the enclosure module
```

#### <a id="funcutils"></a>funcutils

This library is a collection of OpenSCAD functions for use with the function-literals feature. It is meant to provide algorithms and tools to help build efficient scripts using functional programming techniques in OpenSCAD.

- [Library Repository](https://github.com/thehans/funcutils)
- [Documentation](https://github.com/thehans/funcutils/blob/master/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/funcutils/functional.scad>  // Import functional programming utilities
```

#### <a id="openscad-threadsscad-module"></a>OpenSCAD threads.scad Module

This is an efficient OpenSCAD threading library intended primarily to be used as a component in other designs. It supports metric compatible internal and external threads, auger threads, thread tapering, clearance holes, countersunk holes, recessed holes, hex bolts, nuts, washers, Phillips tips, and long rods which are extended with threaded joints.

- [Library Repository](https://github.com/rcolyer/threads-scad)
- [Documentation](https://github.com/rcolyer/threads-scad/blob/master/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/threads-scad/threads.scad>  // Import threading utilities
```

#### <a id="openscad-smooth-primitives-library"></a>OpenSCAD Smooth Primitives Library

This library is a collection of some smooth primitives, i.e. having specified rounded edges, for use in other designs. It's not a comprehensive collection, but a useful set.

- [Library Repository](https://github.com/rcolyer/smooth-prim)
- [Documentation](https://github.com/rcolyer/smooth-prim/blob/master/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/smooth-prim/smooth_prim.scad>  // Import smooth primitives
```

#### <a id="openscad-function-plotting-library"></a>OpenSCAD Function Plotting Library

This is a general purpose function plotting library for OpenSCAD which will render functions with Cartesian coordinates (x & y input, z output), polar/cylindrical coordinates (r & angle input, z output), or axial coordinates (z & angle input, r output).

- [Library Repository](https://github.com/rcolyer/plot-function)
- [Documentation](https://github.com/rcolyer/plot-function/blob/master/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/plot-function/plot_function.scad>  // Import function plotting utilities
```

#### <a id="openscad-closepoints-library"></a>OpenSCAD ClosePoints Library

This is a general purpose OpenSCAD library for easily creating diverse shapes by simply creating lists of points which trace out layers in an outline of the desired shape.

- [Library Repository](https://github.com/rcolyer/closepoints)
- [Documentation](https://github.com/rcolyer/closepoints/blob/master/README.md)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/closepoints/closepoints.scad>  // Import closepoints functionality
```

#### <a id="tray-library"></a>Tray Library

Allows the design of trays with optional subdivisions. Many different configuration options available. Designed to quickly create trays with different configurations, for efficient storing of parts, such as hardware, small tools, board game inserts, etc.

- [Library Repository](https://github.com/sofian/openscad-tray)
- [Documentation](https://github.com/sofian/openscad-tray/blob/main/README.md)
- License: [LGPL-3.0-or-later](https://spdx.org/licenses/LGPL-3.0-or-later.html)

```openscad
use <printago/openscad-tray/tray.scad>  // Import tray generation functionality
```

#### <a id="yapp-generator"></a>YAPP (Yet Another Parametric Projectbox) Generator

A generator for electronic project boxes, based on a definition of a PCB and lots of options for defining PCB standoffs and case cutouts.

- [Library Repository](https://github.com/mrWheel/YAPP_Box)
- [Documentation](https://github.com/mrWheel/YAPP_Box/blob/main/README.md)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/YAPP_Box/YAPP_Box.scad>  // Import YAPP box generator
```

#### <a id="stemfie-parts-library"></a>STEMFIE Parts Library

OpenSCAD library to create parts for the [STEMFIE project](https://www.stemfie.org/). STEMFIE is a free educational construction-set toy you can download and make at home using a 3D printer.

- [STEMFIE project](https://www.stemfie.org/)
- [Library Repository](https://github.com/Cantareus/Stemfie_OpenSCAD)
- [Documentation](https://github.com/Cantareus/Stemfie_OpenSCAD/blob/main/docs/stemfie.scad.md)
- License: [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html)

```openscad
use <printago/Stemfie_OpenSCAD/stemfie.scad>  // Import STEMFIE parts library
```

#### <a id="catchnhole"></a>Catch'n'Hole

An ergonomic way to create nutcatches, screw holes and countersinks in OpenSCAD.

- [Library Repository](https://github.com/mmalecki/catchnhole)
- [Documentation](https://github.com/mmalecki/catchnhole/blob/latest/README.md)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
include <printago/catchnhole/catchnhole.scad>  // Import Catch'n'Hole library
```

#### <a id="pathbuilder"></a>Pathbuilder

A fast way to create complex 2D shapes with fillets and chamfers using SVG syntax. Supports the full SVG syntax.

- [Library Repository](https://github.com/dinther/pathbuilder)
- [Documentation](https://github.com/dinther/pathbuilder/blob/main/README.md)
- [Wiki](https://github.com/dinther/pathbuilder/wiki)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/pathbuilder/pathbuilder.scad>  // Import Pathbuilder library
```

#### <a id="altairs-2d-library"></a>Altair's 2D Library for OpenSCAD (A2D)

A library of useful functions, modules and constants for 2D drawing in OpenSCAD.

- [Library Repository](https://github.com/ridercz/A2D)
- [Documentation](https://github.com/ridercz/A2D/wiki)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/A2D/A2D.scad>  // Import Altair's 2D Library
```

#### <a id="gridfinity-rebuilt"></a>Gridfinity Rebuilt

A ground-up rebuild of the Gridfinity storage system in OpenSCAD. Gridfinity is a modular storage system designed by Zack Freedman, and this library provides a parametric implementation in OpenSCAD.

- [Library Repository](https://github.com/kennetek/gridfinity-rebuilt-openscad)
- [Documentation](https://github.com/kennetek/gridfinity-rebuilt-openscad/blob/main/README.md)
- [Project Website](https://kennetek.github.io/gridfinity-rebuilt-openscad/)
- License: [MIT](https://spdx.org/licenses/MIT.html)

```openscad
use <printago/gridfinity-rebuilt-openscad/gridfinity-rebuilt-bins.scad>  // Import Gridfinity bins
```

#### <a id="keyv2"></a>KeyV2

A parametric mechanical keycap library for designing and customizing keycaps for mechanical keyboards.

- [Library Repository](https://github.com/rsheldiii/KeyV2)
- [Documentation](https://github.com/rsheldiii/KeyV2/wiki)
- License: [GPL-3.0](https://spdx.org/licenses/GPL-3.0.html)

```openscad
use <printago/KeyV2/src/key.scad>  // Import keycap generation functionality
```

#### <a id="getriebe"></a>Getriebe

An OpenSCAD gear library for creating various types of gears and gear systems.

- [Library Repository](https://github.com/Erhannis/getriebe)
- License: [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)

```openscad
use <printago/getriebe/getriebe.scad>  // Import gear generation library
```

#### <a id="knurled-finish-library"></a>Knurled Finish Library

A library for creating knurled finishes on cylindrical surfaces in OpenSCAD.

- [Library Repository](https://github.com/hreese/3dprinting/blob/master/_extern/knurledFinishLib_v2.scad)
- [Examples](https://github.com/hreese/3dprinting/blob/master/_extern/knurledFinish_v2_Examples.scad)
- License: [LGPL-2.1](https://spdx.org/licenses/LGPL-2.1.html)

```openscad
use <printago/knurledFinishLib_v2/knurledFinishLib_v2.scad>  // Import knurled surface library
```

## Library Requests

If you need a specific library that isn't listed here, please reach out to our support team at support@printago.io or join our [Discord community](https://discord.gg/RCFA2u99De).
