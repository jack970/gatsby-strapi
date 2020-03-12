import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import SubMenu from '../components/Submenu'
import styled from 'styled-components'
import Reactmarkdown from 'react-markdown'

export const Divisao = styled.div`
    display: flex;
`
export const DivPost = styled.div``

const Investimentos = ({ data }) => {
    const post_investimentos = data.strapiConselhoDeInvestimentos
    return(
        <Layout>
            <SEO title={post_investimentos.title} 
            description={post_investimentos.description} 
            image={post_investimentos.image.childImageSharp.fluid}/>
            <Divisao>
                <SubMenu/>
                <DivPost>
                    <S.PostHeader>
                        <S.PostDate>
                            Publicado em {post_investimentos.data}
                        </S.PostDate>
                        <S.PostImage fluid =
                        {post_investimentos.image.childImageSharp.fluid}
                        />
                        <S.PostTitle>
                            {post_investimentos.title}
                        </S.PostTitle>
                        <S.PostDescription>
                            {post_investimentos.description}
                        </S.PostDescription>
                    </S.PostHeader>
                    <S.MainContent>
                        <Reactmarkdown source={post_investimentos.content}/>
                    </S.MainContent>
                </DivPost>
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
        query PostInvestimentos($id: String!) {
            strapiConselhoDeInvestimentos(id: {eq: $id}) {
                title
                data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }   
    `

export default Investimentos

