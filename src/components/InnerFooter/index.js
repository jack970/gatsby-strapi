import React from "react"
import * as S from "./styled"
import Links from "./contents"
import Icons from "./icons"
import Mapa from "./links"

const InnerFooter = () => (
  <S.InnerWrapper>
    <S.Container>
      <S.Row>
        <S.ContactBox>
          <S.HeaderColumns>Contato</S.HeaderColumns>
          {Links.map((link, i) => {
            const Icon = Icons[link.label]
            return (
              <S.ContainerContatos key={i}>
                <S.ContainerIcon title={link.label}>
                  <Icon />
                </S.ContainerIcon>
                <S.Description>{link.text}</S.Description>
              </S.ContainerContatos>
            )
          })}
        </S.ContactBox>

        <S.ContactBox>
          <S.HeaderColumns>Mapa do Site</S.HeaderColumns>
          <S.ContainerUl>
            {Mapa.map((link, i) => (
              <S.ContainerList key={i}>
                <S.ContainerLinks to={link.url}>{link.label}</S.ContainerLinks>
              </S.ContainerList>
            ))}
          </S.ContainerUl>
        </S.ContactBox>
      </S.Row>
    </S.Container>
  </S.InnerWrapper>
)

export default InnerFooter
