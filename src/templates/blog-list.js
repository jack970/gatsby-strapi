import React from 'react'
import { graphql } from 'gatsby'
import PostItemNotices from '../components/PostItemNotices'
import Layout from "../components/LayoutNotices"
import SEO from "../components/seo"
import styled from 'styled-components'
import Pagination from '../components/Pagination'
import kebabCase from 'lodash/kebabCase'
import media from 'styled-media-query'

export const TitleWrapper = styled.h1`
    font-weight: 700;
    color: var(--texto);
    font-size: 3rem;

    ${media.lessThan("large")`
        text-align: center;
        overflow-wrap: break-word;
        font-size: 3rem;
    `}
`

const BlogList = props => {
    const { currentPage, numPages, tag} = props.pageContext
    const slugTag = kebabCase(tag)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage -1 === 1 ? `/${slugTag}` : `/${slugTag}/page/${currentPage -1}`
    const nextPage =`/${slugTag}/page/${currentPage + 1} `

    const queryPostList = props.data.allMarkdownRemark.edges

    return(
        <Layout>
            <SEO title="" />
            <TitleWrapper>
                {tag}
            </TitleWrapper>
            { queryPostList.map(({ 
            node: {
                fields: {
                    slug
                },
                frontmatter: {
                    thumbnail: { childImageSharp: { fluid }},
                    title,
                    description,
                    date
                }
            }
            }, i) => (
            <PostItemNotices key={i}
                slug={slug}
                title={title}
                description={description}
                date={ date}
                fluid={ fluid}
                />
            ))}
            <Pagination isFirst={isFirst}
             isLast={isLast} 
             currentPage={currentPage} 
             numPages={numPages} 
             prevPage={prevPage} 
             nextPage={nextPage}/>
      </Layout>
    )
}

export const query = graphql`
query QueryPostList($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}
        filter: {frontmatter: {tags: {in: [$tag]}}}
        limit: $limit,
        skip: $skip) {
        edges {
            node {
                fields {
                    slug    
                }
                frontmatter {
                    title
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 900, maxHeight: 900) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    tags
                }
            }
        }
    }
}
`

export default BlogList