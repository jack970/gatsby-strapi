import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const Publicacoes = ({ data }) => {
    const post_publicacoes = data.strapiPublicacoes
    return(
        <Layout>
            <SEO title={post_publicacoes.title} 
            description={post_publicacoes.description} 
            image={post_publicacoes.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_publicacoes.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post_publicacoes.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_publicacoes.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_publicacoes.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <Reactmarkdown src={post_publicacoes.content} />
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query PostPublicacoes($id: String!) {
            strapiPublicacoes(id: { eq: $id}) {
                title
                data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }   
    `

export default Publicacoes