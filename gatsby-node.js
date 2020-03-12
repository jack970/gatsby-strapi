const path = require('path')

exports.createPages = ({ graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
    query MyQuery{
      notices: allStrapiPosts(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      institucional: allStrapiInstitucionals(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      beneficios: allStrapiBeneficios(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      servicos: allStrapiServicos(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      publicacoes: allStrapiPublicacoes(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      conselho_previdencia: allStrapiConselhoDePrevidencia(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
          }
        }
      }
      conselho_investimentos: allStrapiConselhoDeInvestimentos(sort: {order: DESC, fields: data}) {
        edges {
          node {
            id
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
              path: `/institucional/${node.id}`,
              component: path.resolve('./src/templates/institucional.js'),
              context: {
                  id: node.id
              }
          })
      })

      posts.forEach(({node}) => {
        createPage ({
            path: `/noticias/${node.id}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                id: node.id
            }
        })
      })

      //Create Multiples Nodes
      posts_beneficios.forEach(({node}) => {
        createPage ({
          path: `/beneficios/${node.id}`,
          component: path.resolve('./src/templates/beneficios.js'),
          context: {
              id: node.id
          }
        })
      })

      posts_servicos.forEach(({node}) => {
        createPage ({
          path: `/servicos/${node.id}`,
          component: path.resolve('./src/templates/serviços.js'),
          context: {
              id: node.id
          }
        })
      })

      posts_publicacoes.forEach(({node}) => {
        createPage ({
          path: `/publicacoes/${node.id}`,
          component: path.resolve('./src/templates/publicações.js'),
          context: {
              id: node.id
          }
        })
      })

      posts_investimentos.forEach(({node}) => {
        createPage ({
          path: `/investimentos/${node.id}`,
          component: path.resolve('./src/templates/investimentos.js'),
          context: {
              id: node.id
          }
        })
      })

      posts_previdencia.forEach(({node}) => {
        createPage ({
          path: `/previdencia/${node.id}`,
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
          path: index === 0 ? '/noticias' : `noticias/page/${index + 1}`,
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