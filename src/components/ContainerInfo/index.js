import React from 'react'
import * as S from './styled'
import { useStaticQuery, graphql} from 'gatsby'

const ContainerInfo = () => {
    const query = useStaticQuery(graphql`
        query {
            Image1: file(relativePath: { eq: "bandeira-nacional.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
                    }
                }
            }
            Image2: file(relativePath: { eq: "info-red.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
                    }
                }
            }
            Image3: file(relativePath: { eq: "info.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
                    }
                }
            }
            Image4: file(relativePath: { eq: "info.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

const Links = [{
        image: query.Image1.childImageSharp.fluid,
        url: '/slug',
        title: "Previdência Social",
        description: "Lorem Ipsulum Dolore Lorem Ipsulum Dolore Lorem Ipsulum Dolore",
        btn: "Leia Mais"
    },
    {
        image: query.Image2.childImageSharp.fluid,
        url: '/slug',
        title: "Previdência Social",
        description: "Lorem Ipsulum Dolore Lorem Ipsulum Dolore Lorem Ipsulum Dolore",
        btn: "Leia Mais"
    },
    {
        image: query.Image3.childImageSharp.fluid,
        url: '/slug',
        title: "Previdência Social",
        description: "Lorem Ipsulum Dolore Lorem Ipsulum Dolore Lorem Ipsulum Dolore",
        btn: "Leia Mais"
    },
    {
        image: query.Image4.childImageSharp.fluid,
        url: '/slug',
        title: "Previdência Social",
        description: "Lorem Ipsulum Dolore Lorem Ipsulum Dolore Lorem Ipsulum Dolore",
        btn: "Leia Mais"
    }]

return(
    <S.ContainerInfoSection>
        <S.ContainerInfoWrapper>
            <S.ContainerInfoRow>
                {Links.map((link, i) => (
                    <S.ContainerInfoColumn key={i} to={link.url}>
                        <S.ContainerInfoSpan>
                            <S.ContainerImage fluid={link.image} />
                        </S.ContainerInfoSpan>
                        <S.ContainerInfoTitle>{link.title}</S.ContainerInfoTitle>
                        <S.ContainerInfoParagraph>{link.description}</S.ContainerInfoParagraph>
                        <S.ContainerInfoButton>{link.btn}</S.ContainerInfoButton>
                    </S.ContainerInfoColumn>
                ))}  
            </S.ContainerInfoRow>
        </S.ContainerInfoWrapper>
    </S.ContainerInfoSection>

)
}
export default ContainerInfo