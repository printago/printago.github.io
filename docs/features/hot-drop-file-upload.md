---
sidebar_position: 1
---

# Hot Drop File Upload

The Hot Drop Zone provides a fast and convenient way to upload multiple 3D printing files at once. Simply drag and drop any number of parts, and they'll be automatically uploaded and organized for you.

![Hot Drop Zone](/static/hot-drop.png)

## How Hot Drop Works

When you drop files into the Hot Drop Zone, they are:
- **Automatically uploaded** and processed
- **Sorted into a temporary folder** organized by date
- **Ready for immediate action** with three processing options

### Upload Options

Choose how you want to handle your dropped files:

- **Upload Only**: Files are uploaded and saved to the Hot Drop folder for later use
- **Direct Print**: Opens the print dialog for all uploaded parts, allowing you to review and customize print settings before queuing
- **Auto-Queue**: Everything gets uploaded and automatically queued for printing with default settings.  This includes setting the parts material to `Any Material`

## 3MF File Handling

Hot Drop has special handling for 3MF files that differs from the standard "new part" workflow:

- **All build plates included by default**: When hotdropping 3MF parts for printing or queuing each plate will be added once to the job.  
- **Embedded profiles used**: Hot dropped files set their Process Override field to `Embedded 3MF Profile`.
- **Batch processing**: Multiple 3MF files can be processed simultaneously

## Organization

- **Daily folders**: A new folder is automatically created for each day in the Hot Drop section
- **Quick access**: Click the word "Hotdrop" to navigate directly to the Hot Drop folder
- **Temporary storage**: Files remain organized by upload date for easy retrieval.  
<div className="margin-left--md">
:::warning Please cleanup your droppings
Please help our storage costs stay affordable by regularly deleting transient parts from your library.
:::
</div>
## Supported File Types

- **3MF files**: Full support with embedded profile recognition
- **STL files**: Standard mesh files for 3D printing
- **OBJ files**: 3D object files
- **PLY files**: Polygon mesh files

:::info
OpenSCAD files (.scad) cannot be uploaded via Hot Drop and must be uploaded through the standard part creation process.
:::

## Tips for Bulk Uploads

- **Multiple files**: Upload any number of files in a single drop operation
- **Mixed file types**: Combine different supported file formats in one upload
- **Batch printing**: Use Auto-Queue for hands-off batch processing of multiple parts
- **Review before printing**: Use Direct Print when you want to customize settings for each part
