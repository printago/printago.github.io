---
sidebar_position: 1
---

# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. In Printago, SKUs are synonymous with "Assemblies" can consist of one or more parts, with specific configurations for each part.

SKUs are only available to Printago users on a [Commercial Account](/docs/settings/subscription-management.md)

## Key Concepts

- **SKU vs Part**: A Part is a single 3D model file; a SKU is a complete product that references one or more Parts with specific configurations.
- **Assemblies**: SKUs are synonymous with assemblies -- they bundle parts together into a single production unit.
- **Material Overrides**: Each part within a SKU can have its materials overridden at the SKU level, allowing the same Part file to produce different color or material variations.
- **Quantities per Part**: Each linked part in a SKU has its own quantity setting, controlling how many copies of that part are produced per SKU unit.
- **E-Commerce Integration**: SKUs are the entity that connects your print workflow to orders -- orders are composed of SKUs, not individual Parts.
- **Mixed File Types**: A single SKU can contain parts of different file types (STL, 3MF, OpenSCAD, etc.).

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
4. Parts are created in your current [folder location](/docs/features/folders.md) (click to change if needed).
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

SKUs may contain mixed file types supported by Printago. OpenSCAD parts that import and manipulate STL models do *not* need to be added here. They only are added at the [Part level](/docs/products/openscad/openscad-parts.md).

## Troubleshooting

### SKU Not Appearing in Orders or Print Dialog

**Problem**: You created a SKU but cannot find it when creating orders or printing.

**Solutions**:
1. Verify the SKU was saved successfully by navigating to `Products -> SKUs` and searching for it
2. Check that you are in the correct [folder](/docs/features/folders.md) -- SKUs are scoped to folders
3. Refresh the page to ensure the realtime service has synced

### Material Override Not Taking Effect

**Problem**: A part in your SKU is printing with its original materials instead of the overridden ones.

**Solutions**:
1. Open the SKU and confirm the material override is saved on the linked part
2. Make sure you clicked `Save` after configuring the override
3. If the SKU was already queued for printing, the override applies only to new print jobs -- re-queue the SKU

### Cannot Link a Part to the SKU

**Problem**: The part you want does not appear in the `Linked Parts` selector.

**Solutions**:
1. Ensure the part has been uploaded and is visible in `Products -> Parts`
2. Check that the part is in the same folder or a shared folder accessible from your current location
3. Try searching by the part name in the selector dialog

:::tip
If you encounter issues not listed here, join the [Discord community](https://discord.gg/RCFA2u99De) for help from other Printago users and the development team.
:::

## FAQ

**Q: Can I change the parts in a SKU after it has been used in orders?**
A: Yes. You can edit a SKU at any time to add, remove, or reconfigure parts. Changes apply to future print jobs only -- jobs already in the queue or completed are not affected.

**Q: Do I need a separate SKU for every color of the same product?**
A: Not necessarily. You can use material overrides to create color variations within a single SKU, or use [SKU Variants](/docs/commerce/sku-variants.md) for more advanced variation management driven by e-commerce options.

**Q: Is there a limit to how many parts a SKU can contain?**
A: There is no hard limit. A SKU can reference as many parts as needed to represent your complete product assembly.

**Q: What happens if I delete a Part that is linked to a SKU?**
A: The SKU will show the part as missing. You should update the SKU to link a replacement part before printing or processing new orders.

**Q: Can I duplicate an existing SKU to create a similar one?**
A: Currently, you need to create a new SKU and add the same parts. Copy the configuration from the existing SKU as a reference.