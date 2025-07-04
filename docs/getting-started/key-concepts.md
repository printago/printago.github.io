---
sidebar_position: 3
---

# Key Concepts

Understanding these fundamental concepts will help you make the most of Printago's features and capabilities.

## Print Farm as a Service

Traditional 3D print farm management treats printers like individual computers that need constant manual configuration. Printago takes a cloud-first approach, treating your printers as elastic resources that can be dynamically allocated and managed - similar to how cloud providers handle computing resources.

:::tip Why This Matters
This approach enables features like automatic printer matching, dynamic scaling, and remote management that wouldn't be possible with traditional printer management methods.
:::

## Parts vs SKUs

In Printago, we make an important distinction between Parts and SKUs:

- **Parts** are individual 3D models that can be printed
- **SKUs** are products that can contain one or more parts, along with specific printing configurations and customization options.  Hobbyist users will only see "Parts" in their sidebar menu, while Commerical users will see both Parts and SKUs.

For example, a custom chess set SKU might contain 16 individual chess piece parts, each with their own printing requirements.

## Gutenb3d Smart Queue

The Smart Queue is Printago's intelligent job distribution system. While you can always manually assign jobs to specific printers, Printago can also automatically match prints to printers based on requirements you define:

- Material Type requirements
- Material Color requirements
- Printer capability requirements (e.g. nozzle type/size)
- Custom tags and groupings, such as "Rack A"
- Bed Size ([coming soon](#printer-bed-size-requirements)) 

:::info Example
If you have a part that requires Bambu Red PETG-HF, Printago will automatically match the job to printers that:
1. Currently have Red PETG-HF loaded
2. Match any tags you specify when adding the part to the global queue.  
3. Are available to Printago, online, not busy, and set in Printago as "Clear and Ready" for a job.

If a part doesn't match any available printers, it will remain in the queue while Printago continues processing other jobs. The system processes jobs from top to bottom, but will skip over any jobs that don't have matching printers available at that moment.
:::

## On-Demand Slicing

Unlike traditional print farm software that requires pre-sliced GCODE files for every printer/material combination, Printago slices models on-demand:

1. Upload your 3D models in standard formats (STL, 3MF, etc.)
2. Configure `Process` slicing profiles once at the part-level or the printer-level.  
3. Configure which materials & color variants the part should be allowed to print in.
3. Printago handles the rest - generating GCODE specific to each printer when needed

This dynamic approach offers several key advantages:

- **Universal Profiles**: A single profile like "0.16mm with Ironing" works across your entire printer fleet - from Bambu P1 to X1 to A1 Mini (and future non-Bambu printers)
- **Easy Updates**: Change a setting like infill percentage once, and it automatically applies to future prints with that profile applied - no need to re-slice and manage multiple files
- **Less Profile Management**: Instead of creating and maintaining separate profiles for each printer model, define settings once and let Printago handle the printer-specific slicing.
<a id="printer-bed-size-requirements"></a>
This eliminates the need to maintain large libraries of pre-sliced files and makes it easy to update printing parameters across your entire farm.


:::note Printer Bed Size Requirements
Currently, Printago doesn't automatically prevent jobs from being sent to printers with insufficient bed size. If a part is too large for a printer, the slicer will fail and the job will appear in the "Failed" tab. You can then retry the job on a larger printer. Common examples include:
- Printing an X1/P1-sized part on an A1 Mini
- Printing an A1-sized part that doesn't account for the X/P series' filament cutter exclusion zone
:::

## Dynamic Models

In addition to traditional 3D model files (STL, STEP, 3MF, 3MF.GCODE) Printago supports dynamic OpenSCAD parts natively, which are rendered on-demand at the time they're queued.

Models defined in OpenSCAD that can be modified programmatically based on parameters:
- Text for engravings
- Custom dimensions
- Feature toggles
- Material color

:::tip
Dynamic models are key to automated customization, allowing you to offer personalized products without manual CAD work.
:::

## Material Management

Printago provides powerful material management to ensure your parts are printed with the right materials:

- **Material Library**: Define and manage all your filament types (PLA, PETG, TPU, etc.), brands, and variants (colors)
- **Assign Profiles**: For each material, assign slicing profiles for each printer type in your farm.
- **Smart Matching**: Automatically route jobs to printers with the correct material loaded
- **Inventory Tracking**: Monitor material usage and remaining quantities (coming soon!)

Each part can specify required material properties, and Printago will ensure it's only printed on compatible printers with the correct material loaded.

## Printer Tags

Tags are an additional way to organize and control your print farm:

- Group printers by location ("Upper Rack", "Workshop B", "Office")
- Organize by purpose ("Customer Orders", "Prototypes", "Personal")


:::info Dynamic Organization
Parts can be queued to any group of tagged printers (e.g., "Production"), and you can add or remove tags from printers even while jobs are queued. This gives you flexible control over your print farm's organization.
:::

Parts and SKUs can be configured to require specific tags, ensuring they're only printed on appropriate printers.

## FabMatic Continuous Printing

FabMatic is Printago's system for automated, continuous production. When properly configured with appropriate end GCODE, your printers can:

1. Automatically start new jobs when previous prints complete
2. Execute bed-clearing sequences between prints
3. Manage print bed preparation between jobs
4. Handle basic error recovery and retries

:::warning
FabMatic requires specific printer configuration, including custom end GCODE for bed clearing. See our [FabMatic Setup Guide](../printing/advanced-printing/fabmatic-continuous-printing) for detailed configuration instructions.
:::

## Cloud Architecture

Printago's cloud-first approach provides several advantages:

- No local servers or Raspberry Pis required
- Automatic updates and maintenance
- Access your print farm from anywhere
- Real-time monitoring and alerts
- Automatic scaling and load balancing
