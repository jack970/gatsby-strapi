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
    color: var(--texto);
`

const BlogList = props => {
    const { currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage -1 === 1 ? '/noticias' : `/noticias/page/${currentPage -1}`
    const nextPage =`/noticias/page/${currentPage + 1} `

    const queryPostList = props.data.allStrapiPosts.edges

    return(
        <Layout>
            <SEO title="Notícias" />
            <TitleWrapper>
                Notícias
            </TitleWrapper>
            { queryPostList.map(({ 
            node: { 
                image: { childImageSharp: { fluid }},
                title,
                description,
                id,
                data
            }
            }) => (
            <PostItemNotices key={id}
                slug={`/noticias/${id}`}
                title={title}
                description={description}
                date={data}
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
query QueryPostList($skip: Int!, $limit: Int!) {
    allStrapiPosts(sort: {order: DESC, fields: data},
        limit: $limit,
        skip: $skip) {
        edges {
            node {
                id
                title
                data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                image {
                    childImageSharp {
                        fluid(maxWidth: 900, maxHeight: 900) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
}
`

export default BlogList