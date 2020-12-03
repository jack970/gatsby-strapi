import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/LayoutNotices"
import PostItemNotices from "../components/PostItemNotices"
import { graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import styled from 'styled-components'
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

const PesquisaPage = ({data, location}) => {
    const allPosts = data.allStrapiPostsDoIpasc.edges
    const params = new URLSearchParams(location.search.slice(1))
    const q = params.get("s") || ""

    const posts = allPosts || []

    const filteredData = posts.filter(post => {
        const { content, title, description } = post.node
    
        return(
          title.toLowerCase().includes(q.toLowerCase()) ||
          description.toLowerCase().includes(q.toLowerCase()) ||
          content.toLowerCase().includes(q.toLowerCase())
        )
        
    })

    const hasSearchResults = filteredData.length !== 0 && q !== ""
    const setposts = hasSearchResults ? filteredData : [] 

    return (
        <Layout>
            <SEO title={`Pesquisa por ${q}`} />
            <TitleWrapper>Pesquisa por {q} </TitleWrapper>
            {hasSearchResults ? (
                setposts.map(({
                    node: {
                        thumbnail: {
                            childImageSharp: { fluid },
                        },
                        tags,
                        title,
                        description,
                        id,
                        data,
                    },
                }, i) => (
                    <PostItemNotices 
                        key={id}
                        title={title}
                        slug={`/${kebabCase(tags)}/${kebabCase(title)}`}
                        description={description}
                        date={data}
                        fluid={fluid}
                    />
                ))
            ) : (
                <h1>Nada Encontrado</h1>
            )}
        </Layout>
    )
}

export default PesquisaPage

export const pageQuery = graphql`
    query SearchFilter {
        allStrapiPostsDoIpasc(sort: { order: DESC, fields: data }) {
            edges {
                node {
                    id
                    title
                    data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    tags
                    content
                    thumbnail {
                        childImageSharp {
                        fluid(maxWidth: 300) {
                            src
                        }
                    }
                }
                }
            }
        }
    }
`