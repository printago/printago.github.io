
# Quality Control

The QC workflow allows you to review items produced by print jobs before they enter available inventory. This ensures only good items are counted as stock.

## Overview

When a print job completes:
1. Items enter the **Pending** QC queue
2. You review and either **Approve** or **Reject** each item
3. Approved items move to inventory stock
4. Rejected items are discarded from tracking

## QC Interface

Navigate to **Inventory** > **QC** to access the quality control workflow.


### Tabs

The QC page has three tabs:
- **Pending**: Items awaiting review
- **Approved**: Recently approved items
- **Rejected**: Recently rejected items

## Reviewing Items

### Individual Review

1. Find the item in the **Pending** tab
2. Click **Approve** to move to stock
3. Or click **Reject** to discard


### Item Information

Each QC entry shows:
- **Sub-component name**: What was produced
- **Material variant**: Color/material used
- **Print job**: Link to the source print job
- **Printer**: Which printer produced it
- **Created**: When the print completed


## Batch Operations

For high-volume operations, use batch approval or rejection.

### Select Multiple Items

1. Use the checkboxes to select items
2. Or use **Select All** for the current page


### Batch Actions

With items selected:
- Click **Approve Selected** to approve all
- Click **Reject Selected** to reject all


## Approval Targets

When approving items, you can specify where they go:

### Default Location

Items go to the sub-component's default storage location (if configured).

### Specific Location

Select a specific storage location during approval:


## Rejection Reasons

When rejecting items, you can optionally note the reason:
- Print defect
- Wrong color/material
- Damaged during removal
- Quality not acceptable


:::tip
Tracking rejection reasons helps identify printer issues or problematic parts.
:::

## FabMatic Integration

If you use FabMatic (automated print farm):

### Automatic QC Bypass

FabMatic can be configured to auto-approve items, skipping manual QC:
- Parts marked as "trusted" skip the QC queue
- Useful for well-tuned printers and proven parts
- Items go directly to stock

### Ejection QC

For FabMatic with physical ejection:
- Ejected items can auto-approve
- Failed ejections stay in QC for review

## Viewing History

### Approved Items

The **Approved** tab shows recently approved items:


- View approval timestamp
- See who approved (if multiple users)
- Link back to source print job

### Rejected Items

The **Rejected** tab shows rejected items:


- View rejection reason
- Track rejection rates
- Identify problem areas

## Best Practices

### Regular Reviews

- Process QC items regularly to keep stock accurate
- Don't let the pending queue grow too large
- Consider batch approval for trusted setups

### Quality Standards

- Define clear criteria for approval vs. rejection
- Be consistent across reviewers
- Document standards for team reference

### Tracking Issues

Use rejection data to:
- Identify printers needing maintenance
- Find parts with high failure rates
- Improve print settings

Need help with QC workflows? Join our [Discord community](https://discord.gg/RCFA2u99De)!
