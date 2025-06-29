---
sidebar_position: 5
---

# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. A SKU can consist of one or more parts, with specific configurations for each part, making it easy to manage complex products and variations.  

## Overview

SKUs are the bridge between your 3D models and your production workflow. While Parts represent individual 3D models, SKUs represent complete products ready for production. SKUs are also what Printago leverages for e-commerce integrations.  This could be:
- A single part with specific print settings
- Multiple parts that make up a complete product
- Variations of products (like different sizes or colors)
- Customizable products with variable parameters

## Creating SKUs

You'll need at least 1 part in your [Part catalog](./adding-parts.md).

### Basic SKU Setup
1. Navigate to `Products -> SKUs`.
2. Click "Create New SKU"
    <br/><img src="/img/sku_create1.gif" width="650" alt="add sku 1" />
3. Fill form form fields for a SKU value, Title, and Description

    :::info
    For future e-commerce integrations, use SKUs also used in your online store(s). 
    :::

4. Add one or more parts to your SKU
5. Set quantity requirements for each part
6. Click `Save`
    <br/><img src="/img/sku_create2.gif" width="650" alt="add sku 2" />

:::info Part Types
SKUs may contain mixed file types supported by Printago.  OpenSCAD parts that import and manipulate STL models do *not* need to be added here.  They only are added at the [Part level](./adding-parts.md).
:::

### OpenSCAD Parameters

- OpenSCAD part parameters may be disabled at the SKU level
- This allows for a single OpenSCAD part to be used over and over, giving it a different label each time.
- Consider the OpenSCAD input variables below:
    ```
    input_text = "Test";
    text_equal_size = false;
    output = "detail";  // [outline, detail,]
    ```
- In the snippet above the `output` variable determines the OpenSCAD Output, `detail` or `outline`.  
    <br/><img src="/img/screenshot_000391.png" width="285" alt="add sku" />
    <img src="/img/screenshot_000392.png" width="300" alt="add sku" />


In our example, a SKU will be represented by 2 copies of the same SCAD part, but with different parameters. Here's how:
1. Add the OpenSCAD part to a SKU, just as the directions above.  
2. Be sure to give each Part a meaningful label *within* the SKU.
3. Each SCAD part in a SKU may have it's parameters hidden, or it may be a `SKU Param`.  Seen in the screenshots below, our outline piece only needs the `size_in_inches` parameters, while the detailed custom piece needs most of the variables.  Note that `output` is not a SKU Param for either part.
    <img src="/img/screenshot_000393.png" width="350" alt="add sku" />
    <img src="/img/screenshot_000394.png" width="350" alt="add sku" />
4. Save the SKU like any other.  When we print the SKU, we're given an "accordian" view for each part within the SKU, so that parameters may be set.  
    <img src="/img/sku_print.gif" width="700" alt="add sku" />


:::tip Override Default Parameters
OpenSCAD files have default parameters which are used in OpenSCAD parts.  However, when _defaults_ for the OpenSCAD param for a part may be overridden at the SKU level.
:::
Have questions about creating SKUs? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!
