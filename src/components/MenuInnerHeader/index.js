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
                    <S.MenuSubMenu>
                        {link.submenu.map((subMenu, i) => (
                        <S.MenuSubLink to={subMenu.url}>
                            <S.MenuSubItem key={i}>
                                <S.MenuSubText>{subMenu.label}</S.MenuSubText>
                            </S.MenuSubItem>
                        </S.MenuSubLink>
                ))}
                    </S.MenuSubMenu>
                </S.MenuLinkItem>
            </S.MenuItemBar>
        ))}
        </S.MenuUlBar>
    </S.MenuNavBar>
)

export default MenuLink