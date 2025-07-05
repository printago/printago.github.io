---
sidebar_position: 1
---

# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. In Printago, SKUs are synonymous with "Assemblies" can consist of one or more parts, with specific configurations for each part.  

SKUs are only available to Printago users on a [Commercial Account](/docs/pricing_page.md)

## Overview

SKUs are the bridge between your 3D models and your production workflow. While Parts represent individual 3D models, SKUs represent complete products ready for production. SKUs are also what Printago leverages for e-commerce integrations.  This could be:

- A single part.
- Multiple parts that make up a complete product
- Build plates from 3MF part files
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
<img src="/img/sku/sku_add_1.png" className="margin-left--lg" width="600" alt="Link Part to SKU" />
6. Set quantity requirements for each part
7. Optionally configure material overrides for each part (see Material Overrides section below)
8. Click `Create`
<img src="/img/sku/sku_add_2.png" className="margin-left--lg" width="600" alt="Link Part to SKU" />

### Material Overrides

By default, parts in SKUs use their original material settings. You can override materials at the SKU level to create variants (like the same part in different colors) without changing the original part.

When materials are overridden, those settings become fixed for that SKU - changing the original part's materials won't affect the overriden parts in the SKU.  

### Mixing Part Types in SKUs

SKUs may contain mixed file types supported by Printago. OpenSCAD parts that import and manipulate STL models do *not* need to be added here. They only are added at the [Part level](./openscad/openscad-parts.md).



### OpenSCAD Parameters

- OpenSCAD part parameters may be disabled at the SKU level
- This allows for a single OpenSCAD part to be used over and over, giving it a different label each time.
- Consider the OpenSCAD example below:
    ```  
        output = "all"; //["cube", "sphere", "all"]

        module make_cube() {
            difference() {
                cube(20, center=true);
                make_sphere();
            }
        }

        // Define a sphere
        module make_sphere(diam = 12) {
            sphere(diam);
        }

        if (output == "all" || output == "cube") 
            make_cube();

        if (output == "all" || output == "sphere") 
            make_sphere();
    ```
- In the snippet above the `output` variable determines the OpenSCAD  output.    
- The same OpenSCAD Part may be added to a SKU multiple times.  
- The "output" parameter may be set differently each time the part is added to the SKU.
- The "output" parameter may be hidden or displayed when the SKU is printed, locking in some parameters or "exposing" them to SKU.
- Any "exposed" parameter may have it's value changed at the time of being printed as it will show in the `Print SKU` dialog.

### Configuring SKU Parameters

#### Adding a Linked Part with 'Baked' Parameters
When adding an OpenSCAD part to a SKU, you can choose to expose its parameters.

<div className="margin-left--lg">
    <img src="/img/sku/sku_5.png" width="600" alt="Adding a linked part with the 'SKU PARAM' checkbox to expose parameters" />
</div>

#### Printing with SKU Parameters

**With Parameter Baked**

<div className="margin-left--lg">
When the parameter is not exposed (`SKU PARAM` is _unchecked_), it uses the value set on the SKU and cannot be changed during printing.

    <img src="/img/sku/sku_6.png" width="600" alt="Print dialog showing the exposed parameter that can be modified" />
</div>

**With Parameter Exposed**
When the parameter is exposed (`SKU PARAM` is _checked_), users can modify it during printing.

<div className="margin-left--lg">
    <img src="/img/sku/sku_7.png" width="600" alt="Print dialog with the parameter hidden, using default value" />
</div>


Have questions about creating SKUs? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!
