import React from 'react'
import LogoHeader from '../LogoHeader'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'

const InnerHeader = () => (
    <S.InnerHeaderWrapper>
        <S.LogoContainer>
            <LogoHeader />
        </S.LogoContainer>
        <S.MenuContainer>
            <MenuLink /> 
        </S.MenuContainer>
    </S.InnerHeaderWrapper>
)

export default InnerHeader