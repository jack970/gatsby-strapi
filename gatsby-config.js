module.exports = {
  siteMetadata: {
    title: `Prefeitura`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ipasc`,
    siteUrl: `https://prefeitura-ipasc.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/utils/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `institucional`,
        path: `${__dirname}/posts_institucional`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `beneficios`,
        path: `${__dirname}/posts_beneficios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/static/utils/pdf`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugin: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`,
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              name: `pdf`,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, 
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
