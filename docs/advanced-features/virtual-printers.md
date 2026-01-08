---
sidebar_position: 1
---

# Virtual Printers

Virtual printers let you test your Printago workflow without needing physical hardware. They simulate real Bambu Lab printers, complete with temperature changes, print progress, and error states.

## What You'll Learn

- What virtual printers are and why they're useful
- How to create and configure virtual printers
- Running test prints and simulating errors

## What Are Virtual Printers?

Virtual printers are software-simulated printers that behave like real Bambu Lab printers. They're useful for:

- **Learning Printago** - Explore features without risking real prints
- **Testing workflows** - Verify your queue and automation settings work correctly
- **Development** - Test integrations and customizations

:::tip No Hardware Required
Virtual printers run entirely in software. You don't need any physical printers connected to use them.
:::

## Creating a Virtual Printer

1. Go to the **Printers** page in Fuse
2. Click the **Add** dropdown and select **Virtual Printer**

<img src="/img/virtual-printer-add-menu.png" width="600" alt="Add dropdown showing Virtual Printer option" />

3. Configure your virtual printer:
   - **Printer Name** - Give it a descriptive name
   - **Printer Model** - Select from X1 Carbon, P1S, A1, etc.
   - **Nozzle Diameter** - Choose 0.2mm, 0.4mm, 0.6mm, or 0.8mm
   - **AMS Units** - Optionally add AMS units with configurable slot counts

<img src="/img/virtual-printer-create-form.png" width="600" alt="Virtual printer creation form" />

4. Click **Add Printer**

## Understanding the Virtual Printer

Once created, your virtual printer appears in the printers list just like a physical printer:

<img src="/img/virtual-printer-in-list.png" width="800" alt="Virtual printer in the printers list" />

- Shows real-time status, temperatures, and AMS/spool slots
- The **virtual** badge distinguishes it from physical printers
- Receives print jobs from your queue like any other printer

## Virtual Printer Controls

Click the **Virtual Printer Controls** button on the printer card to access simulation controls:

<img src="/img/virtual-printer-controls.png" width="800" alt="Virtual Printer Controls panel" />

### Connection Status

Toggle the printer online or offline. When offline, the printer reports as disconnected - useful for testing how your workflow handles printer disconnections.

### HMS Error Simulation

Trigger printer errors to test error handling:

1. Select an error type (nozzle temperature, filament runout, AMS connection, etc.)
2. Optionally add a custom error message
3. Click **Trigger Error**
4. Click **Clear All Errors** when done testing

### Test Print

Start a simulated print job to watch the full print lifecycle without needing to queue a real file.

### Reset Printer

Return the printer to its initial idle state, clearing any active print or error conditions.

## Running a Test Print

1. Open **Virtual Printer Controls**
2. Click **Start Test Print**
3. Watch the print lifecycle progress:
   - **Downloading** - Simulates file transfer
   - **Heating bed** - Bed temperature rises to target
   - **Heating nozzle** - Nozzle temperature rises to target
   - **Printing** - Progress percentage and layer count update
   - **Cooling** - Temperatures return to ambient after completion

<img src="/img/virtual-printer-running.png" width="800" alt="Virtual printer during a print job" />

:::info Realistic Timing
Virtual printers simulate realistic heating rates and print progress. Test prints complete in a few minutes rather than hours.
:::

## Simulating Errors

Test how your workflow handles printer errors:

1. Open **Virtual Printer Controls**
2. Select an error type from the dropdown:
   - Nozzle Temperature Error
   - Bed Temperature Error
   - Heatbreak Fan Error
   - Filament Runout
   - AMS Connection Lost
   - Nozzle Clog Detected
   - First Layer Inspection Failed
   - Filament Tangle Detected
3. Optionally enter a custom error message
4. Click **Trigger Error**

The printer will enter an error state, allowing you to verify your alerts and recovery procedures work correctly. Click **Clear All Errors** to return to normal operation.
