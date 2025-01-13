# Printago Development Roadmap

Welcome to the Printago development roadmap! This page outlines our planned features and improvements. We've organized them by development phase to give you a clear picture of what's coming. Our roadmap is dynamic and influenced by user feedback - we'd love to hear your thoughts!

### Currently In Development

#### 1. Billing & Referrals
- Printago Core Subscription via Stripe
- Referral system with rewards for both referrer and referee

#### 2. Advanced Filament Handling
  - Intelligent filament matching by color and type
  - Enhanced 3MF file support with proper filament configuration
  - Support for multi-color printing setups

#### 3. Configurable Dashboards
- Configure "Cards" and "Widgets" to build your own dashboard
- Save multiple different views, easily page between them
- Event-driven notifications highlighting items requiring attention

#### 4. Continuous Improvement
- Cloud infrastructure improvements to support commercial launch
- Capcha for New Account Signups
- Display HMS Errors in UI / Event
- Consolidate Queue Item view where Print Job Qty > 1
- 3MF: leverage slicing config embedded in project files

#### 5. Retail Integration - Experimental Public Release
  - Manual order creation (simple group of SKUs w/ qty)
  - Etsy Integration - pull orders from Etsy
  - Shopify integration - pull orders from Shopify
  - Match 1:1 on SKU from
  - Fuzzy SKU matching with Variant Mapping 

## Short-Term Roadmap (Next 3-6 Months)

#### 6. Bambu Lab Flagship Launch
  - Planning time to integrate and test upcoming Bambu Lab hardware releases

#### 7. Printer Compatibility
  - Printago OctoPrint plugin
  - Klipper Support
  - Part-Volume check in Printer matching in Gutenbed
  - Manual CRUD Slicing Profiles

#### 8. FabMatic Enhancements
  - Configure cool-to temp within Printago UI
  - Add "Scripts" section to the UI, allowing users to save GCODE script directly
  - Assign clearing scripts to printers, possibly to the part-level
  - Printago will send the clearing script manually as a separate job, no need for "end gcode"
  - AI "empty bed" detection

## Longer-Term Vision (6+ Months)

#### 9. Mobile App 
  - Push notifications
  - Filament Inventory Scanner
  
#### 10. Inventory Control
  - Filament consumption tracking
  - Filament check-in (via Mobile App)
  - Auto-replenishment system
  - Material optimization suggestions

#### 11. Multi-User Support
  - Advanced access control (ACL)
  - Multi-user store management
  - Printer sharing capabilities

#### 12. Printer Sharing
  - Sharing Printers with other Printago users 

#### 13. Retail Integration V2 
  - Driven by user feedback
  - Potential marketplace integrations including Amazon, eBay, TikTok Store, and Facebook Marketplace

### Additional Features
  - Advanced queue prioritization (low priority jobs)
  - Digital delivery system (support digital file delivery system)
  - Comprehensive reporting tools

## Community Requested Features

We're actively collecting feedback and incorporating user suggestions into our roadmap. Some popular requests we're evaluating include:

- Advanced print bed optimization strategies
- Improved notification systems
- Expanded customization options for OpenSCAD

## Contributing

Your feedback shapes our roadmap! If you have feature requests or suggestions, please join our [Discord community](https://discord.gg/RCFA2u99De)

:::note

This roadmap is not exhaustive and may change based on user needs and technical considerations. Dates and features are subject to change as we continuously improve Printago.

:::