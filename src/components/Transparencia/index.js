import React from "react"
import * as S from "./styled"
import links from "./contents"
import Icons from "./Icons"

const Transparencia = () => (
  <S.TransparenciaWrapper>
    <S.TransparenciaContainer>
      <S.TransparenciaRow>
        <S.TranspareciadivTitle>
          <S.TransparenciaTitle>
            transparência e informação
          </S.TransparenciaTitle>
        </S.TranspareciadivTitle>
        {links.map((link, i) => {
          const Icon = Icons[link.label]
          return (
            <S.TransparenciaLink to={link.url} key={i} title={link.label}>
              <S.TransparenciaItem>
                <S.TransparenciaIconSpan>
                  <S.TransparenciaImageIcon>
                    <Icon />
                  </S.TransparenciaImageIcon>
                </S.TransparenciaIconSpan>
                <S.TransparenciaTitleItem>
                  {link.title}
                </S.TransparenciaTitleItem>
                <S.TransparenciaDescription>
                  {link.description}
                </S.TransparenciaDescription>
                <S.Transparenciabtn>{link.btn}</S.Transparenciabtn>
              </S.TransparenciaItem>
            </S.TransparenciaLink>
          )
        })}
      </S.TransparenciaRow>
    </S.TransparenciaContainer>
  </S.TransparenciaWrapper>
)

export default Transparencia
