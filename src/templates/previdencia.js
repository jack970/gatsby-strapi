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

const Previdencia = ({ data }) => {
    const post_previdencia = data.strapiConselhoDePrevidencia
    return(
        <Layout>
            <SEO title={post_previdencia.title} 
            description={post_previdencia.description} 
            image={post_previdencia.image.childImageSharp.fluid}/>
            <Divisao >
                <SubMenu />
                <DivPost>
                    <S.PostHeader>
                        <S.PostDate>
                            Publicado em {post_previdencia.data}
                        </S.PostDate>
                        <S.PostImage fluid =
                        {post_previdencia.image.childImageSharp.fluid}
                        />
                        <S.PostTitle>
                            {post_previdencia.title}
                        </S.PostTitle>
                        <S.PostDescription>
                            {post_previdencia.description}
                        </S.PostDescription>
                    </S.PostHeader>
                    <S.MainContent>
                        <Reactmarkdown source={post_previdencia.content}/>
                    </S.MainContent>
                </DivPost>
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
        query PostPrevidencia($id: String!) {
            strapiConselhoDePrevidencia(id: { eq: $id}) {
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

export default Previdencia