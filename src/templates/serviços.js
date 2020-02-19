import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const Serviços = ({ data }) => {
    const post_servicos = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_servicos.frontmatter.title} 
            description={post_servicos.frontmatter.description} 
            image={post_servicos.frontmatter.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_servicos.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post_servicos.frontmatter.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_servicos.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_servicos.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post_servicos.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query Postservicos($id: String!) {
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

export default Serviços