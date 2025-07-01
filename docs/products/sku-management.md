---
sidebar_position: 5
---

# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. In Printago, SKUs are synonymous with "Assemblies" can consist of one or more parts, with specific configurations for each part.  

## Overview

SKUs are the bridge between your 3D models and your production workflow. While Parts represent individual 3D models, SKUs represent complete products ready for production. SKUs are also what Printago leverages for e-commerce integrations.  This could be:

- A single part.
- Multiple parts that make up a complete product
- Variations of products (like different sizes or colors)
- Customizable products with variable parameters

SKUs are also part of Printago's e-commerce system: Orders are made of SKUs with quantities along with customer information.

## Creating SKUs

You'll need at least one part uploaded to Printago to start.  If you haven't added any parts yet, start with [Part Management](/docs/products/part-management.md).

### Basic SKU Setup
1. Navigate to `Products -> SKUs`.
2. Click "Create New SKU"
3. Enter a unique SKU value, a Title, and a Description.
4. Parts are created in your current [folder location](/docs/tips-shortcuts/folders.md) (click to change if needed).
5. Add one or more parts to your SKU by using the `Linked Parts` selector screen.
6 Set quantity requirements for each part
7. Click `Save`
    
<div className="margin-left--md">
:::info Part Types
SKUs may contain mixed file types supported by Printago.  OpenSCAD parts that import and manipulate STL models do *not* need to be added here.  They only are added at the [Part level](./openscad/openscad-parts.md).
:::
</div>
### OpenSCAD Parameters

- OpenSCAD part parameters may be disabled at the SKU level
- This allows for a single OpenSCAD part to be used over and over, giving it a different label each time.
- Consider the OpenSCAD input variables below:
    ```       
    size_in_mm = 5;
    output = "sphere"; //[sphere, cube]

    if (output == "sphere") {
        sphere (size_in_mm);
    } else {
        cube(size_in_mm, center = true);
    }
    ```
- In the snippet above the `output` variable determines the OpenSCAD  output.    

In the example below, the snippet above as a part, and named it `MyMultiShapePart`.  

:::tip Override Default Parameters
OpenSCAD files have default parameters which are used in OpenSCAD parts.  However, when _defaults_ for the OpenSCAD param for a part may be overridden at the SKU level.
:::
Have questions about creating SKUs? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!
