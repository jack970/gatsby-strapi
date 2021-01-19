import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const MenuNavBar = styled.nav`
    padding-left: 0;
    margin-bottom: 0;
    float: right;
    list-style: none;

    ${media.lessThan("large")`
    display: inline-flex;
`}
`

export const MenuUlBar = styled.ul``

export const MenuItemBar = styled.li`
    z-index: 1;
    float: left;
    position: relative;
    display: list-item;

    ${media.lessThan("large")`
        float: none;
    `}
    `

export const MenuLinkItem = styled.div`
    font-weight: 700;
    display: block;
    text-decoration: none;
    transition: border-bottom 0.5s;

    &:hover {
        border-bottom: 2px solid var(--icone);
    }
    
    `

export const MenuTextItem = styled.div`
    color: var(--black);
    font-size: 0.9rem;
    text-decoration: none;
    display: block;
    padding: 1rem 1rem;
    text-transform: uppercase;
    cursor: pointer;

`
export const MenuSubItem = styled.li`
    float: none;
    padding: 10px 10px;
    transition: all 0.5s;

    &:hover {
        background: var(--amarelo);
        color: #fff;
    }
`
export const MenuSubMenu = styled.ul`
    background: var(--black);
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
    font-size: 14px;
    border-bottom: 3px solid var(--white);
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 400;
`