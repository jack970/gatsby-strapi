import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const Serviços = ({ data }) => {
    const post_servicos = data.strapiServicos
    return(
        <Layout>
            <SEO title={post_servicos.title} 
            description={post_servicos.description} 
            image={post_servicos.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_servicos.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post_servicos.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_servicos.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_servicos.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <Reactmarkdown source={post_servicos.content} />
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query Postservicos($id: String!)  {
            strapiServicos(id: { eq: $id}) {
                title
                data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }   
    `

export default Serviços