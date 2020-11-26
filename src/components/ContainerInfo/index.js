import React from "react"
import * as S from "./styled"
import Links from "./contents"
import Icons from "./icons"

const ContainerInfo = () => {
  return (
    <S.ContainerInfoSection>
      <S.ContainerInfoWrapper>
        <S.ContainerInfoRow>
          {Links.map((link, i) => {
            const Icon = Icons[link.label]
            return (
              <S.ContainerInfoColumn key={i} to={link.url}>
                <S.ContainerInfoSpan>
                  <S.ContainerImage>
                    <Icon />
                  </S.ContainerImage>
                </S.ContainerInfoSpan>
                <S.ContainerInfoTitle>{link.title}</S.ContainerInfoTitle>
                <S.ContainerInfoParagraph>
                  {link.description}
                </S.ContainerInfoParagraph>
                <S.ContainerInfoButton>{link.btn}</S.ContainerInfoButton>
              </S.ContainerInfoColumn>
            )
          })}
        </S.ContainerInfoRow>
      </S.ContainerInfoWrapper>
    </S.ContainerInfoSection>
  )
}
export default ContainerInfo
