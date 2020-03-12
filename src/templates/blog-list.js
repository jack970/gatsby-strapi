import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PostItemNotices from '../components/PostItemNotices'
import Layout from "../components/LayoutNotices"
import SEO from "../components/seo"
import styled from 'styled-components'

export const TitleWrapper = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: var(--texto);
`

const BlogList = () => {

    const { allStrapiPosts } = useStaticQuery(graphql`
    query QueryPostList {
        allStrapiPosts(sort: {order: DESC, fields: data}) {
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
    `)

    const queryPostList = allStrapiPosts.edges

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
            }, i) => (
            <PostItemNotices key={id}
                slug={`/noticias/${id}`}
                title={title}
                description={description}
                date={data}
                fluid={ fluid}
                />
            ))}
      </Layout>
    )
}

export default BlogList