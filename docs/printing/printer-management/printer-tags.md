---
sidebar_position: 2
---

# Printer Tags

Printer tags are a powerful way to create dynamic groups of printers in your farm. They enable flexible printer management and smart job routing without complex configuration.

## Key Concepts

- **Tag-Based Routing**: When a print job specifies tags, it will only match printers that have **all** of the selected tags (AND logic), in addition to material and other requirements
- **Dynamic Tags**: Tags are evaluated in real-time -- adding a tag to a printer immediately makes it eligible for queued jobs that require that tag
- **Unlimited Tags**: Each printer can have any number of tags, enabling flexible multi-dimensional grouping
- **Common Use Cases**: Physical location (SHELF1, LAB2), printer capabilities (PEI_BED, NO_AMS), project assignment (CLIENT_A, PRODUCTION), or team access (ENGINEERING, STUDENT)
- **Bulk Tag Management**: Apply or remove tags across multiple printers at once from the Printers list Actions menu

![Printer Tags Interface](/images/printer-tags.png)

## Understanding Printer Tags

Tags are user-defined labels that can be assigned to any printer in your farm. Key features include:

- Unlimited tags per printer
- Dynamic grouping - add or remove tags anytime
- Queue-aware - jobs automatically route to newly tagged printers
- Physical or logical organization (e.g., "SHELF1" or "HIGH_QUALITY")

## Managing Printer Tags

### Single Printer Tag Management

1. Navigate to the `Printers` page
2. Select a Printer by clicking or tapping on it.
3. On the printer screen:
   - Type a new tag and press `Enter` to add
   - Click the `X` on any existing tag to remove it, or backspace.
   - Be sure to click `Save`


### Multi-Printer Tag Management

1. Navigate to the `Printers` page, and notice the `Actions` button in the upper right of your screen. 
2. Select multiple printers using checkboxes. The Actions button will update to show <br/>`X Printers Selected` and provide a dropdown menu of available actions
3. "Manage Tags" button in the action menu
4. In the bulk tag dialog:
   - Add new tags to all selected printers
   - Remove existing tags from all selected printers
   - Remember to press `Enter` after entering each tag, and to click the `Save` button when done.

:::warning Multi-Select Tag Behavior
If your selected printers have differing tags, adding and saving new tags will replace all existing tags on all selected printers.
To modify tags without replacing them, make sure all selected printers have the same tags first.
:::


## Using Tags for Print Jobs

### Printing to Tagged Printers

When starting a print job:

1. Select your part or SKU to print
2. In the print dialog, expand the "Printer Tags" section
3. Select the required tags, a quantity and press print.
4. The job will only match to printers with ALL selected tags (along with material and other requirements)

### Dynamic Tag Updates

Tags are evaluated in real-time:

- Jobs waiting for tagged printers will automatically route to newly-tagged printers
- Removing a tag from a printer doesn't affect currently printing jobs
- You can modify tags while jobs are in queue without disrupting workflow


## Common Tag Use Cases

- **Physical Location**: "SHELF1", "DESK4", "LAB2"
- **Printer Capabilities**: "PEI_BED", "CRYOGRIP", "NO_AMS"
- **Project Assignment**: "CLIENT_A", "PRODUCTION", "TESTING"
- **Team Access**: "TEAM1", "ENGINEERING", "STUDENT"

## Tips and Best Practices

1. **Consistent Naming**
   - Use uppercase for better visibility
   - Keep names short but descriptive

2. **Tag Organization**
   - Create a tag naming convention
   - Document tag meanings for team reference
   - Regularly review and clean up unused tags

3. **Efficient Usage**
   - Start with broad categories
   - Add specific tags as needed
   - Use multiple tags for further filtering

## Troubleshooting

**Job not matching any tagged printers:**
- Verify that at least one printer has **all** the tags selected on the job (tags use AND logic, not OR)
- Check that the matching printer is also online, has the correct material loaded, and is marked "Clear & Ready"
- Open the job's Printer Matching dialog in the Print Queue to see exactly why each printer was skipped

**Tags disappeared after bulk editing:**
- When selected printers have differing tags, saving new tags via the bulk dialog **replaces** all existing tags on all selected printers
- To avoid this, first ensure all selected printers have the same tags, or edit printers individually

**Tag changes not taking effect:**
- Tags are evaluated in real-time. If a queued job is not routing to a newly tagged printer, check that the printer also meets all other matching criteria (material, availability, ready state)
- Refresh the Printers page if the UI does not reflect recent changes

:::warning Bulk Tag Behavior
When using the bulk tag dialog on printers with different existing tags, saving will **replace** all tags on all selected printers with the tags shown in the dialog. Select printers with identical tags to safely add or remove tags in bulk.
:::

## FAQ

**Q: Do tags use AND or OR logic when multiple tags are selected on a job?**
A: AND logic. A printer must have **all** of the tags specified on the job to be eligible. For example, a job requiring tags "PRODUCTION" and "PEI_BED" will only match printers that have both tags.

**Q: Can I rename a tag across all printers at once?**
A: There is no dedicated rename function. To effectively rename a tag, select all printers that have the old tag (use the Printers list filter), add the new tag via bulk editing, then remove the old tag.

**Q: Do tags affect currently printing jobs?**
A: No. Removing a tag from a printer does not interrupt or reassign jobs that are already in progress on that printer. Tags only affect future job matching.

**Q: Is there a limit to how many tags a printer can have?**
A: No. You can assign as many tags as needed to each printer. However, keeping your tag set manageable and well-documented is recommended for team workflows.

**Q: Can I see which jobs are waiting for a specific tag?**
A: Yes. In the Print Queue, queued jobs display their tag requirements. You can also use the Printer Matching dialog on any job to see which printers matched or did not match and why.

Have questions about printer tags? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!