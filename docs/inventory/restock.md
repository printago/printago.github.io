
# Restock

Configure automatic restocking rules to maintain optimal inventory levels. The system monitors stock and generates suggestions or automatically queues print jobs when supplies run low.

## Overview

Restock rules define:
- **Minimum level**: When stock falls below this, trigger restocking
- **Target level**: How much stock to build back up to
- **Mode**: Suggest (manual approval) or Automatic (auto-queue prints)

## Creating Restock Rules

1. Navigate to **Inventory** > **Restock**
2. Click **+ Add Rule**


3. Configure the rule:
   - **Sub-Component**: Which item to track
   - **Material Variant**: Specific variant (optional, or "Any")
   - **Minimum Level**: Threshold to trigger restock
   - **Target Level**: Desired stock after restocking
   - **Mode**: Suggest or Automatic


4. Click **Save**

## Rule Settings

### Minimum Level

The threshold that triggers restocking:
- When available stock ≤ minimum, restock is needed
- Set based on your production lead time
- Account for time between print start and QC approval

### Target Level

How much stock to aim for:
- Should be higher than minimum
- Consider batch sizes and print efficiency
- Example: Min = 10, Target = 50

### Mode Options

**Suggestion Mode:**
- Creates a restock suggestion when stock is low
- You review and approve to create print jobs
- Good for oversight and control

**Automatic Mode:**
- Automatically queues print jobs when stock is low
- No manual approval needed
- Good for high-volume, trusted items


## Restock Suggestions

When rules trigger in Suggestion mode:

### Viewing Suggestions

Active suggestions appear on the Restock page:


Each suggestion shows:
- Sub-component name
- Current stock level
- Suggested quantity to print
- Which part(s) can produce it

### Approving Suggestions

1. Click on a suggestion
2. Review the suggested print quantity
3. Adjust if needed
4. Click **Create Print Jobs**


### Dismissing Suggestions

If restocking isn't needed:
1. Click the dismiss icon
2. Suggestion is removed
3. Will re-trigger if stock stays low

## Automatic Restocking

When rules trigger in Automatic mode:

### How It Works

1. System detects stock ≤ minimum
2. Calculates prints needed to reach target
3. Automatically creates print jobs
4. Jobs enter the print queue

:::note
Automatic restocking uses the part's default printer assignment settings.
:::

### Monitoring Auto-Restocks

View automatically created jobs:
- Check the print queue
- Jobs are tagged with "Restock" source
- Filter queue by source to see restock jobs

## Calculating Restock Quantity

The system calculates how many prints are needed:

```
Deficit = Target - Available Stock
Prints Needed = Deficit / Output Quantity per Print
```

Example:
- Target: 100 buttons
- Available: 20 buttons
- Part produces: 12 buttons per print
- Deficit: 80 buttons
- Prints needed: 80 / 12 = 7 prints (rounded up)

## Managing Rules

### Viewing All Rules

The Restock page lists all configured rules:


### Editing Rules

1. Click the edit icon on a rule
2. Modify settings
3. Save changes

### Deleting Rules

1. Click the delete icon
2. Confirm deletion
3. Rule is removed (pending suggestions are cleared)

### Enabling/Disabling Rules

Toggle rules on/off without deleting:
- Disabled rules don't trigger
- Useful for seasonal items or temporary pauses

## Best Practices

### Setting Thresholds

Consider your production workflow:
- **Minimum**: Cover lead time (print time + QC time)
- **Target**: Batch size that's efficient to produce
- **Buffer**: Add extra if demand is variable

### Starting with Suggestions

When setting up new rules:
1. Start in Suggestion mode
2. Monitor how often suggestions trigger
3. Adjust thresholds based on experience
4. Switch to Automatic once confident

### Material Variants

Decide on variant-specific vs. general rules:
- **Specific**: "Blue Widget Case" minimum 20
- **General**: "Widget Case (any color)" minimum 50

### Multiple Parts

If multiple parts produce the same sub-component:
- System will suggest the most efficient part
- Or you can manually choose during approval

Need help with restocking? Join our [Discord community](https://discord.gg/RCFA2u99De)!
