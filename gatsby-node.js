const path = require('path')
const _ = require("lodash")

exports.createPages = ({ graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
    query MyQuery{
      notices: allStrapiIpascPosts(sort: {order: DESC, fields: data}) {
        edges {
          node {
            title
            id
          }
        }
      }
      tagsGroup: allStrapiIpascPosts {
        group(field: tags) {
          fieldValue
          totalCount
        }
      }
    }
    `).then(result =>  {
      const posts = result.data.notices.edges
      const tags = result.data.tagsGroup.group

      posts.forEach(({node}) => {
          createPage ({
              path: `/${_.kebabCase(node.title)}`,
              component: path.resolve('./src/templates/blog-post.js'),
              context: {
                  id: node.id
              }
          })
      })

      const postsPerPage = 6
      const numPages = Math.ceil(posts.length / postsPerPage)

      tags.forEach((tag, i) => {
        const link = `/${_.kebabCase(tag.fieldValue)}`
        const numPages = Math.ceil( tag.totalCount / postsPerPage)

        Array.from({
          length: numPages,
        }).forEach((_, i) => {
          createPage ({
            path: i === 0 ? link : `${link}/page/${i + 1}`,
            component: path.resolve('./src/templates/blog-list.js'),
            context: {
              tag: tag.fieldValue,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            }
          })
        })
      })
    })
}