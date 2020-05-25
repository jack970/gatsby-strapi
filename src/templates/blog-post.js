import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const BlogPost = ({ data }) => {
    const post = data.strapiIpascPosts
    return(
        <Layout>
            <SEO title={post.title} 
            description={post.description} 
            image={post.thumbnail.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post.thumbnail.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <Reactmarkdown source={post.content}/>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
    query Post($id: String!) {
        strapiIpascPosts(id: {eq: $id}) {
            title
            data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            content
            thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
    `

export default BlogPost
