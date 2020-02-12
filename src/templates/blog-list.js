import React from 'react'
import { graphql } from 'gatsby'
import PostItemNotices from '../components/PostItemNotices'
import Layout from "../components/LayoutNotices"
import SEO from "../components/seo"
import styled from 'styled-components'
import Pagination from '../components/Pagination'

export const TitleWrapper = styled.h1`
font-size: 4rem;
font-weight: 700;
`

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage -1 === 1 ? '/notícias' : `/notícias/page/${currentPage -1}`
    const nextPage =`/notícias/page/${currentPage + 1} `

    return(
        <Layout>
            <SEO title="Notícias" />
            <TitleWrapper>
            <h1> Notícias</h1>
            </TitleWrapper>
            { postList.map(({ 
            node: { 
                frontmatter: { title, description, date, image: { childImageSharp: { fluid }}},
                fields: {slug}
            }
            }, i) => (
            <PostItemNotices key={i}
                slug={slug}
                title={title}
                description={description}
                date={date}
                fluid = { fluid }
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
    query postList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {order: DESC, fields: frontmatter___date},
            limit: $limit,
            skip: $skip
            ) {
        edges {
            node {
            fields {
                slug
            }
            frontmatter {
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                image {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            excerpt
            }
        }
        }
    }     
    `

export default BlogList