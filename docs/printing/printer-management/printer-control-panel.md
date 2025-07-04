---
sidebar_position: 3
---

# Printer Control Panel

The printer control panel provides direct access to your printer's hardware controls and calibration tools. You can access it in several ways:

- **Individual printer page** - Navigate to any printer's dedicated page
- **Dashboard shortcut** - Click the "game controller" icon on a printer's [Dashboard](/docs/dashboard-overview.md) card
- **Bulk control** - Select multiple printers on the Printers List page and choose Control Panel from the Bulk Actions menu

## Individual Printer Control

### Basic Controls

- **Homing** - Home all axes to their reference positions
- **Movement** - Manually control X, Y, and Z axis positioning
- **Bed Temperature** - Set target temperature and monitor bed heating
- **Extruder Temperature** - Control and monitor hotend temperatures
- **Chamber Temperature** - Monitor chamber temperature (where supported)
- **Light Control** - Toggle printer LED lighting
- **Fan Control** - Adjust part cooling, auxiliary, and chamber fans

<div className="margin-left--md">
        <img src="/img/printers/control1.png" width="500" alt="the single printer control panel" />
</div>


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