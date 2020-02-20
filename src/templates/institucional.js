import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const Institucional = ({ data }) => {
    const post_institucional = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_institucional.frontmatter.title} 
            description={post_institucional.frontmatter.description} 
            image={post_institucional.featuredImg.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post_institucional.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post_institucional.featuredImg.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post_institucional.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post_institucional.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post_institucional.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query PostInstitucional($id: String!) {
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

export default Institucional