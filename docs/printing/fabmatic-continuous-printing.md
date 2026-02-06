---
sidebar_position: 7
---

# FabMatic Continuous Printing

FabMatic enables automated continuous printing by running back-to-back jobs with automatic bed clearing between prints. This maximizes printer efficiency and reduces manual intervention for production workflows.

:::warning Experimental Feature
FabMatic is currently experimental and scheduled for major updates in **February 2025**, including temperature-based release scripts to replace timing-based clearing.
:::

## Key Concepts

- **Bed Clearing**: Custom end G-code cools the bed and ejects the completed part so the next job can start automatically
- **End G-code**: The clearing script is inserted into a Machine profile's "Machine end G-code" section in your slicer, then synced to Printago
- **Clearing Profiles**: Dedicated slicer Machine profiles (e.g., "X1C - FabMatic Clearing") that contain the bed-clearing G-code -- one per printer model
- **Material Considerations**: PLA is recommended for auto-ejection; PETG has too much bed adhesion and is better suited for manual clearing or plate-changer systems
- **Safety Circuit Breaker**: FabMatic automatically disables on any interruption (HMS error, network loss, external printer use) to prevent unattended operation during problems
- **Semi-Automatic Mode**: A PAUSE command alternative for materials or parts that don't auto-eject well -- the printer pauses between jobs for manual bed clearing

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

## G-code Examples & Strategies

### Basic End G-code Templates for Bambu

Example G-code templates are available in the Printago Discord pinned under #community-support.

### Time-Based Cooling

Adds commands to pause the printer while the bed cools.

**In END G-code**:
- Uses `M190` commands to wait for specific bed temperatures
- May wait longer than necessary on cool days
- May not wait long enough on hot days or with high ambient temps

### Semi-Automatic: PAUSE Command Method

For operations where full automation isn't ready or suitable:

**Add to START G-code**:
```gcode
M400 ; wait for motion to complete
M1 ; pause and wait for user
```

**Workflow**:
1. First print: Printer pauses before/after heating bed
2. Manual: Press resume button on printer to start
3. After print: Manually clear bed
4. Press resume: Next job automatically starts
5. Repeat from step 3

**Benefits**:
- No complex clearing G-code needed
- Good for PETG or difficult-to-eject parts
- "Auto-ejection via person" approach
- Still reduces manual job assignment

## Material Considerations

### PLA (Recommended for Auto-Ejection)
- **Best material for FabMatic** with auto-ejection
- Releases well from bed when cooled to 28-30°C
- Works with most geometries
- Fast cooling times

### PETG (Challenging)
- **Not recommended for auto-ejection**
- Very high bed adhesion - doesn't release easily
- May damage parts or printer when attempting ejection
- Better suited for:
  - Plate changer systems (Jobox)
  - Manual clearing with PAUSE method
  - Tall/skinny parts with good leverage (test carefully)

### Part Geometry Impact

**Good for Auto-Ejection**:
- Tall, skinny parts (good leverage)
- Parts with smooth bottoms
- Parts that naturally want to release from bed

**Difficult for Auto-Ejection**:
- Short, wide parts (little leverage)
- Parts with high surface area on bed
- Parts with textured bottom surfaces
- Parts with brims or skirts still attached

### Humidity & Environmental Factors

- High humidity (>60%) can affect print quality and cooling
- Room dehumidifiers recommended for print farms
- Target 40-50% humidity for best results
- Humid environments may require longer cooling times

## Managing FabMatic

### Automatic Disable
FabMatic automatically disables when:
- **HMS errors or warnings** occur (including filament runout, dirty camera, etc.)
- **External printer use** is detected (via slicer, Handy app, etc.)
- **Communication loss** prevents Printago from monitoring printer state

### Manual Control
**To disable FabMatic**:
1. Select printers with checkboxes
2. **Actions** → **FabMatic** → **Disable**

**To re-enable after auto-disable**:
1. Resolve the underlying issue
2. Follow the enable process again
3. Accept the safety disclaimer

:::caution Safety Circuit Breaker
FabMatic acts like a circuit breaker - any interruption (printer panel use, Handy app, HMS error, communication loss) will trip it off. This is a safety feature to prevent unattended operation during problems.
:::

