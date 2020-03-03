import styled from 'styled-components'
import {Link} from 'gatsby'
import media from 'styled-media-query'

export const FooterWrapper = styled.aside`
    background: var(--black);
    bottom: 0;
    flex-direction: row;
    padding: 10px 0;
    position: absolute;
    width: 100%;

    ${media.lessThan("large")`
        padding: 0;
        width: auto;
    `}
`

export const FooterDescription = styled.p`
    color: var(--white);
    text-align: center;
    font-weight: 600;
    font-size: 50px;
`

export const FooterDivLinks = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`

export const FooterRowLinks = styled.div`
    display: flex;
    justify-content: center;
    clear: both;
`

export const FooterColumnLinks = styled.div`
    width: 30.33%;
    padding: 10px;

`

export const FooterTitleColumnLinks = styled.h3`
    display: none;
`

export const FooterLinkRodape = styled(Link)`
    float: left;
    font-size: 16px;
    color: var(--white);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--amarelo);
    }
    `