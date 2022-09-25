module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `ITDEV-164 Gatsby Blog`,
    author: `Steve Yunker`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `Steve Yunker`,
      company: `Blogs Inc`,
      address: `PO Box 1234`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: `4hrsbqykvf92`,
          accessToken: `HTp60XeeiXNsTQ6jBgGwdToLShh5sfjnIX6AAQaglV8`
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
