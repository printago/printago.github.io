---
sidebar_position: 4
---

# Orders

Create and manage custom orders directly within Printago using your SKU library. Manual orders provide a streamlined way to track customer requests and queue multiple SKUs for production in an organized workflow.

## Key Concepts

- **Manual Orders**: Orders created directly in Printago (as opposed to orders imported from e-commerce integrations). They let you organize SKUs, quantities, and customer details into a trackable unit.
- **Order Lifecycle**: Orders progress from creation through queuing, printing, and completion. Each stage is tracked with visual indicators.
- **Print Job Creation**: Clicking "Print Jobs" on an order generates print jobs for every SKU line item and adds them to the print queue. Re-clicking reconciles changes without duplicating existing jobs.
- **Order Reconciliation**: When you add or remove SKUs from an active order, the "Print Jobs" action intelligently adds new jobs and removes cancelled ones without affecting jobs already printing.
- **Line Items**: Each SKU added to an order is a line item with its own quantity, parameter configuration, and print status.
- **On-the-Fly SKU Creation**: If a needed SKU does not exist, you can create it directly from the order creation flow.

## Overview

Manual orders allow you to:
- Organize multiple SKUs into a single customer order
- Track order progress from creation to completion
- Configure OpenSCAD parameters for customized SKUs
- Automatically reconcile print jobs when order contents change
- Maintain order history and notes for customer reference

## Creating Manual Orders

### Starting a New Order

1. Navigate to **Orders** from the Sidebar menu

<img src="/img/orders/orders-main-page.png" className="margin-left--lg" width="600" alt="Orders List" />

2. Click **+ Create Order**
3. Fill in the order details:
   - **Order Number**: Custom identifier for tracking
   - **Customer Name (disabled currently)**: Optional for order identification
   - **Customer Email (disabled currently)**: Optional information for the order
   - **Fulfillment Date**: Target completion date (optional)
   - **Notes**: Any special instructions or details

<img src="/img/orders/edit-order-page.png" className="margin-left--lg" width="600" alt="Create Order Page" />

### Adding SKUs to Orders

**Add SKUs:**
1. Search and select SKUs from your product library
2. Set quantities for each SKU line item
3. Configure any customization parameters for OpenSCAD parts
4. SKUs with exposed parameters will show configuration options

**SKU Configuration:**
- For OpenSCAD SKUs, customize any parameters marked as `SKU PARAM`
- Each SKU line item can have different parameter values
- Preview shows total parts that will be created across all SKUs

**Save Order:** Click save to create the order with all configured line items

### Creating SKUs On-the-Fly

**Missing SKUs:** If you need a SKU that doesn't exist yet:
1. Type the SKU name when adding line items
2. Printago will prompt you to create the new SKU
3. Configure the SKU with parts, quantities, and parameters
4. The SKU is automatically added to your order after creation

## Order to Print Queue Workflow

### Understanding Print Job Creation

Each order tracks how many individual print jobs it will generate:
- **Job Counter**: Shows total print jobs from all SKUs in the order
- **SKU Breakdown**: Each SKU contributes based on its part count and quantities
- **Dynamic Updates**: Job count automatically adjusts when you modify the order

### Queueing Print Jobs

**Print Jobs Button:** Click the "Print Jobs" button to:
1. Open the standard print dialog for all jobs in the order
2. Configure printer assignment (Next Available, Specific Printer, or Tagged Printers)
3. Review material requirements across all jobs
4. Add all jobs to the print queue simultaneously

**Queue Integration:** Jobs from orders appear in the print queue with:
- Order number displayed for easy identification
- Clickable links back to the source order
- Ability to filter and sort by order number

<img src="/img/orders/print-queue-orders.png" className="margin-left--lg" width="600" alt="Print Queue with Orders" />
*Print queue showing jobs with order numbers (like JCSFY-001) and clickable order links*

## Order Management

### Modifying Active Orders

**Adding More Items:**
1. Add additional SKUs to existing orders
2. Hit "Print Jobs" again to queue only the new items
3. System automatically reconciles and adds new jobs without duplicating existing ones

**Removing Items:**
1. Delete line items from orders
2. Click "Print Jobs" to reconcile the queue
3. Automatically removes cancelled line items from the print queue
4. Doesn't affect jobs already in printing status

### Order Status and Job Tracking

**Job Status Awareness:**
- **Queued Jobs**: Cancelling orders removes jobs from queue
- **In-Progress Jobs**: Cancelling orders leaves active prints undisturbed
- **Completed Jobs**: Order completion tracking based on job outcomes

**Order Navigation:**
- Click order numbers in the print queue to view full order details
- View all jobs associated with a specific order
- Track completion progress across all order line items

### Closing Completed Orders

