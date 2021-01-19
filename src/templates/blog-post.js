import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import styled from 'styled-components'
import SubMenu from '../components/Submenu'
import kebabCase from 'lodash/kebabCase'

export const Divisao = styled.div`
    display: flex;
    margin-top: 10rem;
`
export const DivPost = styled.div``

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    const tag = kebabCase(post.frontmatter.tags)
    return(
        <Layout>
            <SEO title={post.title} 
            description={post.description} 
            image={post.thumbnail.childImageSharp.fluid}/>
            {tag === 'comite-de-investimentos' || 
            tag === 'conselho-de-previdencia' ? 
                <Divisao>
                    <SubMenu />                 
                    <DivPost>
                        <S.PostHeader>
                            <S.PostDate>
                                Publicado em {post.frontmatter.data}
                            </S.PostDate>
                            <S.PostImage fluid =
                            {post.thumbnail.childImageSharp.fluid}
                            />
                            <S.PostTitle>
                               {post.frontmatter.tags} • {post.frontmatter.title}
                            </S.PostTitle>
                            <S.PostDescription>
                                {post.frontmatter.description}
                            </S.PostDescription>
                        </S.PostHeader>
                        <S.MainContent>
                            <div dangerouslySetInnerHTML={{ __html: post.html}} />
                        </S.MainContent>
                    </DivPost>
            </Divisao>
                : 
            <>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post.frontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {post.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </S.MainContent>
            </>
            }
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(id: {eq: $slug}) {
            html
            frontmatter {
                tags
                title
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
    
            }
        }
    }
    `

export default BlogPost
