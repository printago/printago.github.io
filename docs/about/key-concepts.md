---
sidebar_position: 2
title: "Key Concepts"
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

- **Parts** are individual 3D models that can be printed. Every user works with parts.
- **SKUs** (Stock Keeping Units) are products that can contain one or more parts, along with specific printing configurations, variants, and customization options. SKUs are a commercial feature.

Hobbyist users will only see "Parts" in their sidebar menu, while Commercial users will see both Parts and SKUs.

:::info Example
A custom chess set SKU might contain 16 individual chess piece parts, each with their own printing requirements and material configurations.
:::

## Gutenb3d Smart Queue

The Smart Queue is Printago's intelligent job distribution system. While you can always manually assign jobs to specific printers, Printago can also automatically match prints to printers based on requirements you define:

- Material type requirements
- Material color requirements
- Printer capability requirements (nozzle type/size)
- Custom tags and groupings (e.g., "Rack A", "Customer Orders")
- Bed size (coming soon)

:::info How Matching Works
If you have a part that requires Bambu Red PETG-HF, Printago will automatically match the job to printers that:
1. Currently have Red PETG-HF loaded
2. Match any tags you specify when adding the part to the queue
3. Are online, not busy, and marked as "Clear and Ready"

Jobs that don't match any available printer remain in the queue. The system processes from top to bottom, skipping over unmatched jobs while continuing to dispatch matched ones.
:::

## On-Demand Slicing

Unlike traditional print farm software that requires pre-sliced GCODE files for every printer/material combination, Printago slices models on-demand:

1. Upload your 3D models in standard formats (STL, 3MF, STEP, etc.)
2. Configure slicing profiles once at the part level or printer level
3. Configure which materials and color variants the part should be allowed to print in
4. Printago generates printer-specific GCODE when a job is dispatched

**Key advantages:**

- **Universal Profiles** - A single profile works across your entire fleet (P1, X1, A1 Mini, and future non-Bambu printers)
- **Easy Updates** - Change infill percentage once and it applies to all future prints using that profile
- **Less Profile Management** - No need to maintain separate profiles for each printer model

<a id="printer-bed-size-requirements"></a>

:::note Printer Bed Size Requirements
Currently, Printago doesn't automatically prevent jobs from being sent to printers with insufficient bed size. If a part is too large, the slicer will fail and the job will appear in the "Failed" tab. You can then retry on a larger printer.
:::

## Dynamic Models (OpenSCAD)

Printago supports OpenSCAD parts natively, rendered on-demand at queue time. Parameters can be modified programmatically:

- Text for engravings
- Custom dimensions
- Feature toggles
- Material color assignments

:::tip
Dynamic models are key to automated customization, allowing you to offer personalized products without manual CAD work for each order.
:::

## Material Management

Printago's material system ensures parts are printed with the right materials:

- **Material Library** - Define filament types (PLA, PETG, TPU, etc.), brands, and color variants
- **Profile Assignment** - Assign slicing profiles per material, per printer model
- **Smart Matching** - Automatically route jobs to printers with the correct material loaded
- **AMS Detection** - Auto-detect materials via Bambu Lab's RFID system

## Printer Tags

Tags provide flexible organization and routing control for your print farm:

- Group printers by location ("Upper Rack", "Workshop B", "Office")
- Organize by purpose ("Customer Orders", "Prototypes", "Personal")
- Route jobs to specific groups by requiring tags when printing

:::info Dynamic Organization
You can add or remove tags from printers even while jobs are queued. Parts and SKUs can be configured to require specific tags, ensuring they're only printed on appropriate printers.
:::

## FabMatic Continuous Printing

FabMatic is Printago's system for automated, continuous production. When configured with appropriate end G-code, your printers can:

1. Automatically start new jobs when previous prints complete
2. Execute bed-clearing sequences between prints
3. Manage print bed preparation between jobs
4. Handle basic error recovery and retries

:::warning
FabMatic requires specific printer configuration, including custom end G-code for bed clearing. See the [FabMatic Setup Guide](/docs/printing/fabmatic-continuous-printing) for detailed instructions.
:::

## Cloud Architecture

Printago's cloud-first approach provides:

- No local servers or Raspberry Pis required
- Automatic updates and maintenance
- Access your print farm from anywhere
- Real-time monitoring and alerts
- Automatic scaling and load balancing

---

## Related Pages

- [Quick Start Guide](/docs/getting-started/quick-start-guide) - Get up and running
- [Materials](/docs/printing/materials) - Deep dive into material management
- [Print Queue](/docs/printing/print-queue-management) - How the smart queue works in practice
- [Printer Tags](/docs/printing/printer-management/printer-tags) - Organizing your fleet
