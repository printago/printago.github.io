---
sidebar_position: 3
---

# FabMatic Continuous Printing

FabMatic enables your 3D printers to run continuous back-to-back jobs with automated bed clearing. By automating the print removal process, FabMatic maximizes printer efficiency and minimizes manual intervention.

:::info Experimental
FabMatic is currently in `Experimental` phase.  This feature is scheduled to be updated in Febrary 2025.  Users will have a `Scripts` section of Printago, which they can adjust the clearing scipts on-the-fly.  Additionally, Printago will support temperature-based release scripts (no more fuzzy timing and timeouts). 
:::

## Preparing Your Clearing Script

FabMatic requires a clearing script in your printer's end G-code to remove completed prints. You can either:
* Use our template clearing scripts (recommended)
* Create your own custom clearing G-code

:::info
Your clearing script runs after each print to cool the bed and remove the completed part. You may need to adjust these scripts based on your specific parts and printer setup.
:::

## Detailed Setup Process

### Initial Slicer Configuration

1. Open Orca Slicer or Bambu Studio
   * We recommend Orca 2.2 at this time
   * This version matches what our cloud slicer uses
2. Log into the slicer with your Bambu Lab credentials
3. Configure sync settings:
   * Open Preferences
   * Navigate to Presets section
   * Enable "Auto sync user presets"
   * Disable "Stealth Mode"

### Profile Modification

1. From the `Prepare` screen:
   * Select your printer
   * Click the edit button to the right of the printer dropdown
2. In the `Printer Settings` dialog:
   * Click on the Machine G-code tab
   * Locate "Machine end G-code" section
   * For Orca Slicer: Use the edit button for an expanded editor
   * For Bambu Studio: Use the provided text box
3. Find this specific line towards the end of the stock scripts:
    ```gcode
    M400 ; wait all motion done
    ```
4. Insert your clearing script immediately after this line
5. If using Orca's GCode Editor Dialog:
   * Click the OK button to return to main settings
6. In the `Printer Settings` dialog:
   * Click Save
   * Provide a new name for your profile
7. Repeat this entire process for other printer models you wish to enable FabMatic on

### Printago Integration

1. Navigate to one of:
   * Printing -> Printers, select `Configure Bambu Printers` in top right
   * Settings > Integrations, click the Bambu integration button
2. In the Bambu Integration Wizard:
   * Look for your new Printer slicer profiles 
   * They should be marked with "Create"
   * Click next, making any needed changes
3. On the final configuration screen:
   * Select printers to enable FabMatic
   * For each printer, select the slicing profile containing your clearing script
   * Optional: Use "save to all in group" to apply settings to all printers of same model type
4. Complete the wizard

### Enabling FabMatic

1. Return to `Printing > Printers`
   * You can now configure individual printers by selecting them and clicking `Configure`
   * This allows changing slicing profiles per printer
2. From the main Printers page:
   * Use Multi-Select to choose FabMatic printers
   * Check boxes for desired printers
3. Enable FabMatic:
   * Click the Actions dropdown button (top right)
   * Select `FabMatic` -> `Enable`
4. Review and accept terms:
   * Read the disclaimer
   * Check the acceptance box
   * Click `Accept Terms to Enable`

:::note
The disclaimer must be accepted each time you enable FabMatic
:::

5. Verify setup:
   * Return to printers screen
   * FabMatic-enabled printers will be clearly indicated

## Managing FabMatic

### Auto Disable
FabMatic will disable on any printer(s) that have:
   1. Had any HMS Error or Warning. This includes filament runout. 
   2. Printer was used outside of Printago.  This could occur while Printago is awaiting for the bed to cool.
   3. Printer has lost communications to extended period of time, such that Printago cannot ensure its

:::info Re-Enable FabMatic
If any of the above have happened you'll need to re-enable Fabmatic from the `Printers` screen.
:::

### Manual Disable
To disable FabMatic on any printer(s):
1. Use Multi-Select to choose printers
2. Open bulk action menu
3. Select Fabmatic -> Disable

### Updating Clearing Scripts
To make changes to your profile:
1. Modify the gcode in your slicer
2. Sync with Printago to update your clearing script profile

Need help with FabMatic? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help! 