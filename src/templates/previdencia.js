import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const Previdencia = ({ data }) => {
    const post_previdencia = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_previdencia.frontmatter.title} 
            description={post_previdencia.frontmatter.description} 
            image={post_previdencia.featuredImg.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_previdencia.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post_previdencia.featuredImg.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_previdencia.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_previdencia.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post_previdencia.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query PostPrevidencia($id: String!) {
            markdownRemark(id: { eq: $id}) {
                frontmatter {
                    title
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                }
                featuredImg {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            html
            }
        }   
    `

export default Previdencia