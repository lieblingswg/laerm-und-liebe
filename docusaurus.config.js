
module.exports = {
  title: '📢 Lärm & Liebe ❤️',
  tagline: '2. Juli 2022',
  projectName: 'laerm-und-liebe',
  organizationName: 'lieblingswg',
  url: 'https://lieblingswg.github.io',
  baseUrl: '/laerm-und-liebe/',
  favicon: 'img/Logo.ico',
  themeConfig: {
    navbar: {
      title: 'Lärm & Liebe',
      logo: {
        alt: 'Lärm & Liebe Logo',
        src: 'img/Logo.svg',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'FAQ',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Signal',
              href: 'https://signal.group/#CjQKIKsnrE28k6-TgJTVIYLEqxMQql4RYMf_1EqDOVdYxJxhEhDjks_SyemTJj4i37WxLEJL',
            },
            {
              label: 'WhatsApp',
              href: 'https://chat.whatsapp.com/GQHIec1Ne4v84f5mPDc2kd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deine Lieblings-WG.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/lieblingswg/laerm-und-liebe/edit/master/website/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/lieblingswg/laerm-und-liebe/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
