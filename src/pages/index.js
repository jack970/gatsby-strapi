import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostItem from "../components/PostItem"
import SliderShow from "../components/SliderShow"
import ContainerInfo from "../components/ContainerInfo"
import Transparencia from "../components/Transparencia"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

export const ContainersubNoticias = styled.div``

export const ContainerNoticias = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0 3rem;
`
export const BtnContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const BtnWrapper = styled(Link)`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: var(--texto);
  border: 1px solid #007bff;
  transition: all 0.4s;
  text-decoration: none;

  &:hover {
    color: var(--white);
    background-color: #007bff;
    border-color: #007bff;
  }
`

const IndexPage = () => {
  const { allStrapiPostsDoIpasc } = useStaticQuery(graphql`
    query PostList {
      allStrapiPostsDoIpasc(
        limit: 3
        sort: { order: DESC, fields: data }
        filter: { tags: { eq: "Notícias" } }
      ) {
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const postList = allStrapiPostsDoIpasc.edges

  return (
    <Layout>
      <SEO title="Home" />
      <SliderShow link1="/institucional/historia" link2="/" link3="/noticias" />
      <ContainerNoticias>
        <ContainersubNoticias>
          {postList.map(
            (
              {
                node: {
                  title,
                  description,
                  tags,
                  data,
                  id,
                  thumbnail: {
                    childImageSharp: { fluid },
                  },
                },
              },
              i
            ) => (
              <PostItem
                key={id}
                slug={`/${kebabCase(tags)}/${kebabCase(title)}`}
                title={title}
                description={description}
                date={data}
                fluid={fluid}
              />
            )
          )}
        </ContainersubNoticias>
        <BtnContainer>
          <BtnWrapper to="/noticias">Ler Notícias</BtnWrapper>
        </BtnContainer>
      </ContainerNoticias>
      <ContainerInfo />
      <Transparencia />
    </Layout>
  )
}

export default IndexPage
