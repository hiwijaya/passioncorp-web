/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Passion Corp - Go Passion Go World!`,
    description: `Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events.`,
    image: `/social.png`,
    siteUrl: `https://passioncorp.id`,
    twitterUsername: `@passioncorp.id`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `posts`,
          path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo-color.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-9W4FVNS6XV'
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        }
      }
    }, 
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5CK7GCZF',
        includeInDevelopment: false,
        defaultDataLayer: { 
          platform: 'gatsby'
        }
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
  ]
};