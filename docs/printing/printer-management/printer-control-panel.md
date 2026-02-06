---
sidebar_position: 3
---

# Printer Control Panel

The printer control panel provides direct access to your printer's hardware controls and calibration tools. You can access it in several ways:

- **Individual printer page** - Navigate to any printer's dedicated page
- **Dashboard shortcut** - Click the "game controller" icon on a printer's [Dashboard](/docs/features/dashboard-overview) card
- **Bulk control** - Select multiple printers on the Printers List page and choose Control Panel from the Bulk Actions menu

## Key Concepts

- **Individual vs. Multi-Printer Control**: The control panel works on a single printer from its dedicated page, or on multiple printers simultaneously via the Bulk Actions menu (shortcut `P`)
- **Calibration Tools**: Model-dependent options include Micro-Lidar Calibration, Bed Leveling, Vibration Compensation, and Motor Noise Cancellation
- **Temperature Control**: Set and monitor bed, extruder, and chamber temperatures directly from the panel
- **Hardware Controls**: Home axes, adjust fan speeds (part cooling, auxiliary, chamber), and toggle LED lighting without touching the physical printer

## Individual Printer Control

### Basic Controls

- **Homing** - Home all axes to their reference positions
- **Movement** - Manually control X, Y, and Z axis positioning
- **Bed Temperature** - Set target temperature and monitor bed heating
- **Extruder Temperature** - Control and monitor hotend temperatures
- **Chamber Temperature** - Monitor chamber temperature (where supported)
- **Light Control** - Toggle printer LED lighting
- **Fan Control** - Adjust part cooling, auxiliary, and chamber fans

![Printer Control Panel](/images/printer-control-panel.png)


### Calibration Tools

Available calibration options vary by printer model:

- **Micro-Lidar Calibration** - Calibrate the lidar sensor for accurate first layer detection
- **Bed Leveling** - Automatic bed mesh leveling for optimal first layer adhesion
- **Vibration Compensation** - Reduce print artifacts caused by mechanical vibrations
- **Motor Noise Cancellation** - Minimize stepper motor noise during operation
<div className="margin-left--sm">
        <img src="/img/printers/control2.png" width="500" alt="printer calibration options" />
    </div>

## Multi-Printer Control

For managing multiple printers simultaneously:

1. Select multiple printers from the Printers page
2. Choose `Control` → `Control Panel` from the Bulk Actions menu (or press `P`)
3. Control and calibrate all selected printers at once

This is particularly useful for:
- Running calibrations across your entire printer farm
- Setting consistent temperatures on multiple machines
- Coordinated cooling after print completion

<div className="margin-left--md">
        <img src="/img/printers/control3.png" width="500" alt="control panel controlling 9 printers at once" />
    </div>

:::tip Multi-Printer Operations
Turning on all fans across multiple printers creates quite the spectacle - just be prepared for the noise! This is particularly effective for rapidly cooling down your entire printer farm after completing print jobs.
:::

## Troubleshooting

**Control panel commands not reaching the printer:**
- Verify the printer is online and connected -- check the printer's status indicator on the Printers list or Dashboard
- Refresh the page to re-establish the realtime connection
- Ensure no other application (Bambu Studio, Handy app) is actively sending commands to the same printer

**Calibration option missing for a specific printer:**
- Available calibration tools vary by printer model. Not all printers support Micro-Lidar Calibration or Motor Noise Cancellation
- Ensure the printer firmware is up to date, as newer calibration features may require recent firmware versions

**Temperature not reaching target:**
- Allow adequate time for heating, especially for bed temperatures above 80 degrees C
- If the temperature plateaus well below the target, there may be a hardware issue with the heater -- check the printer's HMS alerts for related warnings

## FAQ

**Q: Can I use the control panel while a print is in progress?**
A: Some controls (like lighting and fan speed) can be adjusted during printing. However, homing, movement, and calibration commands should only be used when the printer is idle to avoid disrupting an active print.

**Q: Does multi-printer control send commands to all selected printers simultaneously?**
A: Yes. When you set a temperature or trigger a calibration from the multi-printer control panel, the command is sent to every selected printer at the same time.

**Q: Which calibration should I run after setting up a new printer?**
A: Start with Bed Leveling to ensure good first-layer adhesion. Then run Vibration Compensation if your printer supports it. Micro-Lidar Calibration (X1C and similar models) should be done if you notice first-layer detection issues.

**Q: Can I set different temperatures on different printers from the multi-printer panel?**
A: No. The multi-printer panel applies the same command to all selected printers. To set different temperatures, use the individual printer control panel for each printer, or select different groups of printers separately.