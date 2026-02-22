
# Examples

## Code Examples

The API Keys page in the Printago app includes ready-to-use code examples in **cURL**, **JavaScript**, and **Python** — pre-filled with your store ID. Navigate to **Settings > API Keys** to see them.

## Python — One-off Printing of an STL via API

This example demonstrates uploading a part and sending it to the print queue:

[GitHub Gist — Full Python example](https://gist.github.com/nsantorello/9a54fe603fc07e54d72ff668a089296f)

### Variables to Set

- **`YOUR_PART_ID`** — click on your part in the Parts page and look at the URL. It ends in `/parts/YOUR_PART_ID`.
  - Example: for URL `https://app.printago.io/parts/c8x2dorgp40blck610w4bgg4`, the Part ID is `c8x2dorgp40blck610w4bgg4`
- **`YOUR_PRINTER_ID`** — click on your printer in the Printers page and look at the URL. It ends in `/printers/YOUR_PRINTER_ID`.
- **`TAG1`** and **`TAG2`** — printer tags (case-sensitive) used to match a print job to a printer. Tags are pipe-delimited: `TAG1|TAG2`.
- **`PRINT_JOB_NAME`** — whatever you want the job to show up as in the print queue (e.g. an order number).

## What's Possible with the API

The Printago API is the same one that powers app.printago.io. You can:

- List and manage your connected printers
- Upload 3D models and create SKUs
- Submit print jobs to your queue
- Monitor print status and progress
- Access print history and analytics
- Subscribe to real-time printer state and entity change events via MQTT

Building something cool with Printago? Join our [Discord community](https://discord.gg/RCFA2u99De) to connect with our developers and other print farm automation enthusiasts!
