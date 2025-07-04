---
sidebar_position: 3
---

# Printer Control Panel

The printer control panel can be accessed in a few different ways: you can head to an individual printer page, click on the "game controller" icon on a printer's [Dashboard](/docs/dashboard-overview.md) card, or you can select 1 or more printers on the Printers List page of the app, and control several printers at once by selecting the Control Panel from the Bulk Action menu.

## Individual Printer Control

### Basic Controls
- **Homing**: Home all axes
- **Movement**: Control X, Y, Z axes 
- **Bed Temp**: Heat and monitor bed temperature.
- **Extruder Temp**: Heat and monitor the extruder temperatures
- **Chamber Temp**: Monitor the chamber temperature (where applicable)
- **Light Control**: 
- **Fan Control**: Part, Aux, and chambers fans, as applicable.

The "Distance" chooser on the left of the panel chooses the distance to move the axes.
<div className="margin-left--sm">
        <img src="/img/printers/control1.png" width="500" alt="the single printer control panel" />
    </div>


### Calibration Tools
For models which can perform each type of calibration:
- **Micro-Lidar Calibration**
- **Bed Leveling**
- **Vibration Compensation** 
- **Motor Noise Cancellation**
<div className="margin-left--sm">
        <img src="/img/printers/control2.png" width="500" alt="printer calibration options" />
    </div>

## Multi-Printer Control

Access multi-printer control by selecting multiple printers from the Printers page and selecting `Control`->`Control Panel` from the Bulk Actions menu or by pressing `P`.

Control and calibrate all your printers at once.

<div className="margin-left--md">
        <img src="/img/printers/control3.png" width="500" alt="control panel controlling 9 printers at once" />
    </div>

:::tip Multi-Printer Fan Control
Turn on all fans at once for a dramatic effect - just be prepared for the noise! 
:::