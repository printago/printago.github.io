// Load environment variables from .env file
require('dotenv').config();

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Printago Documentation',
  tagline: 'Printago. Make More.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.printago.io',
  baseUrl: '/',
  organizationName: 'printago', 
  projectName: 'printago.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/fuse',
            to: '/docs/connecting-printers/printago-fuse',
          },
          // getting-started/ → overview/
          {
            from: '/docs/getting-started/intro',
            to: '/docs/overview/what-is-printago',
          },
          {
            from: '/docs/getting-started/key-concepts',
            to: '/docs/overview/key-concepts',
          },
          // dashboard-overview → overview/dashboard
          {
            from: '/docs/dashboard-overview',
            to: '/docs/overview/dashboard',
          },
          // printer-setup/ → connecting-printers/
          {
            from: '/docs/printer-setup/bambu-lab-integration',
            to: '/docs/connecting-printers/bambu-lab-integration',
          },
          {
            from: '/docs/printer-setup/klipper-integration',
            to: '/docs/connecting-printers/klipper-integration',
          },
          {
            from: '/docs/printer-setup/printago-fuse',
            to: '/docs/connecting-printers/printago-fuse',
          },
          // advanced-features/ → connecting-printers/
          {
            from: '/docs/advanced-features/virtual-printers',
            to: '/docs/connecting-printers/virtual-printers',
          },
          // products/ → parts/
          {
            from: '/docs/products/part-management',
            to: '/docs/parts/part-management',
          },
          {
            from: '/docs/products/stl-step-parts',
            to: '/docs/parts/stl-step-parts',
          },
          {
            from: '/docs/products/3mf-project-files',
            to: '/docs/parts/3mf-project-files',
          },
          {
            from: '/docs/products/gcode-3mf-files',
            to: '/docs/parts/gcode-3mf-files',
          },
          {
            from: '/docs/products/openscad/openscad-intro',
            to: '/docs/parts/openscad/openscad-intro',
          },
          {
            from: '/docs/products/openscad/openscad-parts',
            to: '/docs/parts/openscad/openscad-parts',
          },
          {
            from: '/docs/products/openscad/colorscad',
            to: '/docs/parts/openscad/colorscad',
          },
          {
            from: '/docs/products/openscad/libraries',
            to: '/docs/parts/openscad/libraries',
          },
          // print-queue-management → printing/print-queue
          {
            from: '/docs/print-queue-management',
            to: '/docs/printing/print-queue',
          },
          // features/ → printing/ or tools/
          {
            from: '/docs/features/fabmatic-continuous-printing',
            to: '/docs/printing/fabmatic-continuous-printing',
          },
          {
            from: '/docs/features/bulk-actions',
            to: '/docs/tools/bulk-actions',
          },
          {
            from: '/docs/features/folders',
            to: '/docs/tools/folders',
          },
          {
            from: '/docs/features/global-search',
            to: '/docs/tools/global-search',
          },
          {
            from: '/docs/features/hot-drop-file-upload',
            to: '/docs/tools/hot-drop-file-upload',
          },
          {
            from: '/docs/features/keyboard-shortcuts',
            to: '/docs/tools/keyboard-shortcuts',
          },
          {
            from: '/docs/features/notifications',
            to: '/docs/tools/notifications',
          },
          {
            from: '/docs/features/pwa-install',
            to: '/docs/tools/pwa-install',
          },
          // api-documentation → api/
          {
            from: '/docs/api-documentation',
            to: '/docs/api/api-documentation',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove editUrl if you don't want "edit this page" links
          // editUrl: 'https://github.com/printago/printago.github.io/edit/main/',
        },
        blog: false, // Disable blog if you're not using it
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/logo.svg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4, // Include h4 headings in the right sidebar TOC
    },
    // Algolia DocSearch configuration (only enabled if all required env vars are set)
    ...(process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY && process.env.ALGOLIA_INDEX_NAME ? {
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
      }
    } : {}),
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Printago Docs',
      logo: {
        alt: 'Printago Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://app.printago.io',
          label: 'app.printago',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More Links',
          items: [
            {
              label: 'Blog',
              href: 'https://www.printago.io/blog',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/RCFA2u99De',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/realPrintago',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Printago`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;