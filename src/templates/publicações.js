import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const Publicacoes = ({ data }) => {
    const post_publicacoes = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_publicacoes.frontmatter.title} 
            description={post_publicacoes.frontmatter.description} 
            image={post_publicacoes.frontmatter.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_publicacoes.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post_publicacoes.frontmatter.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_publicacoes.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_publicacoes.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post_publicacoes.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query PostPublicacoes($id: String!) {
            markdownRemark(id: { eq: $id}) {
            frontmatter {
                title
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
            }
        }      
    `

export default Publicacoes