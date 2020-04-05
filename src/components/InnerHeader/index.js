import React, { useState, useEffect } from 'react'
import LogoHeader from '../LogoHeader'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'
import MenuMobile from '../MenuMobile'

const InnerHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true});

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    return(
    <S.InnerHeaderWrapper data-active={scrolled}>
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