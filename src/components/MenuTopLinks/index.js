import React, {useState, useEffect} from 'react'
import * as S from './styled'
import links from './contents'
import Icons from './Icons'
import { Sun as Light } from '@styled-icons/fa-solid/Sun'

const MenuTopLinks = () => {
    const [theme, setTheme] = useState(null)

    const isLightMode = theme === "light"

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
        }, [])

    return(
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            <S.MenuLinksGroup>
                {links.map((link, i) => {
                const Icon = Icons[link.label]
                
                return (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksIcon>
                        <Icon />
                    </S.MenuLinksIcon>
                    <S.MenuLinksLink className="active" to={link.url}>{link.title}</S.MenuLinksLink>
                </S.MenuLinksItem>)
                })}
            </S.MenuLinksGroup>
            <ul style={{width: '12rem', padding: '.5rem'}}>
                <li>
                    <p style={{float: 'left', lineHeight: '1.6rem', fontWeight: '600'}}>CONTRASTE:</p>
                    <S.MenuLinksIcon title="Mudar o tema" style={{ cursor: 'pointer'}}
                    onClick= {() => {
                        window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
                    }}
                    className={theme}>
                        <Light />
                    </S.MenuLinksIcon>
                </li>
            </ul>
        </S.MenuLinksList>
    </S.MenuLinksWrapper>)
}

export default MenuTopLinks
