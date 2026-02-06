---
sidebar_position: 3
---

# Virtual Printers

Virtual printers let you test your Printago workflow without needing physical hardware. They simulate real Bambu Lab printers, complete with temperature changes, print progress, and error states.

## Key Concepts

- **Testing Without Hardware** -- Virtual printers run entirely in software, allowing you to explore Printago features without connecting physical printers.
- **Simulated Printing** -- Virtual printers replicate the full print lifecycle: file transfer, heating, printing with layer progress, and cooling.
- **Error Simulation** -- You can trigger realistic printer errors (nozzle temperature, filament runout, AMS issues, etc.) to test alerting and recovery workflows.
- **Realistic Timing** -- Temperature changes and print progress are simulated at realistic rates, though test prints complete in minutes rather than hours.
- **Fuse-Based** -- Virtual printers are created and managed through the [Printago Fuse](./printago-fuse.md) client (up to 20 per Fuse instance).

## What You'll Learn

- What virtual printers are and why they're useful
- How to create and configure virtual printers
- Running test prints and simulating errors

## What Are Virtual Printers?

Virtual printers are software-simulated printers that behave like real Bambu Lab printers. They're useful for:

- **Learning Printago** - Explore features without risking real prints
- **Testing workflows** - Verify your queue and automation settings work correctly
- **Development** - Test integrations and customizations
- **Testing gcode output** - Inspect generated gcode without needing to spin up real printers

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

## Troubleshooting

### Virtual Printer Not Appearing in Printago

1. Check the Fuse Status page to confirm the Fuse client is connected to the Printago cloud gateway
2. Click **Sync Printers to Cloud** in Fuse Settings to force a sync
3. Refresh the Printago web interface

### Virtual Printer Stuck in a State

1. Use the **Reset Printer** button in Virtual Printer Controls to return to idle
2. If reset does not work, try removing the virtual printer and recreating it

### Test Print Not Starting

1. Ensure the virtual printer is set to Online in the connection toggle
2. Clear any active HMS errors before starting a test print
3. Check that the Fuse client is running and connected

## FAQ

**Q: Do virtual printers count toward my production slot limit?**
A: Yes. When a virtual printer is processing a job from your queue, it occupies a production slot just like a physical printer.

**Q: Can I send real gcode files to a virtual printer?**
A: Yes. You can queue print jobs to virtual printers through the normal Printago workflow. The virtual printer will simulate processing the file, and you can inspect the generated gcode output.

**Q: How many virtual printers can I create?**
A: You can create up to 20 virtual printers per Fuse client.

**Q: Do virtual printers support AMS simulation?**
A: Yes. When creating a virtual printer, you can configure AMS units with customizable slot counts, and the printer will simulate AMS behavior.

**Q: Can I use virtual printers to test Discord or webhook notifications?**
A: Yes. Virtual printers trigger the same events as physical printers, so job completions, errors, and status changes will fire your configured notifications.
