require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Carole Tracey — Freelance Architect',
    description:
      'Experienced freelance architect specialising in residential projects.',
    url: 'https://www.caroletracey.com',
    socialImage: '/images/social-share.png',
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
    webfontLoadedClass: 'fonts-loaded'
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
        background_color: '#f8f9f9',
        theme_color: '#f8f9f9',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
        include_favicon: true
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion'
  ]
};
