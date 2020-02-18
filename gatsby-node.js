const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createPages = ({ graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
    query MyQuery{
      notices: allMarkdownRemark(
        filter: {fields: {slug: {eq: "posts"}}},
        sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter { 
              title
              description
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              
            }
          excerpt
          }
        }
      }
      institucional: allMarkdownRemark(
        filter: {fields: {slug: {eq: "institucional"}}},
        sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter { 
              title
              description
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              
            }
          excerpt
          }
        }
      }
    }
  

    `).then(result =>  {
      const posts = result.data.notices.edges
      const posts_insti = result.data.institucional.edges

      posts_insti.forEach(({node}) => {
          createPage ({
              path: `${node.fields.slug}/${node.id}`,
              component: path.resolve('./src/templates/institucional.js'),
              context: {
                  id: node.id
              }
          })
      })

      posts.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.id}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                id: node.id
            }
        })
      })

      //Create Multiples Nodes
      /*posts.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.id}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                id: node.id
            }
        })
      })*/
    

      const postsPerPage = 6
      const numPages = Math.ceil(posts.length / postsPerPage)

      Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? '/notícias' : `notícias/page/${index + 1}`,
          component: path.resolve('./src/templates/blog-list.js'),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
        })
      })
    })
}