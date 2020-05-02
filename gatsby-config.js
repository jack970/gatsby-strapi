module.exports = {
  siteMetadata: {
    title: `IPASC`,
    description: `Instituto de previdência e assistência dos servidores de Catalão.`,
    author: `Work - Informática`,
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
        name: `pdf`,
        path: `${__dirname}/static/utils/pdf`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://3.81.21.8:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'posts', 
          'institucionals', 
          'beneficios', 
          'publicacoes', 
          'servicos', 
          'conselho-de-investimentos', 
          'conselho-de-previdencia'
        ],
        queryLimit: 1000,
      },
    },
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
        name: `Ipasc -  INSTITUTO DE PREVIDENCIA E ASSISTENCIA DOS SERVIDORES DE CATALÃO`,
        short_name: `IPASC`,
        start_url: `/`,
        background_var: `#f9f9f9`,
        theme_var: `#f9f9f9`,
        display: `minimal-ui`, 
        icon: `src/images/Logo-do-IPASC.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-offline`,
  ],
}
