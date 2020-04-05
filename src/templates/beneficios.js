import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const Benefícios = ({ data }) => {
    const post_beneficios = data.strapiBeneficios
    return(
        <Layout>
            <SEO title={post_beneficios.title} 
            description={post_beneficios.description} 
            image={post_beneficios.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_beneficios.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post_beneficios.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_beneficios.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_beneficios.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <Reactmarkdown source={post_beneficios.content}/>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
    query Postbeneficios($id: String!) {
        strapiBeneficios(id: {eq: $id}) {
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

export default Benefícios