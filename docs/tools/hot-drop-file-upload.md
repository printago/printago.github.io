
# Hot Drop File Upload

## Key Concepts

**Hot Drop** is Printago's drag-and-drop upload zone for quickly getting files into your system and optionally into the print queue in a single action. Rather than going through the full part creation workflow for each file, you can drop one or many files at once and choose to upload only, open a print dialog, or auto-queue everything with default settings. Hot Drop is designed for speed-oriented workflows—when you receive a batch of files from a client, need to quickly prototype something, or want to run a set of parts without configuring each one individually, you can go from file on your desktop to printing in seconds. Uploaded files are automatically organized into date-based folders for easy retrieval later.

![Hot Drop Zone](/images/hot-drop.png)

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
