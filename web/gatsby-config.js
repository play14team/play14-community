/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * All configuration related things are here
 * 
 * This is configuration file
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `#play14 community`,
    description: `the #play14 community website - We believe in playfulness`,
    author: `Cédric Pontet`,
    email: `cedric@play14.org`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes : [
          `blogs`,
          `player`,
          `event`
        ],
      },
    },
    `gatsby-plugin-offline`,
  ]
}
