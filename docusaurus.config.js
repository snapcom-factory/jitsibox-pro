// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jitsi Pro',
  tagline: 'Créer une alternative à Zoom/Microsoft Teams Rooms',
  url: 'https://snapcom-factory.github.io',
  baseUrl: '/jitsibox-pro/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-jitsi.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'snapcom-factory', // Usually your GitHub org/user name.
  projectName: 'jitsibox-pro', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },



  // customFields: {
  //   image: 'img/logo-jitsi.png',
  //   keywords: [],
  // },



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          editUrl: ({locale,  docPath}) => {  
          if (locale !== 'fr') {
            return `https://github.com/snapcom-factory/jitsibox-pro/tree/wiki/new-project/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
          }
          return `https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/new-project/docs/${docPath}`;
        },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-jitsi.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/snap.png',
        },

        items: [
          {
            type: 'doc',
            docId: 'jitsi-pro-read-me',
            position: 'left',
            label: 'Menu',
          },
          {
            href: 'https://github.com/snapcom-factory/jitsibox-pro',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
            ],
          },
          {
            title: 'Communité',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/snapcom-factory/jitsibox-pro',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
