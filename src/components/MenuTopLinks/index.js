import React, {useState, useEffect} from 'react'
import * as S from './styled'
import links from './contents'
import Icons from './Icons'
import { Zap as Light } from 'styled-icons/boxicons-solid/Zap'

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
            <ul style={{width: '12rem', lineHeight: '2.2'}}>
                <li>
                    <p style={{float: 'left', padding: '4px 0px', fontWeight: '600'}}>CONTRASTE:</p>
                    <S.MenuLinksIcon title="Mudar o tema" style={{ cursor: 'pointer'}}
                    onClick= {() => {
                        window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
                    }}>
                        <Light />
                    </S.MenuLinksIcon>
                </li>
            </ul>
        </S.MenuLinksList>
    </S.MenuLinksWrapper>)
}

export default MenuTopLinks
