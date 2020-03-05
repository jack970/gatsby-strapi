import React from 'react'
import * as S from './styled'
import links from './contents'

const Footer = () => (
    <S.FooterWrapper>
        <S.FooterPosition>
            <S.FooterDescription>Site.com</S.FooterDescription>
            <S.FooterDivLinks>
                <S.FooterRowLinks>
                    {links.map((link, i) => (
                    <S.FooterColumnLinks key={i}>
                        <S.FooterTitleColumnLinks>{link.columns}</S.FooterTitleColumnLinks>
                        {
                            link.lines.map((line, i) =>(
                                <S.FooterLinkRodape to={line.url} key={i}>{line.label}</S.FooterLinkRodape>
                            ))
                        }
                    </S.FooterColumnLinks>
                    ))}
                </S.FooterRowLinks>
            </S.FooterDivLinks>
        </S.FooterPosition>
    </S.FooterWrapper>
)

export default Footer