
# Picking

Pick lists help you gather inventory items to fulfill orders. The picking workflow guides you through collecting the right items from the right locations.

## Overview

Picking connects inventory to order fulfillment:
1. An order needs specific sub-components
2. A pick list is created listing what to gather
3. You work through the list, picking items from storage
4. Picked items are reserved/allocated to the order

## Pick Lists

### Creating Pick Lists

Pick lists are typically created from orders:

1. Go to **Orders** and select an order
2. Click **Create Pick List**
3. System generates a list of required items


### Viewing Pick Lists

Navigate to **Inventory** > **Picking** to see all pick lists:


The page shows:
- **In Progress**: Active pick lists being worked
- **Completed**: Finished pick lists
- **Cancelled**: Abandoned pick lists

### Pick List Details

Click a pick list to see its contents:


Each list shows:
- Order number (with link)
- Status and progress
- Items to pick with locations
- Quantities required vs. picked

## Working a Pick List

### Starting a Pick

1. Find the pick list in **In Progress** tab
2. Click **Continue** to open the detail view
3. Work through each line item


### Picking Items

For each item:

1. Go to the indicated storage location
2. Retrieve the specified quantity
3. Click **Pick** on the line item


4. Confirm or adjust the quantity picked
5. Click **Confirm Pick**


### Partial Picks

If you can't pick the full quantity:
1. Click **Pick**
2. Enter the actual quantity picked
3. Item shows as partially picked
4. Return later to complete

### Progress Tracking

The pick list shows overall progress:
- Progress bar visualization
- Count of items picked vs. total
- Status badges per line item


## Completing Pick Lists

### Mark Complete

When all items are picked:

1. Progress reaches 100%
2. Click **Complete** button
3. Pick list moves to Completed tab


### Cancelling Pick Lists

If an order is cancelled or picking abandoned:

1. Click **Cancel** on the pick list
2. Confirm cancellation
3. Reserved items return to available stock

## Pick List Information

### Item Details

Each line item shows:
- **Sub-component**: What to pick
- **Variant**: Material/color if specified
- **Location**: Where to find it
- **Quantity**: How many to pick
- **Status**: Pending, Partial, or Picked

### Location Guidance

Items display their storage location:


Sort or filter pick lists by location to:
- Pick from nearby locations together
- Minimize walking in large warehouses
- Group items efficiently

## Order Integration

### From Order to Pick List

The flow from order to picking:

```
Order Created
      ↓
Order has SKUs needing sub-components
      ↓
Create Pick List
      ↓
Items reserved from available stock
      ↓
Work through pick list
      ↓
Complete picking
      ↓
Ready for shipping/assembly
```

### Order Link

Each pick list links back to its source order:
- Click order number to view order details
- Order shows associated pick lists

## Stock Reservation

### How Reservation Works

When a pick list is created:
- Required quantities are **reserved**
- Reserved items show in stock tracking
- Prevents double-allocation

Example:
- Stock: 100 total, 20 reserved, 80 available
- New pick list needs 30
- After creation: 100 total, 50 reserved, 50 available

### Releasing Reservations

Reservations are released when:
- Pick list is cancelled
- Order is cancelled
- Items returned to stock

## Best Practices

### Batch Picking

For multiple orders:
- Create pick lists for several orders
- Print or display all lists
- Pick all items in one pass through storage
- Sort items by order afterward

### Verification

Before marking complete:
- Double-check quantities
- Verify variants/colors match
- Confirm items are set aside for correct order

### Location Organization

Optimize picking efficiency:
- Store fast-moving items in accessible locations
- Group related sub-components together
- Keep pick paths short and logical

### Handling Shortages

If stock is insufficient:
- Create partial pick
- Note shortage in order
- Trigger restock for missing items
- Complete remaining pick when stock arrives

Need help with picking workflows? Join our [Discord community](https://discord.gg/RCFA2u99De)!
