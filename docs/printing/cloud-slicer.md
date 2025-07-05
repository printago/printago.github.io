---
sidebar_position: 5
---

# Cloud Slicer

Printago's Cloud Slicer enables on-demand GCODE generation, automatically converting your 3D models into printer-specific instructions when jobs are assigned to printers. This eliminates the need to pre-slice files for every printer/material combination and enables universal slicing profiles across your entire printer fleet.

## How It Works

The Cloud Slicer is triggered automatically by [Gutenb3d](../print-queue-management.md) when a queued job is matched and assigned to a specific printer. This just-in-time approach ensures optimal slicing settings for each printer while maintaining efficient queue processing.

### Slicing Workflow

```mermaid
sequenceDiagram
    participant Queue as Print Queue
    participant Gutenb3d
    participant CloudSlicer as Cloud Slicer
    participant Cache
    participant Printer

    Queue->>Gutenb3d: Job ready for assignment
    Gutenb3d->>Gutenb3d: Match job to available printer
    Gutenb3d->>Cache: Check for cached GCODE
    
    alt Cache Hit
        Cache->>Gutenb3d: Return cached GCODE
    else Cache Miss
        Gutenb3d->>CloudSlicer: Request slice
        CloudSlicer->>CloudSlicer: Resolve profiles
        CloudSlicer->>CloudSlicer: Generate GCODE
        CloudSlicer->>Cache: Store GCODE
        CloudSlicer->>Gutenb3d: Return GCODE
    end
    
    Gutenb3d->>Printer: Send GCODE (packaged as 3MF)
```

## Profile Resolution

When slicing a job, the Cloud Slicer combines multiple profile sources to generate optimal printer-specific GCODE:

### 1. Machine Profile
Defines printer-specific settings synchronized from your [Bambu Lab Integration](./printer-setup/bambu-lab-integration.md):
- Printer model and capabilities
- Bed size and type (Smooth PEI, Textured, etc.)
- Nozzle diameter and configuration
- AMS settings and filament handling

### 2. Process Profile
Determines print quality and behavior settings, resolved in this priority order:
1. **Part-specific override** (if configured on the part)
2. **Printer default process profile** (configured in [Printer Management](./printer-management/printer-management.md))

### 3. Material Profile
Provides material-specific slicing parameters resolved in this priority order:
1. **Material Variant's profile override** (if configured on the color variant)
2. **Material's filament profile** (configured in [Materials](/docs/printing/materials.md))
## Intelligent Caching

The Cloud Slicer implements smart caching to optimize performance and reduce slicing time. If anything on the part, printer, build plate, or related settings changes, it triggers a reslice of the file.

:::tip Cache Benefits
Intelligent caching means identical parts with the same settings slice instantly on subsequent prints, dramatically reducing queue processing time for repeat jobs.
:::

## Slicer Selection

Printago supports multiple slicer engines to accommodate different workflows and preferences:

### Available Slicers
- **OrcaSlicer** (Community-driven) - Open-source with advanced optimization features
- **Bambu Studio** (Official Bambu) - Optimized specifically for Bambu Lab printers
- **PrusaSlicer** (Coming Soon) - Official Prusa Research slicer
- **SuperSlicer** (Coming Soon) - Feature-rich PrusaSlicer fork

### Slicer Configuration
- **Default Slicer**: Set your preferred slicer in [Account Settings](../settings/account-settings.md)
- **Per-Part Override**: Choose specific slicers when adding parts to your library
- **Profile Synchronization**: Managed through the [Bambu Lab Integration](./printer-setup/bambu-lab-integration.md) flow
  - Syncs machine, process, and material profiles from your Bambu account
  - Requires "Cloud Sync" enabled in Bambu Studio or Orca Slicer
  - Profiles refresh when running the integration flow

## GCODE Access

After slicing completes, printer-specific GCODE becomes available:

### Download Method
1. **Print Queue Interface**: Click any job thumbnail → `Download GCODE` button

### File Format
GCODE is packaged as a 3MF file containing:
- Printer-specific GCODE instructions
- Print thumbnails for printer display
- Metadata about slicing settings used

### Slicing Failures
If a job fails during slicing, it moves to the "Errored" tab in the Print Queue. Common causes:
- Part too large for printer bed
- Incompatible material/printer combination
- Missing or corrupted slicer profiles

### Profile Issues
Ensure your slicer profiles are current by running the [Bambu Lab Integration](./printer-setup/bambu-lab-integration.md) flow to refresh synchronized profiles.

Need help? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and support!