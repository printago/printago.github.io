# Claude Testing Guide for Printago Documentation

## Quick Reference for Documentation Updates

### Authentication & URLs

**Preview Site:** `https://new.printago.io` (use this for screenshots since it's a preview environment)
**Production Site:** `https://app.printago.io` (same interface, production data)

### Using Playwright MCP Server

The Playwright MCP tools are available and work great for this. Key functions:
- `mcp__playwright__browser_navigate` - Navigate to URLs
- `mcp__playwright__browser_snapshot` - Get accessibility tree (useful for understanding page structure)
- `mcp__playwright__browser_click` - Click elements
- `mcp__playwright__browser_take_screenshot` - Take screenshots
- `mcp__playwright__browser_type` - Type into text fields
- `mcp__playwright__browser_wait_for` - Wait for time/text to appear

**Important:** After logging in, wait 2 seconds for the realtime service to connect:
```javascript
await mcp__playwright__browser_wait_for({ time: 2 })
```

### Screenshot Best Practices

1. **Use viewport screenshots for dialogs/modals** - More focused, cleaner
   ```javascript
   mcp__playwright__browser_take_screenshot({ filename: "dialog-name.png" })
   ```

2. **Use full-page screenshots sparingly** - Only for main list pages
   ```javascript
   mcp__playwright__browser_take_screenshot({
     filename: "main-page.png",
     fullPage: true
   })
   ```

3. **Screenshot file locations:**
   - Screenshots save to `.playwright-mcp/` directory
   - Copy to `docs/commerce/images/` for documentation
   - Reference in markdown as `![Description](./images/filename.png)`

### Key Navigation Paths

**Main Menu Structure:**
- Products → SKU Variant Setup
- Products → SKUs
- Products → Parts

**Finding Test Data:**
Search in the SKUs page:
- `PER001` - OpenSCAD example with personalization and text parameters
- `CORE1` - 3MF multi-color example (Planet Earth Model)

### Typical Documentation Update Workflow

1. **Navigate and screenshot main pages:**
   - SKU Variant Setup main page
   - Create/Edit dialogs

2. **Show the complete flow:**
   - Creating a variant
   - Adding properties
   - Adding variant values
   - Assigning variants to SKUs
   - Configuring parts (OpenSCAD parameters, 3MF color slots)

3. **Capture before AND after states:**
   - Dialog with options available (before selection)
   - Dialog with options selected (after selection)
   - Final configuration showing "Overridden" badges

### Common Clickpaths to Verify

Check these against actual UI:
- Button labels: `New Variant` not `+ New Variant`
- Menu paths: `Products → SKU Variant Setup` not `Commerce → ...`
- Dialog titles match exactly
- Field placeholders and labels

### Test Data Examples

**PER001 (OpenSCAD):**
- Has "Size" variant with text property `scad_size`
- Has "Personalization" variant with property `Value`
- Parameters: `size_in_inches`, `name_text`
- Located in: `October_25_testing` folder

**CORE1 (3MF Multi-color):**
- Planet Earth Model
- Has multiple color slots (2-6)
- Good for testing variant property mappings
- Located in: `multiplate testing` folder

**Multiplayer Joy-Con Grip #2 (Variant Values):**
- Has "Grip Color" and "SL+SR Button Color" properties
- Variant values: "Hero" (Red/Cobalt Blue), "Sidekick" (Bambu Green/Jade White)
- Located in: SKU Variant Setup page

### Documentation Structure

```
docs/
  commerce/
    sku-variants.md          # Main doc file
    images/                  # Screenshots go here
      *.png
```

### Interface Updates to Watch For

The interface was recently updated with cleaner styling. Always:
1. Refresh the page after logging in to ensure realtime connection
2. Take fresh screenshots even if you think they haven't changed
3. Check that terminology in docs matches UI labels exactly

### Time-Saving Tips

1. **Use search instead of navigation** - Searching for SKU codes is faster than drilling into folders
2. **Screenshot in context** - Show enough of the UI to orient users but crop to relevant content
3. **Batch similar screenshots** - Do all dialog screenshots, then all configuration screenshots
4. **Use TodoWrite tool** - Track progress for complex multi-step tasks
5. **Wait for realtime sync** - UI may not show variants immediately after adding them; refresh if needed

### Common Issues

1. **Variants not appearing after adding** - Refresh the page to reconnect realtime service
2. **Screenshots too large** - Use viewport screenshots for dialogs, not fullPage
3. **Wrong terminology** - Always verify button/menu labels match the actual UI
4. **Missing link icons** - For OpenSCAD parameters, look for link/unlink buttons next to each parameter row
