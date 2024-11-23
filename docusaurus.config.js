// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TransSoul Wiki',
  tagline: '一個為跨性別者提供服務的知識平台',
  favicon: 'img/logo.jpg',

  // Production URL of the site
  url: 'https://transsoul.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'TransSoul',
  projectName: 'Wiki',

  onBrokenLinks: 'throw', // Option to throw error on broken links
  onBrokenMarkdownLinks: 'warn', // Option to show a warning on broken markdown links

  // Internationalization
  i18n: {
    defaultLocale: 'zh-hk', // Set default locale to Traditional Chinese (Hong Kong)
    locales: ['zh-hk'], // Supported locales
  },

  // Presets to configure various parts of the site
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js', // Path to your sidebar config
          editUrl: 'https://github.com/TransSoul/Wiki/tree/main/', // URL for editing the docs
        },
        theme: {
          customCss: './src/css/custom.css', // Path to your custom CSS
        },
      },
    ],
  ],

  // Theme configuration for Navbar, Footer, and Prism (code highlighting)
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg', // Image for social sharing

    // Navbar configuration
    navbar: {
      title: 'TransSoul',
      logo: {
        alt: 'TransSoul Wiki Logo',
        src: 'img/logo.jpg', // Logo image path
      },
      items: [
        {
          type: 'docSidebar', // Link to docs sidebar
          sidebarId: 'tutorialSidebar', // Sidebar configuration ID
          position: 'left',
          label: '文檔', // Label for the docs section
        },{to: 'blog', label: 'News', position: 'left'},
        {
          href: 'https://github.com/TransSoul/Wiki',
          label: 'GitHub', // GitHub link
          position: 'right', // Right side of the navbar
        },
      ],
    },

    // Footer configuration
    footer: {
      style: 'dark', // Dark style for footer
      links: [
        {
          title: '文檔', // Section title
          items: [
            {
              label: '介绍', // Item label
              to: '/docs', // Link to the "intro" document
            },
          ],
        },
        {
          title: '社交賬號', // Social accounts section
          items: [
            {
              label: 'Bluesky', // Social media link label
              href: 'https://bsky.app/profile/transsoul.pages.dev', // Social media link (X/Twitter)
            },{
              label: 'X', // Social media link label
              href: 'https://x.com/TransSoul_HK', // Social media link (X/Twitter)
            }
          ],
        },
        {
          title: '社區', // Social accounts section
          items: [
            {
              label: 'Discord', // Social media link label
              href: 'https://discord.gg/mD32PfA29v', // Social media link (Discord)
            },{
              label: 'Telegram', // Social media link label
              href: 'https://t.me/+aIGddEwR4DQxNTU9', // Social media link (Discord)
            },
          ],
        },
        {
          title: '更多', // More section
          items: [
            {
              label: 'GitHub', // GitHub link
              href: 'https://github.com/TransSoul/Wiki', // Docusaurus GitHub link
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TransSoul Team.`,
    },

    // Code syntax highlighting configuration
    prism: {
      theme: prismThemes.github, // Light theme for code blocks
      darkTheme: prismThemes.dracula, // Dark theme for code blocks
    },
  },

  // Plugins configuration (e.g., search plugin)
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      {
        hashed: true, // Enable long-term cache for search index file
        language: ['zh', 'en'], // Supported languages for search
      },
    ],
  ],
};

export default config;
