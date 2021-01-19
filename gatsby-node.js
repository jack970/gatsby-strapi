const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`
    })
  }
}


exports.createPages = ({ graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
    {
      notices: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
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
              path: node.fields.slug,
              component: path.resolve('./src/templates/blog-post.js'),
              context: {
                  slug: node.fields.slug
              }
          })
      })

      const postsPerPage = 2
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