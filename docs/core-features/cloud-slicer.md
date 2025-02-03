---
sidebar_position: 5
---

# Cloud Slicer

Printago's cloud slicer converts your 3D models into printer-ready instructions automatically. By handling slicing in the cloud, we eliminate the need to maintain local slicer configurations across multiple machines.

## Overview

Cloud Slicer automatically generates printer-specific GCODE when jobs are assigned through Gutenbed, eliminating manual slicing and ensuring consistent print settings across the printer fleet.  Use the [Bambu Integration Wizard](../core-features/printer-connectivity/bambu-lab-integration.md) to keep your slicing profiles in sync from Orca Slicer or Bambu Studio.

- Powered by Orca Slicer 2.2
- Future migration path to Bambu Studio under evaluation

## Core Functionality

### Integration with Gutenbed
Cloud Slicer is tightly integrated with [Gutenbed](./gutenbed.md) to provide real-time slicing capabilities as print jobs are assigned to printers within the network.

### Slicing Process
When a part is assigned to a printer:

1. **Profile Resolution**
    - Uses configured Printer, Filament, and Process slicing profiles
  
2. **Override Processing** 
    - Checks for Part Override Process file
    - Applies overrides if present
    - Part overrides take precedence over defaults

3. **GCode Generation**
    - Executes slicing operation
    - Stores result in cache
    - Gcode is packages in 3MF with thumbnails for printing.

## Caching System

### Strategy
Implements intelligent caching to optimize performance and caches GCode for each unique combination of:
    - Part geometry
    - Printer profile
    - Material profile 
    - Process settings
    - Override configuration

### Invalidation 
Cache entries automatically refresh when:
- Slicer configurations change
- Printer profiles update
- Part geometries modify

## GCODE Access

GCODE files can be downloaded from any active job:

1. Click job thumbnail in interface
2. Use `Download GCode` button
3. Receive printer-specific GCODE file

## Technical Benefits

- Decouples process settings from printer models
- Enables version control of parts instead of GCODE
- Maintains consistent print settings
- Supports flexible printer assignment

Need help? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!