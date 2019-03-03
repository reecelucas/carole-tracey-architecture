require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Carole Tracey — Freelance Architect',
    description:
      'Experienced freelance architect specialising in residential projects.',
    siteUrl: 'https://www.caroletracey.com',
    socialImage: '/images/social.jpg',
    webfonts: [
      {
        name: 'Nunito Sans',
        path: '/fonts/nunito-sans-regular.woff2',
        urls: [
          "url(/fonts/nunito-sans-regular.woff2) format('woff2')",
          "url(/fonts/nunito-sans-regular.woff) format('woff')"
        ],
        meta: { weight: '400' }
      }
    ],
    webfontLoadedClass: 'fonts-loaded',
    navItems: [
      {
        id: 'cta-nav-about',
        label: 'About',
        href: '#about'
      },
      {
        id: 'cta-nav-services',
        label: 'Services',
        href: '#services'
      },
      {
        id: 'cta-nav-testimonials',
        label: 'Testimonials',
        href: '#testimonials'
      },
      {
        id: 'cta-nav-process',
        label: 'Process',
        href: '#process'
      },
      {
        id: 'cta-nav-contact',
        label: 'Contact',
        href: '#contact'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'carole-tracey-architecture',
        accessToken: `${process.env.API_KEY}`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'caroletracey.com',
        short_name: 'caroletracey.com',
        start_url: '/',
        background_color: '#f8f9f8',
        theme_color: '#f8f9f8',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
        include_favicon: true
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap'
  ]
};
