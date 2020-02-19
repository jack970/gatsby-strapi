import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const Benefícios = ({ data }) => {
    const post_beneficios = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_beneficios.frontmatter.title} 
            description={post_beneficios.frontmatter.description} 
            image={post_beneficios.frontmatter.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_beneficios.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post_beneficios.frontmatter.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_beneficios.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_beneficios.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post_beneficios.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query Postbeneficios($id: String!) {
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

export default Benefícios