**Order Completion Status:**
- When all jobs for an order are completed, a green check appears next to the order in the orders list
- This visual indicator shows the order is ready to be closed

**Closing Orders:**
- **Bulk Close**: Check-select multiple completed orders and use the Actions menu to close them
- **Individual Close**: Click into a specific order and click the "Close" button

## Order Tracking Features

### Order Organization

**Order History:**
- All created orders remain accessible for reference
- Search and filter orders by customer, date, or order number
- Notes field maintains context and special instructions

**Customer Management:**
- Basic customer information (name and email)
- Order history per customer for repeat business
- Simple contact tracking for order follow-up

### Production Planning

**Fulfillment Dates:**
- Set target completion dates for planning
- Visual indicators for order priority and timing
- Helps coordinate production scheduling across multiple orders

**Material Planning:**
- Preview material requirements before queueing jobs
- Aggregate material needs across entire orders
- Plan material loading for efficient production runs

## Integration with Print Queue

### Smart Assignment

Manual order jobs use all the same printer assignment features:
- **Material Matching**: Jobs only go to printers with correct materials
- **Printer Tags**: Route order jobs to specific printer groups
- **FabMatic Support**: Continuous printing works with order-based jobs

### Order Tracking in Queue

**Queue Visibility:**
- Order numbers appear in job listings
- Click-through navigation from queue to order details
- Filter queue by specific orders for focused monitoring

**Progress Monitoring:**
- Track completion status of all jobs within an order
- Visual progress indicators for multi-SKU orders
- Completion notifications when entire orders finish

## Common Use Cases

### Custom Product Orders
- Customer requests multiple personalized items
- Configure OpenSCAD parameters for each line item
- Track entire order completion as a unit

### Maker Space Projects
- Student or member requests for project components
- Organize all parts for a single project under one order
- Track material usage and completion for billing

### Prototype Batches
- Engineering teams requesting test versions
- Multiple variations of the same design
- Coordinated completion for design review meetings

### Event Production
- Conference giveaways or promotional items
- Multiple SKUs for complete event package
- Deadline-driven fulfillment date tracking

## Troubleshooting

### Print Jobs Button Not Creating All Jobs

**Problem**: Clicking "Print Jobs" does not seem to queue jobs for every line item in the order.

**Solutions**:
1. Check if some jobs were already created from a previous "Print Jobs" click -- Printago reconciles and only creates new jobs
2. Verify that all SKUs in the order have valid linked parts
3. Refresh the page and try again to ensure the realtime service is connected

### Order Shows Incomplete But All Parts Are Printed

**Problem**: The order does not show the green completion check even though printing is done.

**Solutions**:
1. Ensure all print jobs associated with the order have been marked as completed (not just removed from the printer)
2. Check for any failed or cancelled jobs -- these may prevent the order from being marked complete
3. Refresh the page to sync the latest job statuses

### Cannot Remove a Line Item from an Active Order

**Problem**: Deleting a SKU line item from the order does not remove the corresponding print jobs from the queue.

**Solutions**:
1. After removing the line item, click "Print Jobs" again to trigger reconciliation
2. Reconciliation only removes queued jobs -- jobs already in printing status are left undisturbed by design
3. To cancel in-progress jobs, go to the print queue directly and cancel them manually

### Order Number Search Not Finding Results

**Problem**: Searching by order number in the orders list or print queue returns nothing.

**Solutions**:
1. Verify the exact order number including any special characters or prefixes
2. Check that you are searching in the correct view (Orders list vs Print Queue)
3. Closed orders may not appear in the default view -- check for a filter that hides closed orders

:::warning
Cancelling an order removes only queued jobs. Any jobs that are actively printing will continue to completion. Always check the print queue if you need to halt in-progress prints.
:::

## FAQ

**Q: Can I reopen a closed order?**
A: Closed orders are archived for reference. If you need to print additional items, create a new order referencing the same SKUs and customer information.

**Q: Do manual orders integrate with Shopify or Etsy?**
A: Manual orders are separate from e-commerce integrations. Orders from Shopify and Etsy are imported automatically through their respective integrations. Manual orders are for direct customer requests or internal production tracking.

**Q: What happens if I edit an order after jobs are already printing?**
A: You can add or remove line items at any time. Click "Print Jobs" to reconcile -- new items are queued and removed items are cancelled from the queue. Jobs already actively printing are not affected.

**Q: Is there a limit to how many SKUs I can add to a single order?**
A: There is no hard limit. You can add as many SKU line items as needed to represent the full customer order.

**Q: Can multiple orders share the same order number?**
A: Order numbers are custom identifiers you define. Printago does not enforce uniqueness, but using unique order numbers is strongly recommended to avoid confusion when tracking jobs in the print queue.

Need help with manual orders? Join our [Discord community](https://discord.gg/RCFA2u99De) for support and tips from other users!
