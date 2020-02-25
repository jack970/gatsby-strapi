import React from 'react'
import LogoHeader from '../LogoHeader'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'
import { ThList as List} from 'styled-icons/typicons/ThList'

const InnerHeader = () => {

    return(<S.InnerHeaderWrapper>
        <S.LogoContainer>
            <LogoHeader />
            <S.MenuNavBtn><List /></S.MenuNavBtn>
        </S.LogoContainer>
        <S.MenuContainer id='menu'>
            <MenuLink /> 
        </S.MenuContainer> 
    </S.InnerHeaderWrapper>
    
    )
}

export default InnerHeader