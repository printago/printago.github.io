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

![Orca Sync Preferences](../../static/img/orca-sync-preferences.png)
In Orca Slicer or Bambu Studio:
1. Open Preferences
2. Navigate to Presets section
3. Enable "Auto sync user presets"


## Adding Your Printers & Profiles

:::tip Bulk Import
Printago imports all your Bambu Lab printers at once - no need to add them individually!
:::
![Blank Printers Screen](../../static/img/screenshot_000321.png)
1. Navigate to `Printers` in the sidebar
2. Click `Configure Bambu Printers`
![Enter Bambu Lab Credentials](../../static/img/screenshot_000322.png)
3. Enter your Bambu Cloud credentials and complete Bambu's 2-Factor authentication as prompted

:::tip Free Unlimited Printers
Printago allows you to connect and use unlimited printers - free!  
:::
5. After authentication, you'll be taken through a short, two-step wizard allowing you to select which 3d printers to pair and profiles to import.
![Bambu Lab Connected Printers](../../static/img/screenshot_000323.png)
![Slicing Profiles](../../static/img/screenshot_000324.png)

## Configuring Printer Defaults

Next we'll setup our printers configuration for slicing.  Familiar dropdown boxes will allow you to set a profile for `Printer`, `Filament`, and `Process`.

![Slicing Profiles](../../static/img/screenshot_000325.png)
Printago uses these settings for slicing and material matching. 
![Slicing Profiles](../../static/img/screenshot_000326.png)

All printago parts are sliced on-demand as needed based on your printer and part configurations.

:::tip Bulk Configuration
Use the `Save to all X printers in this group` option to quickly configure multiple identical printers of the same time at once.
:::
## Creating Your First Print

:::info File Support
Printago accepts 3MF, STL, STEP, OpenSCAD 
:::

<!-- ![Add Part Screen](./img/add-part.png) -->

1. Go to Products → Parts
2. Click "Add Part"
3. Upload your file
4. Configure basic settings:
   - Name
   - Allowed filaments
   - Process profile

## Starting Prints

<!-- ![Print Dialog](./img/print-dialog.png) -->

### Printer Selection Options

- **Automatic**: Next available matching printer
- **Tagged**: Printers with specific tags
- **Manual**: Select specific printers

:::info Printer Matching
Printago automatically matches parts to compatible printers based on requirements like material type, nozzle size, and tags.
:::

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