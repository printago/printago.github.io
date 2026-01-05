---
sidebar_position: 4
---

# Slicer Profiles

Your slicer profiles page displays a comprehensive list of all your profiles, including those synced from your Bambu Lab account and any you've imported manually.

![Slicer Profiles](/images/slicer-profiles.png)

## Getting Profiles into Printago

There are two ways to add slicer profiles to Printago:

### Option 1: Bambu Lab Cloud Sync

Run the [**Bambu Lab Integration Flow**](../printer-setup/bambu-lab-integration.md) to sync profiles from your Bambu Lab account. This requires **Cloud Sync** to be enabled in Bambu Studio or OrcaSlicer.

### Option 2: Manual Import

[**Import profiles manually**](./import-profiles.md) by exporting preset bundles from Bambu Studio or OrcaSlicer and uploading them directly to Printago. This works without cloud sync and gives you control over exactly which profiles to import.

## Managing Your Profiles

### Searching Profiles
You can search through your profile list to quickly narrow down and find specific profiles.

### Deleting Profiles
Profiles can be deleted directly from the Printago interface. However, note that:
- Deleting profiles from your Bambu account alone **won't** delete them from Printago
- You must delete them from within Printago to remove them from your list

## Editing Profiles

Click on any profile to open the edit view, where you can:

- **Rename** the profile
- **View all settings** including both your custom overrides ("Own") and inherited values from the base profile ("Inherited")
- **Copy** settings to clipboard
- **Lock** the profile to prevent accidental changes

### Profile Inheritance and Slicer Versions

Most profiles inherit from a base profile (e.g., `0.20mm Strength @BBL X1C`). Printago maintains multiple versions of these base profiles from different slicer releases.

![Profile Version Dropdown](/images/profiles/profile-version-dropdown.png)

Use the **slicer version dropdown** to:

- **Compare inherited values** across different Bambu Studio and OrcaSlicer versions
- **Select which slicer version** the inherited values should come from when cloud slicing

This is useful when:
- A newer slicer version changed default settings you relied on
- You want to use OrcaSlicer's interpretation of a profile instead of Bambu Studio's
- You need to troubleshoot differences in slicing behavior between versions

The selected slicer version determines which base profile values are used when the [Cloud Slicer](./cloud-slicer.md) generates GCODE for your prints
