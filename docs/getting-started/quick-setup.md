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
Use the `Save to all X printers in this group` option to quickly configure multiple identical printers of the same type at once.
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
      - `Process Profile` to override any printer's process slicer setting

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
   

1. You'll be shown a confirmation screen of the print. Head over to the `Print Queue` to check out the jobs.

   <img src="/img/screenshot_000339.png" width="700" alt="Print Button" />

1. We can see that our items are all queued up successfully, however, there are no jobs `In Progress` yet.  

   Printago ***does not*** take exclusive control of your printers, and you must let us know when the bed is clear and each printer is ready for a print.  Click on `Printers` next.

   <img src="/img/screenshot_000342.png" width="700" alt="" />
   

1. When first connected, all your printers will be `Awaiting clear & ready state`.  
   <img src="/img/screenshot_000344.png" width="700" alt="Queue View" />
1. Click on a printer, and then find and click the `Confirm clear & ready` button in the upper right corner.
   <img src="/img/screenshot_000345.png" width="700" alt="Printer Screen" />
   :::warning Clear & Ready State
   Printers must be marked "Clear & Ready" before they'll accept new jobs. This prevents accidentally starting prints on busy printers.
   :::
1. Head back to the printers page, and use the checkboxes to select the rest of your printers.  Click the multi-action dropdown (`n Printers Select`) -> `Availability` -> `Clear & Ready`.
   <img src="/img/screenshot_000346.png" width="700" alt="Printers Screen" />
1. When you're sure the selected printers, click the confirmation button, and parts will start assigning to your printers instantly!  Head back to the `Print Queue` next.
   <img src="/img/screenshot_000347.png" width="700" alt="Mark Ready" />

1. When you're sure the selected printers are clear, click the confirmation button, and parts will start assigning to your printers instantly!  Head back to the `Print Queue` next.
   <img src="/img/screenshot_000347.png" width="700" alt="Mark Ready" />

## Queue Management

1. Now we can see Printago has sliced the files, sent the files, and the printers have jumped to life.

      <img src="/img/screenshot_000348.png" width="700" alt="Mark Ready" />

  
   

1. From the `In Progress` tab, we can select jobs using the checkboxes.  The multi-action button allows you to `Pause`, `Resume`, and `Cancel` selected jobs.
   <img src="/img/screenshot_000349.png" width="700" alt="Mark Ready" />

 
1. On the `Queued` screen, jobs can be reordered by dragging them to re-order.  Additionally jobs on this screen may be selected and cancelled via the multi-action button.  Jobs in the `Cancelled` or `Errored` tabs may be retried in a similar way, putting those jobs back into to the queue.
   <img src="/img/queue.gif" width="700" alt="Mark Ready" />
   :::tip Queue Processing
      The Printago Queue processes jobs top-to-bottom order.
   :::


**Remember when print finish, to mark the printer as `Clear and Ready`!**

# Thank You and Happy Printing!



