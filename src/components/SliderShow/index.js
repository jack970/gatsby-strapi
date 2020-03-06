import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const SliderShow = ({link1, link2, link3}) => (
  <S.SliderShowWrapper>
    <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile (filter: {sourceInstanceName: {eq: "uploads"}}){
              nodes {
                relativePath
                childImageSharp {
                  fluid (maxWidth: 1000, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={["catalao1.jpg", "catalao2.jpg", "morrinho.jpg"]} 

        style={{
          textShadow: '2px 2px #FF0000'
        }}
      >
        <S.SliderShowLink to={link1} >
          <S.SliderShowComment1>
             Veja a nossa História
          </S.SliderShowComment1>
        </S.SliderShowLink>
        <S.SliderShowLink to={link2} >
          <S.SliderShowComment1>
              Acesse o Ipasc
          </S.SliderShowComment1>
        </S.SliderShowLink>
        <S.SliderShowLink to={link3} >
          <S.SliderShowComment1>
              Confira as Notícias
          </S.SliderShowComment1>
        </S.SliderShowLink>
    </BackgroundSlider>
  </S.SliderShowWrapper>

)

export default SliderShow