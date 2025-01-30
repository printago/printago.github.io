---
sidebar_position: 4
---

# SKU Management

SKUs (Stock Keeping Units) in Printago help you organize your products for production. A SKU can consist of one or more parts, with specific configurations for each part, making it easy to manage complex products and variations.  

## Overview

SKUs are the bridge between your 3D models and your production workflow. While Parts represent individual 3D models, SKUs represent complete products ready for production. SKUs are also what Printago leverages for e-commerce integrations.  This could be:
- A single part with specific print settings
- Multiple parts that make up a complete product
- Variations of products (like different sizes or colors)
- Customizable products with variable parameters

## Creating SKUs

:::info
You'll need at least 1 part in your Part catalog
:::

### Basic SKU Setup
1. Navigate to `Products -> SKUs`.
2. Click "Create New SKU"
3. Add one or more parts to your SKU
4. Configure print settings for each part
5. Set quantity requirements for each part

### Advanced Configuration

#### Print Settings
- Override default part settings at the SKU level
- Set specific material and color requirements
- Configure printer tag requirements

#### Customization Options
- Enable OpenSCAD parameters for customization
- Set parameter limits and defaults
- Configure which options are available to customers

## Features

### Multi-Part Products
- Combine multiple parts into a single product
- Set different print settings for each component
- Manage assembly requirements

### Color and Material Management
- Specify required colors and materials
- Set printer matching rules
- Configure AMS (Automatic Material System) requirements

### Automation Support
- FabMatic™️ compatible for continuous production
- Queue management optimization
- Automatic printer assignment based on requirements

## Production Management

### Queue Integration
SKUs automatically integrate with Printago's smart queue system:
- Parts are matched to compatible printers
- Material and color requirements are enforced
- Printer tags are respected

### Monitoring and Status
- Track production progress for all SKU components
- Monitor material usage and requirements
- View real-time production statistics

Have questions about creating SKUs? Join our [Discord community](https://discord.gg/RCFA2u99De) for latest info and help!