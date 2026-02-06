---
sidebar_position: 1
---

# Account Settings

Manage your account settings and preferences from the Settings page in Printago.

![Account Settings](/images/account-settings.png)

## Key Concepts

- **Multi-Factor Authentication (MFA)** -- Protect your account with time-based one-time passwords (TOTP) using an authenticator app. Highly recommended for all accounts.
- **Notification Preferences** -- Configure Discord webhooks or custom HTTPS webhook endpoints to receive real-time alerts about print farm events.
- **Slicer Settings** -- Choose your default cloud slicer (OrcaSlicer, Bambu Studio, or a specific version). This default can be overridden per printer.
- **Affiliate Program** -- Earn commissions by referring new paying customers to Printago through your unique referral link.

## Multi-factor Authentication (MFA)

**Highly recommended!** Protect your account with a time-based one time password (TOTP) using an authenticator app.

MFA adds an extra layer of security to your Printago account by requiring a second form of verification when logging in. This helps protect your account even if your password is compromised.

### Setting up MFA

1. In Printago, go to `Settings` > `Account`
2. Click `Enable` in the "Multi-factor authentication (MFA)" tile
3. Download an authenticator app on your phone (such as Google Authenticator, Authy, or 1Password)
4. Scan the QR code with your authenticator app
5. Enter the 6-digit code from your authenticator app to confirm setup
6. Save your backup codes in a secure location

### Using MFA

Once enabled, you'll need to enter a 6-digit code from your authenticator app each time you log in to Printago.

## Notifications

Deliver printer and print job notifications to Discord or a webhook—and soon email, SMS, and push notifications.

Printago can send real-time notifications about your print farm operations, including job completions, printer errors, and other important events.

**[Learn more about setting up Notifications](/docs/features/notifications)**

## Slicer Settings

Configure your preferred slicer for Printago's cloud-slicer. We support production releases of OrcaSlicer and Bambu Studio, with additional slicers coming soon.  You're not bound to this setting - it's just your default.

### Preferred Slicer Options

Choose your default slicer to be used throughout Printago:

- **Printago Default** (currently OrcaSlicer 2.3.0) - Our recommended default
- **Latest OrcaSlicer** - Always use the newest OrcaSlicer version
- **Latest Bambu Studio** - Always use the newest Bambu Studio version  
- **Specific Version** - Choose from our slicer library including:
  - OrcaSlicer versions (2.3.0, 2.2.0)
  - Bambu Studio versions (2.1.1, 2.0.1, 1.10.2, 1.10.1)
  - PrusaSlicer (coming soon)
  - SuperSlicer (coming soon)

### Available Slicers

- **OrcaSlicer** (Community-driven) - Open-source slicing software with advanced optimization features
- **Bambu Studio** (Official Bambu) - Optimized specifically for Bambu Lab printers  
- **PrusaSlicer** (Official Prusa) - *Coming Soon* - Official slicing software developed by Prusa Research
- **SuperSlicer** (Community-driven) - *Coming Soon* - Feature-rich fork of PrusaSlicer with additional advanced settings

**[Learn more about Printago's Cloud Slicer](/docs/printing/cloud-slicer.md)**

## Affiliate Program

Our affiliate program offers you commission for referring paying customers.

Earn money by referring new users to Printago! When someone signs up using your referral link and becomes a paying customer, you'll receive a commission.

### How it Works

1. Join the affiliate program through your account settings
2. Share your unique referral link with potential customers
3. Earn commission when referred commercial users subscribe to Printago
4. Track your referrals and earnings through the affiliate portal
5. No purchase nessessary - you don't need to be a commercial user of our software to participate - or any type of user!  (Though we'd prefer if you do!)

**[Become an affiliate](https://printago.getrewardful.com/signup)** to access the full affiliate portal and start earning.

## Troubleshooting

### MFA Code Not Working

1. Verify your authenticator app's time is synced correctly -- TOTP codes are time-sensitive
2. Make sure you are entering the code for the correct account (if you have multiple TOTP entries)
3. If locked out, use one of the backup codes you saved during MFA setup
4. Contact support at support@printago.io if you have lost both your authenticator and backup codes

### Slicer Setting Not Taking Effect

1. The account-level slicer setting is a default. Individual printers may have their own slicer configuration that overrides the account default
2. Check the printer's slicer settings via the gear icon on the printer card or in Printer Management

### Notifications Not Being Delivered

1. See the [Notifications](/docs/features/notifications) page for detailed troubleshooting steps
2. Verify your webhook URL is correct and the endpoint is reachable

## FAQ

**Q: Can I change my slicer setting per printer instead of globally?**
A: Yes. The account-level slicer setting is just the default. You can override it for individual printers in their configuration settings.

**Q: What authenticator apps are supported for MFA?**
A: Any TOTP-compatible authenticator app works, including Google Authenticator, Authy, 1Password, Microsoft Authenticator, and others.

**Q: What happens if I lose access to my authenticator app?**
A: Use one of the backup codes provided during MFA setup. If you have lost your backup codes as well, contact support at support@printago.io for account recovery.

**Q: Do I need to be a paying customer to join the affiliate program?**
A: No. Anyone can join the affiliate program -- you do not need to be a Commercial or even a registered user of Printago to participate.
