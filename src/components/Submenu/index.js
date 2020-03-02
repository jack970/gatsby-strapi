import React from 'react'
import * as S from './styled'
import Link from './contents'

const SubMenu = () => (
    <S.SubMenuWrapper>
        <S.SubMenuLinks>
            <h3>Conselho</h3>
            <S.SubMenuNav>
                {Link.map((link, i) => (
                    <S.SubMenuNavItem key={i}>
                        <h2>{link.label}</h2>
                        {link.submenu.map((sublink, i) => (
                            <S.SubMenuNav key={i}>
                                <S.SubMenuNavTextItem to={sublink.url}>
                                    <S.SubMenuNavItem id='texto'>{sublink.label}</S.SubMenuNavItem>
                                </S.SubMenuNavTextItem>
                            </S.SubMenuNav>
                        ))}
                    </S.SubMenuNavItem>
                ))}
            </S.SubMenuNav> 
        </S.SubMenuLinks>
    </S.SubMenuWrapper>
)

export default SubMenu