---
sidebar_label: Common Issues & Solutions
---

# Troubleshooting

This page consolidates common issues and solutions from across Printago. For feature-specific troubleshooting, see the relevant documentation pages.

## Printer Connection Issues

### Bambu Lab Authentication Expiry

Printago does not store your Bambu Lab credentials — only encrypted printer access tokens that **expire every 90 days**. You'll see a red banner 14 days before expiry.

**To re-authenticate:** Settings → Integrations → Bambu Lab → `Configure` → `Reauthenticate`

See [Bambu Lab Integration](/docs/connecting-printers/bambu-lab-integration#authentication-expiry) for full details.

### Bambu Lab Connection Issues

If printers show as disconnected:

1. Verify your printer's internet connection
2. Ensure Cloud Mode is enabled on your printer
3. Try disconnecting and reconnecting the printer in Printago
4. Check [firmware requirements](/docs/connecting-printers/bambu-lab-integration#firmware-requirements)

### Printago Fuse — Printers Not Discovered

If auto-scan isn't finding your printers:

1. Verify printers are on the same network as your Fuse client
2. Confirm LAN Mode and Developer Mode are enabled on the printer
3. Check that your firewall allows SSDP traffic (UDP ports 1990, 2021)
4. Try a custom subnet scan with your network's subnet
5. As a last resort, add the printer manually if you know its IP address

See [Printago Fuse Troubleshooting](/docs/connecting-printers/printago-fuse#troubleshooting) for more connection, camera, and file upload issues.

## Printing & Slicing Issues

### Cloud Slicer Failures

If a job fails during slicing, it moves to the "Errored" tab in the Print Queue. Common causes:

- **Part too large for printer bed** — retry on a larger printer
- **Incompatible material/printer combination** — check material assignments
- **Missing or corrupted slicer profiles** — re-run the Bambu Lab Integration or [import profiles manually](/docs/printing/import-profiles)

To view detailed slicer logs: open the errored job → click **View Slicer Logs**.

### Profile Not Syncing

If new profiles don't appear in Printago:

1. **Enable auto-sync**: In your slicer, Preferences → Presets → "Auto sync user presets"
2. **Close slicer completely**: Bambu Studio has quirks — always close after editing
3. **Wait a moment**: Give Bambu's cloud sync ~30 seconds to complete
4. **Re-run integration**: Settings → Integrations → Bambu Lab → Configure
5. **Check profile name**: Ensure you saved with a new name (not overwritten system profile)

### Print Queue Assignment Issues

If jobs aren't being assigned to printers:

- Check that the printer has the correct material loaded and assigned
- Verify the printer is online and set to "Clear and Ready"
- Check printer tags match any tag requirements on the part
- Ensure the printer isn't disabled

See [Print Queue](/docs/printing/print-queue) for queue management details.

## FabMatic Issues

### FabMatic Keeps Disabling

**Common causes:**
- **HMS errors**: Check printer display for any warnings (even minor ones like dirty camera)
- **Network issues**: Unstable Wi-Fi causing communication loss

**Solutions:**
- Clear all HMS errors before re-enabling
- Improve network stability (wired connection if possible)
- Keep adequate filament loaded

See [FabMatic Continuous Printing](/docs/printing/fabmatic-continuous-printing#troubleshooting) for full troubleshooting.

## Material Issues

### Materials Not Matching Printers

If jobs aren't routing to the correct printers:

- Verify materials are assigned to the printer in [Printer Management](/docs/printing/printer-management)
- Check that slicing profiles are configured for each material/printer combination
- Ensure the material variant (color) matches what's loaded on the printer

See [Materials](/docs/printing/materials) for configuration details.

## Integration Issues

### Shopify / Etsy Connection Problems

For e-commerce integration issues, see the specific integration docs:
- [Shopify Troubleshooting](/docs/integrations/shopify#troubleshooting)
- [Etsy Troubleshooting](/docs/integrations/etsy#troubleshooting)

## Getting Help

If you can't resolve an issue from this guide:

- Join the [Printago Discord](https://discord.gg/RCFA2u99De) for community support
- Email support@printago.io
- See the [Support page](/docs/support) for all support options
