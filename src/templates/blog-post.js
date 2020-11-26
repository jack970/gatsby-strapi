import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../components/Post/styled"
import styled from "styled-components"
import Reactmarkdown from "react-markdown"
import SubMenu from "../components/Submenu"
import kebabCase from "lodash/kebabCase"

export const Divisao = styled.div`
  display: flex;
  margin-top: 10rem;
`
export const DivPost = styled.div``

const BlogPost = ({ data }) => {
  const post = data.strapiPostsDoIpasc
  const tag = kebabCase(post.tags)
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        image={post.thumbnail.childImageSharp.fluid}
      />
      {tag === "comite-de-investimentos" ||
      tag === "conselho-de-previdencia" ? (
        <Divisao>
          <SubMenu />
          <DivPost>
            <S.PostHeader>
              <S.PostDate>Publicado em {post.data}</S.PostDate>
              <S.PostImage fluid={post.thumbnail.childImageSharp.fluid} />
              <S.PostTitle>
                {post.tags} • {post.title}
              </S.PostTitle>
              <S.PostDescription>{post.description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
              <Reactmarkdown source={post.content} />
            </S.MainContent>
          </DivPost>
        </Divisao>
      ) : (
        <>
          <S.PostHeader>
            <S.PostDate>Publicado em {post.data}</S.PostDate>
            <S.PostImage fluid={post.thumbnail.childImageSharp.fluid} />
            <S.PostTitle>{post.title}</S.PostTitle>
            <S.PostDescription>{post.description}</S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <Reactmarkdown source={post.content} />
          </S.MainContent>
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    strapiPostsDoIpasc(id: { eq: $id }) {
      tags
      title
      data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      description
      content
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default BlogPost
