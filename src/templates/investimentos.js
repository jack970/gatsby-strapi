import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import SubMenu from '../components/Submenu'
import styled from 'styled-components'

export const Divisao = styled.div`
    display: flex;
`
export const DivPost = styled.div``

const Investimentos = ({ data }) => {
    const post_investimentos = data.markdownRemark
    return(
        <Layout>
            <SEO title={post_investimentos.frontmatter.title} 
            description={post_investimentos.frontmatter.description} 
            image={post_investimentos.featuredImg.childImageSharp.fluid}/>
            <Divisao>
                <SubMenu/>
                <divPost>
                    <S.PostHeader>
                        <S.PostDate>
                            Publicado em {post_investimentos.frontmatter.date}
                        </S.PostDate>
                        <S.PostImage fluid =
                        {post_investimentos.featuredImg.childImageSharp.fluid}
                        />
                        <S.PostTitle>
                            {post_investimentos.frontmatter.title}
                        </S.PostTitle>
                        <S.PostDescription>
                            {post_investimentos.frontmatter.description}
                        </S.PostDescription>
                    </S.PostHeader>
                    <S.MainContent>
                        <div dangerouslySetInnerHTML={{__html: post_investimentos.html}}></div>
                    </S.MainContent>
                </divPost>
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
        query PostInvestimentos($id: String!) {
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

export default Investimentos