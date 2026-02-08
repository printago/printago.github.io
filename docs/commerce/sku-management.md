
# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. In Printago, SKUs are synonymous with "Assemblies" can consist of one or more parts, with specific configurations for each part.  

SKUs are only available to Printago users on a [Commercial Account](/docs/settings/subscription-management.md)

## Overview

SKUs are the bridge between your 3D models and your production workflow. While Parts represent individual 3D models, SKUs represent complete products ready for production. SKUs are also what Printago leverages for e-commerce integrations.  This could be:

- A single part.
- Multiple parts that make up a complete product
- Build plates from 3MF part files
- Variations of products (like different sizes or colors)
- Customizable products with variable parameters

SKUs are also part of Printago's e-commerce system: Orders are made of SKUs with quantities along with customer information.

## Creating SKUs

You'll need at least one part uploaded to Printago to start.  If you haven't added any parts yet, start with [Part Management](/docs/parts/part-management.md).

### Basic SKU Setup
1. Navigate to `Products -> SKUs`.
2. Click "Create New SKU"
3. Enter a unique SKU value, a Title, and a Description.
4. Parts are created in your current [folder location](/docs/tools/folders.md) (click to change if needed).
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

SKUs may contain mixed file types supported by Printago. OpenSCAD parts that import and manipulate STL models do *not* need to be added here. They only are added at the [Part level](/docs/parts/openscad/openscad-parts.md).