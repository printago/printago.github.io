// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Printago Documentation',
  tagline: 'Printago. Make More.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  //'https://docs.printago.io',
  url: 'https://printago.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'printago', 
  projectName: 'printago.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  
  // @ts-ignore
  future: {
    experimental_faster: true
  },
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
        copyright: `Copyright © ${new Date().getFullYear()} Printago`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
