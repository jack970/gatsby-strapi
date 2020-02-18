import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from 'gatsby'
import PostItem from "../components/PostItem"
import SliderShow from '../components/SliderShow'
import ContainerInfo from '../components/ContainerInfo'
import Transparencia from "../components/Transparencia"
import styled from 'styled-components'

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
  padding: .25rem .5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .2rem;
  color: #007bff;
  border: 1px solid #007bff;
  transition: all 0.4s;
  text-decoration: none;

  &:hover {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
  }

`

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(limit: 3,  
        sort: {order: DESC, fields: frontmatter___date},
        filter: {fields: {slug: {eq: "posts"}}}) {
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
  `)

 const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <SliderShow link1='/noticias' link2='/' link3='/'/>  
      <ContainerNoticias>
        <ContainersubNoticias>
        { postList.map(({ 
          node: { 
            frontmatter: { title, description, date, image: { childImageSharp: { fluid }}},
            fields: {slug},
            id
          }
        }, i) => (
          <PostItem key={i}
            slug={`${slug}/${id}`}
            title={title}
            description={description}
            date={date}
            fluid={ fluid }
            />
        ))}
        </ContainersubNoticias>
      <BtnContainer>
        < BtnWrapper to='/notícias'>
          Ver Notícias
        </BtnWrapper>
      </BtnContainer>
      </ContainerNoticias>
      <ContainerInfo />
      <Transparencia />
    </Layout>
  )
    
}

export default IndexPage
