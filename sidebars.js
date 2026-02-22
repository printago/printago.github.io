// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // 1. Quick Start
    'getting-started/quick-start-guide',

    // 2. Overview
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/what-is-printago',
        'overview/key-concepts',
        'overview/dashboard',
      ],
    },

    // 3. Connecting Printers
    {
      type: 'category',
      label: 'Connecting Printers',
      items: [
        'connecting-printers/bambu-lab-integration',
        'connecting-printers/printago-fuse',
        'connecting-printers/klipper-integration',
        'connecting-printers/prusa-link',
        'connecting-printers/virtual-printers',
      ],
    },

    // 4. Parts & Files
    {
      type: 'category',
      label: 'Parts & Files',
      items: [
        'parts/part-management',
        'parts/stl-step-parts',
        'parts/3mf-project-files',
        'parts/gcode-3mf-files',
        {
          type: 'category',
          label: 'OpenSCAD',
          items: [
            'parts/openscad/openscad-intro',
            'parts/openscad/openscad-parts',
            'parts/openscad/colorscad',
            'parts/openscad/libraries',
          ],
        },
        {
          type: 'category',
          label: 'CadQuery & build123d',
          items: [
            'parts/cadquery/cadquery-intro',
          ],
        },
      ],
    },

    // 5. Printing
    {
      type: 'category',
      label: 'Printing',
      items: [
        'printing/printing-parts',
        'printing/print-queue',
        'printing/materials',
        {
          type: 'category',
          label: 'Slicer Profiles',
          items: [
            'printing/slicer-profiles',
            'printing/cloud-slicer',
            'printing/import-profiles',
          ],
        },
        {
          type: 'category',
          label: 'Printer Management',
          items: [
            'printing/printer-management/printer-management',
            'printing/printer-management/printer-control-panel',
            'printing/printer-management/printer-tags',
          ],
        },
        'printing/fabmatic-continuous-printing',
      ],
    },

    // 6. Commerce
    {
      type: 'category',
      label: 'Commerce',
      items: [
        'commerce/sku-management',
        'commerce/sku-variants',
        'commerce/printing-skus',
        'commerce/orders',
      ],
    },

    // 7. Integrations
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/shopify',
        'integrations/etsy',
        'integrations/shipstation',
        'integrations/shippo',
        'integrations/ebay',
      ],
    },

    // 8. Tools & Workflows
    {
      type: 'category',
      label: 'Tools & Workflows',
      items: [
        'tools/hot-drop-file-upload',
        'tools/bulk-actions',
        'tools/folders',
        'tools/global-search',
        'tools/keyboard-shortcuts',
        'tools/notifications',
        'tools/pwa-install',
      ],
    },

    // 9. Organization
    {
      type: 'category',
      label: 'Organization',
      items: [
        'organization/user-management',
        'organization/permissions',
        'organization/audit-log',
      ],
    },

    // 10. API
    {
      type: 'category',
      label: 'API',
      items: [
        'api/keys',
        'api/authentication-and-quotas',
        'api/examples',
        'api/developers-site',
      ],
    },

    // 11. Settings
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/account-settings',
        'settings/subscription-management',
      ],
    },

    // 12. Troubleshooting
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
      ],
    },

    // 13. Support
    'support',

    // Inventory is hidden from sidebar for now (files exist at docs/inventory/)
  ],
};

export default sidebars;
