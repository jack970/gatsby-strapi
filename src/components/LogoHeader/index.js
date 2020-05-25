import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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


    return <Link to='/' style={{marginLeft: '1rem'}} ><S.WrapperImage fluid={Image.childImageSharp.fluid} /></Link>
}

export default LogoHeader