---
sidebar_position: 1
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
- **SKUs** are products that can contain one or more parts, along with specific printing configurations and customization options

For example, a custom chess set SKU might contain 16 individual chess piece parts, each with their own printing requirements.

## Gutenb3d Smart Queue

The Smart Queue is Printago's intelligent job distribution system. While you can always manually assign jobs to specific printers, Printago can also automatically match prints to printers based on requirements you define:

- Material Type requirements
- Material Color requirements
- Printer capability requirements (e.g. nozzle type/size, bed size)
- Custom tags and groupings, such as "Rack A"

:::info Example
If you have a part that requires red PETG, Printago will automatically queue it to printers that:
1. Support PETG printing
2. Currently have red PETG loaded
3. Match any additional tags or requirements you've specified

You can override this automatic matching at any time by manually assigning jobs to specific printers.
:::

## On-Demand Slicing

Unlike traditional print farm software that requires pre-sliced GCODE files for every printer/material combination, Printago slices models on-demand:

1. Upload your 3D models in standard formats (STL, 3MF, etc.)
2. Configure slicing profiles once
3. Printago handles the rest - generating GCODE specific to each printer when needed

This dynamic approach offers several key advantages:

- **Universal Profiles**: A single profile like "0.16mm with Ironing" works across your entire printer fleet - from Bambu P1 to X1 to A1 Mini (and future non-Bambu printers)
- **Easy Updates**: Change a setting like infill percentage once, and it automatically applies to future prints with that profile applied - no need to re-slice and manage multiple files
- **Less Profile Management**: Instead of creating and maintaining separate profiles for each printer model, define settings once and let Printago handle the printer-specific slicing.

This eliminates the need to maintain large libraries of pre-sliced files and makes it easy to update printing parameters across your entire farm.

## Dynamic Models

Printago supports two types of 3D models:

### Static Models
Traditional 3D model files (STL, 3MF) that represent fixed geometries.

### Dynamic Models
Models defined in OpenSCAD that can be modified programmatically based on parameters:
- Text for engravings
- Custom dimensions
- Feature toggles
- Complex modifications

:::tip
Dynamic models are key to automated customization, allowing you to offer personalized products without manual CAD work.
:::

## Printer Tags

Tags are a flexible way to organize and control your print farm:

- Group printers by location ("Upper Rack", "Workshop B", "Office")
- Organize by purpose ("Customer Orders", "Prototypes", "Personal")
- Define access control ("Student Access", "Staff Only")
- Batch processing ("Overnight Batch", "Weekend Jobs")

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
FabMatic requires specific printer configuration, including custom end GCODE for bed clearing. See our [FabMatic Setup Guide](../advanced-features/fabmatic) for detailed configuration instructions.
:::

## Cloud Architecture

Printago's cloud-first approach provides several advantages:

- No local servers or Raspberry Pis required
- Automatic updates and maintenance
- Access your print farm from anywhere
- Real-time monitoring and alerts
- Automatic scaling and load balancing

:::note Future Concepts
As Printago evolves, we'll add new concepts and capabilities. Keep an eye on our [roadmap](../roadmap) for updates.
:::