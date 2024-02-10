/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Passion Corp - Go Passion Go World!`,
    description: `Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events.`,
    image: `https://passioncorp.id/social.png`,
    siteUrl: `https://passioncorp.id`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo-color.png',
      },
    },
  ]
};