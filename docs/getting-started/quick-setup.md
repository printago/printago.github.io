---
sidebar_position: 2
---

# Quick Start Guide

Get up and running with Printago in minutes. This guide walks you through the essential setup and your first print job.

## Before You Begin

:::important Prerequisites
Before starting with Printago, ensure you have:
1. Completed initial setup of your Bambu Lab printer(s)
2. Paired your printer(s) with your Bambu Cloud account
3. Enabled cloud profile syncing in your slicer  
:::

### Enable Cloud Profile Sync


Printago imports and syncs your slicing profiles from your Bambu Lab Account.  Want to change a slicing setting for all your parts? Or add a new printer model to your fleet and don't feel like slicing all your models for that printer?  Printago allows you to assign slicing profiles to ***parts***, all the slicing happens in the background automatically and on-demand!

<img src="/img/orca-sync-preferences.png" width="500" alt="Orca Sync Preferences" />

In Orca Slicer or Bambu Studio:
1. Open Preferences
2. Navigate to Presets section
3. Enable "Auto sync user presets"


## Adding Your Printers & Profiles

:::tip Bulk Import
Printago imports all your Bambu Lab printers at once - no need to add them individually!
:::
1. Navigate to `Printers` in the sidebar
2. Click `Configure Bambu Printers`
   <img src="/img/screenshot_000321.png" width="600" alt="Blank Printers Screen" />
3. Enter your Bambu Cloud credentials and complete Bambu's 2-Factor authentication as prompted
   <img src="/img/screenshot_000322.png" width="600" alt="Enter Bambu Lab Credentials" />
4. After authentication, you'll be taken through a short, two-step wizard allowing you to select which 3d printers to pair and profiles to import.

   :::tip Free Unlimited Printers
   Printago allows you to connect and use unlimited printers - free!  
   :::
   <img src="/img/screenshot_000323.png" width="600" alt="Bambu Lab Connected Printers" />
   <img src="/img/screenshot_000324.png" width="600" alt="Slicing Profiles" />

## Configuring Printer Defaults

5. On the final screen of the Bambu Wizard, printers slicing configuration must be set.  Familiar dropdown boxes will allow you to set a profile for `Printer`, `Filament`, and `Process`.

   <img src="/img/screenshot_000325.png" width="600" alt="Printer List" />
   Printago uses these settings for slicing and material matching. 
   <img src="/img/screenshot_000326.png" width="600" alt="Printer Config" />
   
All printago parts are sliced on-demand as needed based on your printer and part configurations.

:::tip Bulk Configuration
Use the `Save to all X printers in this group` option to quickly configure multiple identical printers of the same time at once.
:::
## Creating Your First Print

For your first print, we suggest an STL file to learn how Printago slices and prints files.

   :::info File Support
   Printago supports STL, STEP, 3MF, and OpenSCAD part types. 

   ***`.gcode` and `.gcode.3mf` are not supported.***
   :::

6. Go to Products → Parts, and click `Add Part`

   <img src="/img/screenshot_000328.png" width="700" alt="Part Screen" />
7. Upload your file and give it a name and description.  

   Optionally you can set:
      - `Filament Type` to restrict the part to only printing on printers with certain materials (e.g. PLA, ABS)
      - `Process Profile` to override any printer's process slicer setting, with this

8. Click `Create` and our part will be saved and ready for printing!   
   <img src="/img/screenshot_000329.png" width="700" alt="Part Config" />

## Starting Prints

<!-- ![Print Dialog](./img/print-dialog.png) -->

9. After saving your part, you'll be brought back to the parts list.  Find your part, and click it.

   <img src="/img/screenshot_000330.png" width="700" alt="Find Part" />
   
1. From this screen you can edit the part or print it.  Click `Print` button in the upper right.
   <img src="/img/screenshot_000331.png" width="700" alt="Part" />

1. To get going quickly, we can select `Next Available Printer`.  This will print the part to any printers that match the part's criteria.  You can also select a specific printer.  

   [Printer with Specific Tags](../advanced-features/printer-user-tags) allows you to print to a dynamically defined group of printers.  
   <img src="/img/screenshot_000332.png" width="450" alt="Part" />

   :::info Printer Matching
   Printago automatically matches parts to compatible printers based on requirements like material type, nozzle size, and user-defined tags.
   :::
1. Type a quantity any click `Print`!
   <img src="/img/screenshot_000338.png" width="400" alt="Print Button" />
   

1. 
## Queue Management

<!-- ![Print Queue Overview](./img/print-queue.png) -->

### Basic Operations

- Select jobs using checkboxes
- Use bulk actions menu for multiple jobs
- Drag and drop to reorder priority

### Available Actions

1. **Pause Jobs**
   - Temporarily halt selected prints
   - Maintains queue position

2. **Resume Jobs**
   - Continue paused prints
   - Respects queue order

3. **Cancel Jobs**
   - Remove jobs from queue
   - Cannot be undone

:::warning Clear & Ready State
Printers must be marked "Clear & Ready" before they'll accept new jobs. This prevents accidentally starting prints on busy printers.
:::

## Next Steps

Join our Discord community to learn about advanced features:
- Parts and SKUs management
- Customization workflows
- FabMatic continuous printing
- Multi-printer management

:::tip Getting Help
Need assistance? Our Discord community is the fastest way to get help and learn from other users.
:::
