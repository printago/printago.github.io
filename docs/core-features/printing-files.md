---
sidebar_position: 3
---

# Printing Files

Printago makes printing Parts and SKUs straightforward, whether you're printing a single part or a complex product with multiple components.

## Overview

You can print from either Parts or SKUs:
- Parts represent individual 3D models ready for printing
- SKUs are collections of parts that make up complete products
- Both support quantity settings and OpenSCAD parameters
- Both use the same printer assignment options

```mermaid
sequenceDiagram
   participant ECommerce as "E-Commerce (Coming Soon)"
   participant Printago
   participant OpenSCAD
   participant CloudSlicer
   participant Gutenb3d
   participant Printer
   participant Cache

   rect rgba(128, 128, 128, 0.1)
       Note over ECommerce,Printago: Order Processing (Future Integration)
       ECommerce->>Printago: New order detected
       Note over ECommerce,Printago: Future automated integration with<br/>e-commerce platforms
       Printago->>Printago: Break down SKUs into parts
   end

   rect rgba(128, 128, 128, 0.1)
       Note over Printago,OpenSCAD: Part Generation
       alt is SCAD Part
           Printago->>Printago: Get parameters
           Note over Printago: Currently manual input<br/>Future: E-commerce driven
           Printago->>OpenSCAD: Generate with parameters
           OpenSCAD->>Printago: Return STL
       else is STL/STEP Part
           Note over Printago: Use existing geometry
       end
   end

   rect rgba(128, 128, 128, 0.1)
       Note over Printago,Printer: Print Processing
       Printago->>Gutenb3d: Queue part for printing
       Gutenb3d->>Gutenb3d: Match with available printer
       
       Gutenb3d->>Cache: Check for cached GCODE
       alt Cache Hit & Valid
           Cache->>Gutenb3d: Return cached GCODE
       else Cache Miss or Invalid
           Gutenb3d->>CloudSlicer: Request slice
           CloudSlicer->>CloudSlicer: Generate GCODE
           CloudSlicer->>Cache: Store GCODE
           CloudSlicer->>Gutenb3d: Return GCODE
       end
       
       Gutenb3d->>Printer: Send GCODE
       Printer->>Gutenb3d: Print status updates
       Printer-->>Gutenb3d: Print complete
       Gutenb3d->>Printago: Update job status
   end

   rect rgba(128, 128, 128, 0.1)
       Note over Printago: Job Completion
       Printago->>Printago: Move to Completed queue
   end
```

## Starting a Print

### From Parts
1. Navigate to `Products -> Parts`
2. Find your part and click the <img src="/img/screenshot_000398.png" width="85" alt="print sku" /> button.
    
3. Set quantity and any OpenSCAD parameters
4. Choose printer assignment method

### From SKUs
1. Navigate to `Products -> SKUs`
2. Locate your SKU and click `Print`
3. Expand each part's section to:
   - Set quantities
   - Configure OpenSCAD parameters
   - Preview customizations
<img src="/img/sku_print.gif" width="650" alt="print sku" />

:::info OpenSCAD Parameters
Parts using OpenSCAD display parameter inputs based on how they're configured in the SKU. See [SKU Management](./file-management/sku-management.md) for details on parameter configuration.
:::

## Printer Assignment

When starting a print, you can target specific printers or let Printago handle printer selection automatically. Every print job enters the Print Queue, and starts when matching printers become available.

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
- [Learn more about Printer Tags](../advanced-features/printer-user-tags.md)

:::warning AMS Printing
Multi-color is Coming Soon! Until then, printers with the `Use AMS` checkbox selected will feed from `Slot 1` (left-most) AMS slot.
:::

## Next Steps

- [Gutenb3d Smart Queue Management](../core-features/smart-queue.md)
- [On-Demand Cloud Auto-Slicer](../core-features/cloud-slicer.md)
- [Printer Tags](../advanced-features/printer-user-tags.md)

Join our [Discord community](https://discord.gg/RCFA2u99De) for help or reach us at support@printago.io