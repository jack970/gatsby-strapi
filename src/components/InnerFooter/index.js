import React from 'react'
import * as S from './styled'
import Links from './contents'
import Icons from './icons'

const InnerFooter = () => (
    <S.InnerWrapper>
        <S.AngleBg/>
        <S.Container>
            <S.Row>
                <S.ContactBox>
                    <S.HeaderColumns>Contato</S.HeaderColumns>
                    {Links.map((link, i) => {
                        const Icon = Icons[link.label]
                        return(
                        <S.ContainerContatos key={i}>
                            <S.ContainerIcon title={link.label}><Icon/></S.ContainerIcon>
                            <S.Description>{link.text}</S.Description>
                        </S.ContainerContatos>   
                        )
                    })}
                </S.ContactBox>

                <S.ContactBox>
                    <S.HeaderColumns>Mapa do Site</S.HeaderColumns>
                    <S.Description>R. Nassim Agel, 505fefwefwwefweewfwefwefwefewfwefe - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                </S.ContactBox>
                <S.ContactBox>
                    <S.HeaderColumns>Contato</S.HeaderColumns>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                    <S.Description>R. Nassim Agel, 505 - Centro, Catalão - Goiás, 75701-050</S.Description>
                </S.ContactBox>
                
            </S.Row>
        </S.Container>
    </S.InnerWrapper>
)

export default InnerFooter