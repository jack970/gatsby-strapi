import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import styled from 'styled-components'
import SubMenu from '../components/Submenu'
import { kebabCase } from 'lodash'
import RecomendPosts from '../components/RecomendPosts'
import OpenModalButton from '../components/ButtonModal'

export const Divisao = styled.div`
    display: flex;
    margin-top: 10rem;
`
export const DivPost = styled.div``

const BlogPost = ({ data, pageContext }) => {
    
    const post = data.markdownRemark
    const postFrontmatter = post.frontmatter
    const tag = postFrontmatter.tags
    const next = pageContext.next
    const previous = pageContext.previous
    return(
        <Layout>
            <SEO title={postFrontmatter.title} 
            description={postFrontmatter.description} 
            image={postFrontmatter.thumbnail.childImageSharp.fluid}/>
            {tag.includes("Comitê de Investimentos") || 
            tag.includes("Comitê de Previdência") ? 
                <Divisao>
                    <SubMenu />           
                    <DivPost>
                        <S.PostHeader>
                            <S.PostDate>
                                Publicado em {postFrontmatter.data}
                            </S.PostDate>
                            <S.PostImage fluid =
                                {postFrontmatter.thumbnail.childImageSharp.fluid}
                            />
                            <S.PostTitle>
                                {postFrontmatter.tags} • {postFrontmatter.title}
                            </S.PostTitle>
                            <S.PostDescription>
                                {postFrontmatter.description}
                            </S.PostDescription>
                        </S.PostHeader>
                        <S.MainContent>
                            <div dangerouslySetInnerHTML={{ __html: post.html}} />
                        </S.MainContent>
                        <S.PostBadge>
                            <OpenModalButton pdfGenerator={post.frontmatter.pdf} />
                        </S.PostBadge>
                        <RecomendPosts next={next} previous={previous} />
                    </DivPost>
            </Divisao>
                : 
            <>
            <S.PostHeader>
                <S.PostBadge>
                    Categorias: &nbsp;
                    {tag.map((label, i) => 
                        <S.PostBadgetLink key={i} to={`/${kebabCase(label)}`}>
                            {label}
                        </S.PostBadgetLink>
                    )}
                </S.PostBadge>
                <S.PostBadge>
                    <OpenModalButton pdfGenerator={post.frontmatter.pdf} />
                </S.PostBadge>
                <S.PostDate>
                    Publicado em {postFrontmatter.date}
                </S.PostDate>
                <S.PostImage fluid =
                {postFrontmatter.thumbnail.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {postFrontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {postFrontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </S.MainContent>
            <RecomendPosts next={next} previous={previous} />
            </>
            }
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                tags
                title
                pdf {
                    alt
                    url
                }
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
