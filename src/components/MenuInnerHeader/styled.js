import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const MenuNavBar = styled.nav`
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    ${media.lessThan("large")`
    display: inline-flex;
`}
`

export const MenuUlBar = styled.ul``

export const MenuItemBar = styled.li`
    float: left;
    display: list-item;
    `

export const MenuLinkItem = styled(Link)`
    color: #111;
    font-weight: 700;
    display: block;
    border-bottom: 2px solid #fff;
    text-decoration: none;
    transition: border-bottom 0.5s;

    &:hover {
        border-bottom: 2px solid #4d4d4d;
    }
    
    `

export const MenuTextItem = styled.span`
    font-size: 0.9rem;
    display: block;
    padding: 1rem 1rem;
    text-transform: uppercase;

    ${media.lessThan("large")`
        font-size: 0.7rem;
        padding: 1rem 0.5rem;
    `}
`
export const MenuSubItem = styled.li`
    float: none;
    padding: 10px 10px;
    transition: background 0.5s;

    &:hover {
        background: #FDB700;
    }
`
export const MenuSubMenu = styled.ul`
    background: #111;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    width: 200px;
    list-style: none;
    display: none;
    box-shadow: 2px 2px 10px #888888;

    ${MenuItemBar}:hover & {
        display: block;
    }

    ${MenuSubItem}:hover & {
        display: block;
    }

    `
export const MenuSpanNav = styled.span``

export const MenuSubLink = styled(Link)`
    width: 100%; 
    color: white;
    font-size: 14px;
    border-bottom: 3px solid #222;
    padding: 0;
    text-decoration: none;

    
`

export const MenuSubText = styled.span`
    font-size: 1rem;
    font-weight: 400;
`