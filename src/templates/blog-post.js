import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description} 
            image={post.featuredImg.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post.featuredImg.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
        query Post($id: String!) {
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

export default BlogPost