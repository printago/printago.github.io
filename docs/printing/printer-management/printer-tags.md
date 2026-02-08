
# Printer Tags

Printer tags are a powerful way to create dynamic groups of printers in your farm. They enable flexible printer management and smart job routing without complex configuration.

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

Have questions about printer tags? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!