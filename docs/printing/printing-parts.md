---
sidebar_position: 4
---

# Printing Parts

This page covers how to print parts from your library.  To learn more about how to add and manage parts, check out [Parts Management](/docs/products/part-management.md)

## Starting a Print

### Single Part Printing
1. Navigate to `Products -> Parts`
2. Find your part and click the `Send to Queue` button
3. Configure your print settings:
   - Set quantity
   - Configure OpenSCAD parameters (if applicable)
   - Select material (the part's default material may be overridden)
   - **Priority**: Use the toggle button to the left of "Send to Queue" to mark jobs as low priority (optional)
4. Choose printer [Assignment Method](#assignment-methods)

### **Queue Priority Options**
- **Normal Priority** (default): Jobs process immediately when printers are available
- **Low Priority**: Jobs only process when no normal priority jobs are waiting

After queuing, job priority can be adjusted from the [Print Queue Management](/docs/print-queue-management.md) interface.


### STL Parts
<img src="/img/printing/part_printing_stl.png" width="550" alt="STL part printing" />

STL parts are ready to print with quantity and material selection.


### 3MF Files
When printing 3MF files:
- Select which build plates to print from the available options
- Toggle between "editing each" and "editing all" modes
- In "editing all" mode, changing one build plate's quantity adjusts all build plates proportionally
<div className="margin-left--sm">
<img src="/img/printing/part_printing_2.png" width="400" alt="3MF part printing" />
</div>

### OpenSCAD Parts (.scad)
<img src="/img/printing/part_printing_scad.png" width="500" alt="OpenSCAD part printing" />

OpenSCAD parts display parameter inputs for customization before printing.



### Bulk Printing
You can select multiple parts and print them together:

1. Select multiple parts using checkboxes
2. Choose `Print` from the Bulk Actions menu
<div className="margin-left--lg">
<img src="/img/printing/part_printing_bulk_1.png" width="400" alt="bulk printing selection" />
</div>
3. A dialog opens with each selected part in an accordion format
4. Configure each part individually:
   - Set quantities
   - Adjust parameters
   - Select materials
<div className="margin-left--lg">
<img src="/img/printing/part_printing_bulk_2.png" width="400" alt="bulk printing dialog" />
</div>
## Printer Assignment

When starting a print, you can target specific printers or let Printago handle printer selection automatically. Every print job enters the Print Queue, and starts when matching printers become available.
1. Search for Individual Printers
2. Automatic Assignment
3. Individual Printer List
<img src="/img/printing/part_printing_1.png" width="550" alt="part printing dialog" />
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

### State Diagram
The following diagram shows the part printing flow.
```mermaid
sequenceDiagram
   participant User
   participant Printago
   participant OpenSCAD
   participant CloudSlicer
   participant Gutenb3d
   participant Printer
   participant Cache

   rect rgba(128, 128, 128, 0.1)
       Note over User,Printago: Part Selection & Configuration
       User->>Printago: Select part(s) to print
       User->>Printago: Configure quantity & parameters
       alt Material Override
           User->>Printago: Select different material
       end
   end

   rect rgba(128, 128, 128, 0.1)
       Note over Printago,OpenSCAD: Part Processing
       alt is SCAD Part
           Printago->>OpenSCAD: Generate with parameters
           OpenSCAD->>Printago: Return STL
       else is STL/STEP Part
           Note over Printago: Use existing geometry
       else is G-code
           Note over Printago: Use existing G-code
       else is 3MF
           Note over Printago: Extract build plates
           User->>Printago: Select build plates to print
       end
   end

   rect rgba(128, 128, 128, 0.1)
       Note over Printago,Printer: Print Processing
       Printago->>Gutenb3d: Queue part for printing
       Gutenb3d->>Gutenb3d: Match with available printer
       
       alt Needs Slicing
           Gutenb3d->>Cache: Check for cached GCODE
           alt Cache Hit & Valid
               Cache->>Gutenb3d: Return cached GCODE
           else Cache Miss or Invalid
               Gutenb3d->>CloudSlicer: Request slice
               CloudSlicer->>CloudSlicer: Generate GCODE
               CloudSlicer->>Cache: Store GCODE
               CloudSlicer->>Gutenb3d: Return GCODE
           end
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

## Next Steps

After printing parts, they are added to the print queue where they are matched with available printers. For more information about how parts are matched with printers and queue management, see [Print Queue Management](../print-queue-management.md).
