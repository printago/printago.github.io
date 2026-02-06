---
sidebar_position: 3
---

# Subscription Management

Manage your Printago subscription and billing.

![Subscription Management](/images/subscription-management.png)

## Key Concepts

- **Hobbyist vs Commercial** -- Non-commercial (hobbyist) accounts are free with unlimited production slots but no access to commercial features (SKUs, Orders, API). Commercial accounts unlock all features.
- **Production Slots** -- Pricing is based on how many simultaneous jobs Printago will process, not the number of connected printers. The first commercial slot is free; additional slots are $4/month each.
- **Unlimited Printers** -- All account types can connect unlimited printers at no additional charge.
- **Stripe Billing** -- Subscription management, payment methods, and billing history are handled through a Stripe customer portal.
- **Scaling** -- Add or remove production slots month-to-month as your business needs change. Annual commitments are available with discounts.

## Account Types

Printago has two types of accounts:

**Non-Commercial (Hobbyist/Personal)**
- Free forever with unlimited production slots
- Connect unlimited printers at no charge
- Limited access to commercial features (no SKUs, Orders, or API access)

**Commercial**
- First production slot is free
- Additional slots are $4/month each
- Full access to all Printago features including SKUs, Orders, and API
- Connect unlimited printers at no charge

## Production Slots

Printago's pricing is based on "production slots" - not the number of printers you connect. Production slots control how many simultaneous jobs from your queue Printago will process and monitor at once.

**How It Works:**
Even with 20 printers and 100 queued jobs, if you have 5 production slots, Printago will process 5 jobs simultaneously. When one completes, the next job starts on any available printer with the required materials.

This allows your subscription to scale with your business demands on a month-to-month basis. Annual commitments come with discounts.

## Managing Your Subscription

### Accessing Subscription Settings

1. **From Queue Page:** Click "Manage Job Slots" button on the In-Progress tab
2. **From Settings:** Navigate to `Settings -> Subscription`

Here you'll see your current slot count and plan type.

### Managing Production Slots

Click "Manage Subscription" to open the Stripe portal where you can:
- Add or remove production slots
- Update billing information
- View billing history
- Change payment methods

## Account Type Changes

**Upgrading to Commercial:** Non-commercial users can upgrade their accounts to commercial at any time through the subscription settings.

**Downgrading to Non-Commercial:** Commercial users who need to switch back to non-commercial should contact support for assistance.

## Troubleshooting

### "Manage Subscription" Button Not Working

1. Clear your browser cache and try again
2. Ensure pop-ups are not blocked -- the Stripe portal opens in a new window or tab
3. Try a different browser if the issue persists

### Production Slots Not Updating After Change

1. Changes made in the Stripe portal may take a few moments to reflect in Printago
2. Refresh the Printago page after making changes in Stripe
3. If slots still do not update after several minutes, contact support

### Cannot Access Commercial Features After Upgrading

1. Log out and log back in to refresh your account permissions
2. Verify your subscription is active in **Settings** > **Subscription**
3. Contact support if the issue persists

## FAQ

**Q: Can I use Printago for free?**
A: Yes. Non-commercial (hobbyist) accounts are free forever with unlimited production slots and unlimited printers. Commercial features like SKUs, Orders, and API access require a Commercial subscription.

**Q: How do production slots work?**
A: Production slots control how many jobs Printago will process simultaneously from your queue. For example, with 5 production slots and 20 printers, Printago will run up to 5 jobs at a time. When one finishes, the next queued job starts on any available compatible printer.

**Q: Can I change my slot count at any time?**
A: Yes. You can add or remove production slots at any time through the Stripe portal. Changes take effect immediately and billing is prorated.

**Q: What happens if I downgrade from Commercial to Non-Commercial?**
A: You will lose access to commercial features (SKUs, Orders, integrations, API), but your printers, parts, and print history remain. Contact support to process a downgrade.

**Q: Is there a discount for annual billing?**
A: Yes. Annual commitments come with discounts compared to month-to-month pricing. Check the subscription settings for available plans.
