import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const Institucional = ({ data }) => {
    const post_institucional = data.strapiInstitucionals
    return(
        <Layout>
            <SEO title={post_institucional.title} 
            description={post_institucional.description} 
            image={post_institucional.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_institucional.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post_institucional.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_institucional.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_institucional.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <Reactmarkdown source={post_institucional.content}/>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query PostInstitucional($id: String!) {
            strapiInstitucionals(id: {eq: $id}) {
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

export default Institucional