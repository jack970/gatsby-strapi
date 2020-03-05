import React from 'react'
import LogoHeader from '../LogoHeader'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'
import MenuMobile from '../MenuMobile'

const InnerHeader = () => {

    return(
    <S.InnerHeaderWrapper>
        <S.InnerPosition>
            <S.LogoContainer>
                <LogoHeader/>
                <div id='mobile'>
                    <MenuMobile class='.mobile' />
                </div>
            </S.LogoContainer>
            <S.MenuContainer>
                <MenuLink /> 
            </S.MenuContainer> 
        </S.InnerPosition>
    </S.InnerHeaderWrapper>
    
    )
}

export default InnerHeader