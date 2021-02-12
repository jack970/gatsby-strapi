import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'
import MenuMobile from '../MenuMobile'

const InnerHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            let currentScrollY = window.scrollY
            const isScrolled = currentScrollY > 40;
            
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
                console.log(scrolled)
            }
            
        };

        document.addEventListener('scroll', handleScroll, { passive: true});

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])
    console.log(scrolled)
    return(
    <>
    <S.InnerHeaderWrapper data-active={scrolled}>
        <S.InnerPosition>
            <S.LogoContainer data-active={scrolled}>
                <div>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <S.Title>IPASC</S.Title>
                        <S.Description>INSTITUTO DE PREVIDÊNCIA E ASSISTÊNCIA DOS SERVIDORES DE CATALÃO.</S.Description>
                    </Link>
                </div>
                <div id='mobile'>
                    <MenuMobile className='.mobile' />
                </div>
            </S.LogoContainer>
            <S.MenuContainer>
                <MenuLink /> 
            </S.MenuContainer> 
        </S.InnerPosition>
    </S.InnerHeaderWrapper>
    </>
    )
}

export default InnerHeader