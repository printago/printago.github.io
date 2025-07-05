---
sidebar_position: 3
---

# FabMatic Continuous Printing

FabMatic enables automated continuous printing by running back-to-back jobs with automatic bed clearing between prints. This maximizes printer efficiency and reduces manual intervention for production workflows.

:::warning Experimental Feature
FabMatic is currently experimental and scheduled for major updates in **February 2025**, including temperature-based release scripts to replace timing-based clearing.
:::

## How FabMatic Works

1. **Print Completion**: Your printer finishes a job normally
2. **Bed Clearing**: Custom end G-code cools the bed and removes the completed part
3. **Next Job**: Printago automatically starts the next queued job
4. **Continuous Operation**: Process repeats until the queue is empty

## Setup Overview

FabMatic setup involves three main steps:
1. **Create clearing profiles** in your slicer with bed-clearing G-code
2. **Sync profiles** to Printago via Bambu Integration
3. **Enable FabMatic** on desired printers

## Step 1: Create Clearing Profiles

### Modify Your Slicer Profile

1. **Open your slicer** (Orca Slicer or Bambu Studio)
2. **Select your printer** and edit the printer settings
3. **Navigate to Machine G-code tab**
4. **Locate "Machine end G-code"** section
5. **Find this line** near the end of the existing script:
   ```
   M400 ; wait all motion done
   ```
6. **Insert your clearing script** after that line
7. **Save with a new name** (e.g., "X1C - FabMatic Clearing")
8. **Repeat for each printer model** you want to use with FabMatic

:::tip Profile Naming
Use clear names like "A1 Mini - FabMatic" to easily identify clearing profiles during setup.
:::

## Step 2: Sync Profiles to Printago

1. **Enable profile sync** in your slicer:
   - Open Preferences → Presets
   - Enable "Auto sync user presets"

2. **Run Bambu Integration** in Printago:
   - Go to **Printing → Printers** → `Configure Bambu Printers`
   - Or **Settings → Integrations** → Bambu Lab

3. **Select your clearing profiles**:
   - Your new profiles will appear marked "Create"
   - Choose the appropriate clearing profile for each printer
   - Use "Save to all in group" for identical printer models

4. **Complete the integration flow** to sync profiles

## Step 3: Enable FabMatic

1. **Configure printer profiles**:
   - Go to **Printing → Printers**
   - Select a printer → `Slicing Configuration`
   - Choose your FabMatic clearing Machine profile
   - Save settings

2. **Enable FabMatic**:
   - Select printers using checkboxes
   - Click **Actions** → **FabMatic** → **Enable**
   - Read and accept the disclaimer
   - Verify FabMatic indicators appear on enabled printers

:::caution Safety Disclaimer
You must accept the safety disclaimer each time you enable FabMatic. Continuous printing requires proper supervision and safety precautions.
:::

## Managing FabMatic

### Automatic Disable
FabMatic automatically disables when:
- **HMS errors or warnings** occur (including filament runout)
- **External printer use** is detected (via slicer, Handy app, etc.)
- **Communication loss** prevents Printago from monitoring printer state

### Manual Control
**To disable FabMatic**:
1. Select printers with checkboxes
2. **Actions** → **FabMatic** → **Disable**

**To re-enable after auto-disable**:
1. Resolve the underlying issue
2. Follow the enable process again

### Updating Clearing Scripts
1. **Modify G-code** in your slicer
2. **Sync profiles** via Bambu Integration
3. **Update printer configuration** if needed

## Troubleshooting

### Common Issues
- **Parts not releasing**: Adjust bed cooling temperature/time in your script
- **FabMatic keeps disabling**: Check for HMS warnings or external printer usage
- **Profile not syncing**: Ensure "Auto sync user presets" is enabled in slicer

### Getting Help
Join our [Discord community](https://discord.gg/RCFA2u99De) for FabMatic support and to share clearing scripts with other users! 