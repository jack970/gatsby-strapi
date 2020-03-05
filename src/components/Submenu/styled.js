import styled from 'styled-components'
import {Link} from 'gatsby'
import media from 'styled-media-query'

export const SubMenuWrapper = styled.aside`
    padding: 5rem 0;
    
    h3 {
        font-size: 22px;
        font-weight: 600;
        color: var(--amarelo);
        padding: 15px;
        border-bottom: 1px solid #ccc;
        margin: 0;
    }

    h2 {
        font-size: 18px;
        text-decoration: none;
        line-height: 26px;
        color: #202121;
        padding: 9px 10px;
        font-weight: 600;
    }

    #texto {
        border-bottom: none;
    }

    #item-texto {
        border-left: 3px solid var(--amarelo);
    }

    #sub-item:last-child {
        border: none;
    }

    ${media.lessThan('large')`
        display: none;
    `}
`

export const SubMenuLinks = styled.section`
    background: #f4f6f7;
    border-radius: 5px;
    border: 1px solid var(--black);
`

export const SubMenuNav = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`

export const SubMenuNavItem = styled.li`
    border-bottom: 1px solid #ccc;
`

export const SubMenuNavTextItem = styled(Link)`
    font-size: 16px;
    font-weight: 100;
    color: #6a6a6a;
    line-height: 20px;
    text-decoration:none;
    padding: 9px 10px;
    transition: all ease .3s;

    &:hover {
        background-color: var(--amarelo);
        color: var(--texto);
    }
`
