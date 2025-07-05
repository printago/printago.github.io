---
sidebar_position: 2
---

# Printing SKUs

This page covers how to print SKUs from your library. To learn more about how to create and manage SKUs, check out [SKU Management](./sku-management.md).

## Starting a Print

### Single SKU Printing
1. Navigate to `Products -> SKUs`
2. Find your SKU and click the `Print` button
3. Configure your print settings:
   - Quantities are pre-populated based on the SKU configuration
   - Materials are already set at the SKU level and cannot be overridden
   - For OpenSCAD parts, only parameters that are marked as `SKU PARAM` in the SKU configuration are displayed
4. Choose printer [Assignment Method](#assignment-methods)

<div className="margin-left--sm">
<img src="/img/printing/sku_printing_1.png" width="400" alt="bulk printing dialog" />
</div>
The printing interface works similarly to bulk printing parts, with each part in the SKU displayed in an accordion format for configuration.

### OpenSCAD Parameter Configuration
For SKUs containing OpenSCAD parts, only parameters marked as `SKU PARAM` in the SKU configuration are displayed for customization during printing. 

For more details on parameter configuration, see [SKU Management](./sku-management.md).

### Bulk SKU Printing
You can select multiple SKUs and print them together:

1. Select multiple SKUs using checkboxes
2. Choose `Print` from the Bulk Actions menu
3. Each SKU is presented one at a time for configuration:
   - Configure quantities and parameters for the current SKU
   - Click `Next` to proceed to the next SKU
   - Repeat until all selected SKUs are configured
4. All configured SKUs are then added to the print queue


## Printer Assignment

SKU printing uses the same printer assignment methods as parts printing:
### Assignment Methods

#### Next Available
Lets Printago automatically match jobs to compatible printers based on:
- Material requirements 
- Color matching
- Current printer status

#### Specific Printer 
Target an individual printer from your fleet. The job waits in queue until that printer:
- Has required materials loaded
- Is marked Clear & Ready
- Has no active prints

#### Tagged Printers
Filter available printers using tags to dynamically group printers. For example:
- Target any printers with tag "Production"
- Only use printers tagged both "Upper Floor" and "TexturedPEI"
- [Learn more about Printer Tags](/docs/printing/printer-management/printer-tags.md)

## Next Steps

After printing SKUs, jobs for their parts are added to the print queue where they are matched with available printers. For more information about how parts are matched with printers and queue management, see [Print Queue Management](../print-queue-management.md).