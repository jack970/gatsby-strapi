const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      description: String!
      image: String
    }
  `)
}


exports.onCreateNode = async({ 
  node, 
  getNode, 
  actions,
  store,
  cache,
  createNodeId
 }) => {
  const { createNodeField } = actions
  const { createNode } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark" && 
      node.frontmatter.image !== null
      ) {
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

    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
    
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
      beneficios: allMarkdownRemark(
        filter: {fields: {slug: {eq: "beneficios"}}},
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
      servicos: allMarkdownRemark(
        filter: {fields: {slug: {eq: "serviços"}}},
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
      publicacoes: allMarkdownRemark(
        filter: {fields: {slug: {eq: "publicações"}}},
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
      conselho_previdencia: allMarkdownRemark(
        filter: {fields: {slug: {eq: "conselho-previdencia"}}},
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
      conselho_investimentos: allMarkdownRemark(
        filter: {fields: {slug: {eq: "conselho-investimentos"}}},
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
      const posts_beneficios = result.data.beneficios.edges
      const posts_servicos = result.data.servicos.edges
      const posts_publicacoes = result.data.publicacoes.edges
      const posts_investimentos = result.data.conselho_investimentos.edges
      const posts_previdencia = result.data.conselho_previdencia.edges

      posts_insti.forEach(({node}) => {
          createPage ({
              path: `${node.fields.slug}/${node.frontmatter.title}`,
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
      posts_beneficios.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/beneficios.js'),
            context: {
                id: node.id
            }
        })
      })

      posts_servicos.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/serviços.js'),
            context: {
                id: node.id
            }
        })
      })

      posts_publicacoes.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/publicações.js'),
            context: {
                id: node.id
            }
        })
      })

      posts_investimentos.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/investimentos.js'),
            context: {
                id: node.id
            }
        })
      })

      posts_previdencia.forEach(({node}) => {
        createPage ({
            path: `${node.fields.slug}/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/previdencia.js'),
            context: {
                id: node.id
            }
        })
      })

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