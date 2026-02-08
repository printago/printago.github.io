
# Key Concepts

Understanding these fundamental concepts will help you make the most of Printago's features and capabilities.

## Print Farm as a Service

Traditional 3D print farm management treats printers like individual computers that need constant manual configuration. Printago takes a cloud-first approach, treating your printers as elastic resources that can be dynamically allocated and managed—similar to how cloud providers handle computing resources. No local servers or Raspberry Pis are required; you access your entire farm from anywhere with real-time monitoring, automatic updates, and intelligent job distribution.

:::tip Why This Matters
This approach enables features like automatic printer matching, on-demand slicing, and remote management that wouldn't be possible with traditional printer management methods.
:::

## Parts

A [**part**](/docs/parts/part-management) is an uploaded 3D model file—STL, STEP, 3MF, OpenSCAD, or GCODE—along with its associated printing configuration such as material requirements, slicer process profiles, and build plate settings. Parts are the atomic unit of your print library: every print job in Printago originates from a part. Because Printago slices on demand, a single part file works across every compatible printer in your fleet without needing separate exports for each machine model.

## SKUs (Assemblies)

A [**SKU**](/docs/commerce/sku-management) (Stock Keeping Unit) is synonymous with an **assembly**—a complete, shippable product composed of one or more parts with specific quantities, material configurations, and customization options. While a part represents a single 3D model, a SKU represents the finished product a customer receives. SKUs also serve as the link between your production workflow and your e-commerce storefronts: when an order arrives from Shopify or Etsy, Printago matches the order's SKU identifier to your SKU definitions and automatically generates the correct print jobs. Hobbyist users work with Parts only, while Commercial users have access to both Parts and SKUs.

## Orders

An [**order**](/docs/commerce/orders) represents a customer request containing one or more SKUs with quantities, customer details, and a target fulfillment date. Orders bridge the gap between receiving a customer request and producing the physical parts—they translate "what the customer wants" into actionable print jobs in your queue. Orders can be created manually or automatically through e-commerce integrations, and they track production progress so you can see which requests are complete and which still have jobs in progress.

## Print Queue & Gutenb3d

The [**print queue**](/docs/printing/print-queue) is Printago's central job management system, powered by an intelligent matching engine called **Gutenb3d**. Every print job enters the queue, where Gutenb3d automatically matches it to the best available printer based on material requirements, printer tags, and machine availability. Jobs are matched considering:

- Material type and color requirements
- Printer tags and groupings
- Printer availability (online, not busy, marked "Clear and Ready")
- Nozzle size and printer capabilities

:::info
If a job doesn't match any available printers, it remains in the queue while Printago continues processing other jobs. The system processes jobs from top to bottom, skipping over any that don't have matching printers at that moment.
:::

## Materials

[**Materials**](/docs/printing/materials) represent the filaments loaded in your printers and are the primary factor in how jobs get routed to the right machine. Each material has two layers: a **base material** (like "Bambu PLA Basic") defining the filament type, brand, and slicing profiles, and **variants** (like "Red" or "Matte Black") representing specific colors or finishes. The system supports matching at different levels of specificity—you can require an exact color variant, any color of a particular brand, or any filament of a given type. For Bambu Lab printers with RFID-tagged filament, material detection and assignment happen automatically.

## Slicer Profiles

[**Slicer profiles**](/docs/printing/slicer-profiles) are the collections of print settings—layer height, infill, speed, temperature, and more—that control how your 3D models are converted into G-code. Profiles fall into three categories: **machine profiles** (printer hardware settings), **process profiles** (quality settings like "0.20mm Standard"), and **filament profiles** (material-specific temperatures and flow rates). Printago syncs profiles from your Bambu Lab account or lets you import them from Bambu Studio and OrcaSlicer, so the same profiles you've tuned locally become available fleet-wide.

## Cloud Slicer (On-Demand Slicing)

The [**cloud slicer**](/docs/printing/cloud-slicer) generates G-code on demand rather than requiring pre-sliced files for every printer and material combination. When a job is assigned to a printer, the slicer combines the machine profile from the printer, the filament profile from the matched material, and the process profile from the part (or the printer's default). Results are intelligently cached for instant repeat prints. This means a single uploaded part works on any compatible printer, and updating a profile once automatically affects all future prints that use it.

<a id="printer-bed-size-requirements"></a>

:::note Printer Bed Size Requirements
Currently, Printago doesn't automatically prevent jobs from being sent to printers with insufficient bed size. If a part is too large, the slicer will fail and the job will appear in the "Errored" tab. You can then retry the job on a larger printer.
:::

## Printer Management

[**Printer management**](/docs/printing/printer-management) is how you configure your physical printers to participate in automatic job matching. Each printer needs assigned materials, slicer profiles, and hardware settings (bed type, AMS configuration). Day-to-day operations center on marking printers as "clear and ready" after removing a completed print, swapping materials, and monitoring status. Printers can be organized with **tags** to group them by location, purpose, or any other criteria, and jobs can be routed to specific tag groups.

## Dynamic Models (OpenSCAD)

In addition to traditional 3D model files, Printago supports [dynamic OpenSCAD parts](/docs/parts/openscad/openscad-parts) natively, which are rendered on-demand at the time they're queued. OpenSCAD models can be modified programmatically based on parameters like text for engravings, custom dimensions, feature toggles, and material color. Dynamic models are key to automated customization, allowing you to offer personalized products without manual CAD work.

## FabMatic Continuous Printing

[**FabMatic**](/docs/printing/fabmatic-continuous-printing) is Printago's continuous printing system that enables back-to-back production runs without manual intervention between prints. When enabled, FabMatic automatically sends the next queued job as soon as the current print completes and the bed is cleared via custom end G-code. This turns individual printers into production lines that can work through a queue of jobs unattended—particularly useful for overnight runs or high-volume manufacturing.

## E-Commerce Integrations

Printago connects to e-commerce platforms like [**Shopify**](/docs/integrations/shopify) and [**Etsy**](/docs/integrations/etsy) to automate the flow from customer purchase to production. When a customer buys a product, the integration syncs the order, matches SKU identifiers to your Printago SKU definitions, and optionally queues jobs for production immediately. Combined with SKU Variants, a single product listing with multiple options (color, size, personalization) can automatically produce the correct parts with the correct materials and parameters.