### Updating Clearing Scripts
1. **Modify G-code** in your slicer
2. **Close Bambu Studio/Orca Slicer completely** (important for reliable sync)
3. **Sync profiles** via Bambu Integration
4. **Update printer configuration** if needed

:::tip Profile Sync Quirks
Bambu Studio has quirks with updating profiles. Always close the slicer after making changes before syncing to Printago for most reliable results.
:::
## Troubleshooting

### FabMatic Keeps Disabling
**Symptoms**: FabMatic automatically turns off after running for a while

**Common Causes**:
- **HMS errors**: Check printer display for any warnings (even minor ones like dirty camera)
- **Network issues**: Unstable Wi-Fi causing communication loss with Printago

**Solutions**:
- Clear all HMS errors before re-enabling
- Improve network stability (wired connection if possible)
- Keep adequate filament loaded

### Profile Not Syncing
**Symptoms**: New profiles don't appear in Printago, changes not reflected

**Solutions**:
1. **Enable auto-sync**: Preferences → Presets → "Auto sync user presets"
2. **Close slicer completely**: Bambu Studio has quirks - always close after editing
3. **Wait a moment**: Give Bambu's cloud sync 30 seconds to complete
4. **Re-run integration**: Settings → Integrations → Bambu Lab → Configure
5. **Check profile name**: Ensure you saved with a new name (not overwritten system profile)

## FAQ

**Q: Does FabMatic work with PETG?**
A: PETG is not recommended for auto-ejection due to very high bed adhesion. For PETG, use either the semi-automatic PAUSE method (manual bed clearing between prints) or a plate-changer system like Jobox.

**Q: What happens if FabMatic disables automatically mid-queue?**
A: The current print finishes normally, but no new jobs will start. Resolve the underlying issue (HMS error, network loss, etc.), then re-enable FabMatic and accept the safety disclaimer to resume continuous operation.

**Q: Can I use FabMatic on only some of my printers?**
A: Yes. FabMatic is enabled per-printer. Select the specific printers you want and enable FabMatic from the Actions menu. Other printers continue operating normally.

**Q: Do I need a different clearing profile for each printer model?**
A: Yes. The end G-code for bed clearing is model-specific (e.g., A1 Mini vs. X1C have different motion commands). Create and name a clearing Machine profile for each model in your slicer.

**Q: How long does the bed need to cool before parts eject reliably?**
A: For PLA, cooling to approximately 28-30 degrees C typically allows reliable release. Time-based cooling (M190 commands) works but may wait longer than necessary on cool days or not long enough in warm environments.

## Community Resources

### 3D Printable Mods
**Button Mounts for External Fans**:
- [Factorian Designs - A1 Mini button holder (STEP files)](https://than.gs/m/1292928)
- Includes fan holder and button mount
- STEP files easy to modify for A1 full-size

**Farmloop Tilt Blocks**:
- Mechanical solution for assisted part ejection
- Can be combined with custom G-code
- Works with A1 Mini and other printer models

### Video Tutorials
**Factorian Designs**:
- "Automate your Bambu Lab A1 & A1 Mini! Free & Easy" (sponsored by Printago!)
- "Automate your Bambu Lab P1 & X1! Free & Easy"
- Shows complete setup process (ignore gcode stitching parts - Printago handles this)

### Semi-Automatic "Person Ejection" Mode
Use the PAUSE command method (see G-code Examples) for:
- Learning FabMatic before fully automating
- Materials that don't auto-eject well
- Parts with unpredictable adhesion
- Situations requiring quality inspection between prints

Still much faster than manually assigning jobs!
### When to Use What System

| Scenario | Best Solution | Why |
|----------|---------------|-----|
| PLA, standard parts | Auto-ejection G-code | Fast, reliable, low cost |
| PETG, any parts | Jobox plate changer | PETG adhesion too strong |
| Short, wide parts | Plate changer or manual | Poor leverage for ejection |
| Tall, skinny parts | Auto-ejection | Easy to knock off |
| High-mix production | Manual with PAUSE | Quality inspection needed |
| High-volume single item | Full auto-ejection | Maximum efficiency |

### Getting Help
Join our [Discord community](https://discord.gg/RCFA2u99De) for FabMatic support:
- Share and get clearing scripts
- Troubleshoot specific issues
- Learn from other print farmers