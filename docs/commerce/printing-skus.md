---
sidebar_position: 3
---

# Printing SKUs

This page covers how to print SKUs from your library. To learn more about how to create and manage SKUs, check out [SKU Management](./sku-management.md).

## Key Concepts

- **SKU Printing vs Part Printing**: When you print a SKU, Printago creates print jobs for all of the linked parts at once, respecting per-part quantities, material overrides, and parameter configurations defined in the SKU.
- **Assignment Methods**: You choose how printers are selected for each job -- automatically via "Next Available," targeting a specific printer, or filtering by printer tags.
- **Material Lock**: Materials are set at the SKU level and cannot be changed during the print dialog. To use different materials, update the SKU configuration first.
- **OpenSCAD SKU Parameters**: Only parameters explicitly marked as `SKU PARAM` in the SKU configuration are exposed during printing, keeping the dialog focused on what matters.
- **Bulk Printing**: Multiple SKUs can be selected and printed in a single workflow, configured one at a time before all jobs are added to the queue.

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

After printing SKUs, jobs for their parts are added to the print queue where they are matched with available printers. For more information about how parts are matched with printers and queue management, see [Print Queue Management](../printing/print-queue-management.md).

## Troubleshooting

### Print Button Is Grayed Out or Missing

**Problem**: The Print button does not appear or is not clickable for a SKU.

**Solutions**:
1. Ensure the SKU has at least one linked part -- SKUs without parts cannot be printed
2. Check that all linked parts still exist and have not been deleted
3. Refresh the page to re-establish the realtime connection

### No Compatible Printers Found

**Problem**: After clicking Print and choosing "Next Available," no printers are matched.

**Solutions**:
1. Verify that at least one printer has the required material loaded
2. Check that a printer is online and marked as "Clear & Ready"
3. If using Tagged Printers, confirm the tags are correctly assigned to your printers

### OpenSCAD Parameters Not Showing in Print Dialog

**Problem**: You expect customizable parameters but the print dialog shows none.

**Solutions**:
1. Open the SKU configuration and verify parameters are marked as `SKU PARAM`
2. Only parameters flagged as `SKU PARAM` appear during printing -- other parameters use their default values
3. Re-save the SKU after making changes and try printing again

### Bulk Print Only Queues Some SKUs

**Problem**: After bulk printing multiple SKUs, not all jobs appear in the queue.

**Solutions**:
1. Make sure you clicked `Next` through every SKU in the sequence before confirming
2. Check the print queue for any jobs that may have been created with errors
3. Try printing the missing SKUs individually to isolate the issue

:::tip
If a print job is stuck or not behaving as expected, check the [Print Queue Management](../printing/print-queue-management.md) page for queue troubleshooting guidance.
:::

## FAQ

**Q: Can I override materials when printing a SKU?**
A: No. Materials are locked at the SKU level. If you need a different material, edit the SKU configuration or create a new SKU with the desired material overrides. For dynamic material selection, consider using [SKU Variants](/docs/commerce/sku-variants.md).

**Q: What happens if I print the same SKU multiple times?**
A: Each print action creates a new set of print jobs in the queue. Printago does not deduplicate -- every print request generates independent jobs.

**Q: Can I cancel a SKU print after it has been queued?**
A: Yes. Navigate to the print queue, find the jobs associated with the SKU, and cancel them individually or in bulk. Jobs that are already actively printing on a printer cannot be cancelled from the queue.

**Q: How does bulk printing handle SKUs with different assignment methods?**
A: Each SKU in a bulk print is configured independently. You can choose a different assignment method (Next Available, Specific Printer, or Tagged Printers) for each SKU in the sequence.

**Q: Do I need to print all parts in a SKU, or can I print just one?**
A: Printing a SKU always creates jobs for all linked parts according to the SKU configuration. If you only need one specific part, print it directly from `Products -> Parts` instead.