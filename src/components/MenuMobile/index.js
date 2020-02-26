import React from 'react'
import * as S from './styled'
import links from '../MenuInnerHeader/contents'
import {Link} from 'gatsby'

const MenuMobile = () => (
    <S.MenuWrapper>
        <div class="container">
            <div class="content">
            <nav role="navigation">
                <div id="menuToggle">
                <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                <ul id="menu">
                    {links.map((link, i) => (
                        <li key={i}>
                            <S.Title>{link.label}</S.Title>
                            {
                                link.submenu.map((sublink, i) => (
                                <li key={i}>
                                    <Link to={sublink.url}>
                                        {sublink.label}
                                    </Link>
                                </li>
                                ))
                            }
                        </li>
                    ))}
                </ul>
            </div>
            </nav>
            </div>
        </div>
    </S.MenuWrapper>
)

export default MenuMobile