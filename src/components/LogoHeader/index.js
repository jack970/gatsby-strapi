import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'

const LogoHeader = () => {
    const {Image} = useStaticQuery(graphql`
        query {
            Image: file(relativePath: { eq: "Logo-do-IPASC.png"}) {
            childImageSharp {
                fluid(maxHeight: 100, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`)


    return <S.WrapperLink to='/'><S.WrapperImage fluid={Image.childImageSharp.fluid} /></S.WrapperLink>
}

export default LogoHeader