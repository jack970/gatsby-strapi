import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'

const LogoHeader = () => {
    const {Image} = useStaticQuery(graphql`
        query {
            Image: file(relativePath: { eq: "Logo do IPASC.png"}) {
            childImageSharp {
                fixed(height: 60) {
                  ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)


    return <S.WrapperLink to='/'><S.WrapperImage fixed={Image.childImageSharp.fixed} /></S.WrapperLink>
}

export default LogoHeader