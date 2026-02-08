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