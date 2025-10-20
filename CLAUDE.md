# Claude Guide for Printago Documentation

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
   - Copy to appropriate `docs/*/images/` directory for documentation
   - Reference in markdown as `![Description](./images/filename.png)`

### Navigating the Application

Use the main menu to navigate to the feature you're documenting. Use the search function when looking for specific items (faster than drilling through menus).

### Typical Documentation Update Workflow

1. **Navigate and screenshot main pages:**
   - Main feature page (list/overview)
   - Create/Edit dialogs
   - Settings or configuration screens

2. **Show the complete flow:**
   - Creating new items
   - Editing existing items
   - Configuring options
   - Any multi-step workflows

3. **Capture before AND after states:**
   - Dialog with options available (before selection)
   - Dialog with options selected (after selection)
   - Final result showing applied changes

### Common Clickpaths to Verify

Always verify these match the actual UI:
- Button labels (exact text, capitalization)
- Menu paths (exact navigation sequence)
- Dialog titles
- Field placeholders and labels
- Terminology consistency

### Documentation Structure

```
docs/
  commerce/
    images/                  # Commerce-related screenshots
  design/
    images/                  # Design-related screenshots
  [feature-area]/
    feature-name.md          # Main doc file
    images/                  # Screenshots go here
      *.png
```

### Interface Updates to Watch For

The interface was recently updated with cleaner styling. Always:
1. Refresh the page after logging in to ensure realtime connection
2. Take fresh screenshots even if you think they haven't changed
3. Check that terminology in docs matches UI labels exactly

### Time-Saving Tips

1. **Use search instead of navigation** - Searching for specific items is faster than drilling through menus
2. **Screenshot in context** - Show enough of the UI to orient users but crop to relevant content
3. **Batch similar screenshots** - Do all dialog screenshots, then all configuration screenshots
4. **Use TodoWrite tool** - Track progress for complex multi-step tasks
5. **Wait for realtime sync** - UI may not show changes immediately; refresh if needed

### Common Issues

1. **Changes not appearing immediately** - Refresh the page to reconnect realtime service
2. **Screenshots too large** - Use viewport screenshots for dialogs, not fullPage
3. **Wrong terminology** - Always verify button/menu labels match the actual UI
4. **Missing UI elements** - Wait for page to fully load before taking screenshots
