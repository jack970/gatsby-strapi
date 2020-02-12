import React from 'react'
import * as S from './styled'
import links from './contents'
import Icons from './Icons'

const MenuTopLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => {
            const Icon = Icons[link.label]
            
            return (<S.MenuLinksItem key={i}>
                    <S.MenuLinksIcon>
                        <Icon />
                    </S.MenuLinksIcon>
                    <S.MenuLinksLink activeClassName="active" to={link.url}>{link.title}</S.MenuLinksLink>
                </S.MenuLinksItem>)
            })}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default MenuTopLinks
