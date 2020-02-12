import React from 'react'
import * as S from './styled'
import links from './contents'

const MenuLink = () => (
    <S.MenuNavBar>
        <S.MenuUlBar>
        {links.map((link, i) => (
            <S.MenuItemBar key={i}>
                <S.MenuLinkItem to={link.url}>
                    <S.MenuTextItem>{link.label}</S.MenuTextItem>
                </S.MenuLinkItem>
            </S.MenuItemBar>
        ))}
            
        </S.MenuUlBar>
    </S.MenuNavBar>
    )

export default MenuLink