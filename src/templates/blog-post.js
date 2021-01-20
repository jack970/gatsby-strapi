import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import styled from 'styled-components'
import SubMenu from '../components/Submenu'
import { kebabCase } from 'lodash'

export const Divisao = styled.div`
    display: flex;
    margin-top: 10rem;
`
export const DivPost = styled.div``

const BlogPost = ({ data }) => {
    
    const post = data.markdownRemark
    const postFrontmatter = post.frontmatter
    const tag = post.frontmatter.tags

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
                {
                 postFrontmatter.links_pdf && (
                    <S.PostBadgetLink to={postFrontmatter.links_pdf}>Link aqui</S.PostBadgetLink>
                    )   
                }
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
                links_pdf
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
