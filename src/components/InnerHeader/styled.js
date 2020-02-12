import styled from 'styled-components'
import media from 'styled-media-query'

export const InnerHeaderWrapper = styled.aside`
    display: flex;
    background: #fff;
    top: 1.6rem;
    width: 100%;
    height: auto;
    flex-direction: row;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    position: fixed;
    z-index: 1;

    ${media.lessThan("large")`
        display: block;
        top: 0;
        text-align: center;
    `}
`

export const LogoContainer = styled.div`
    padding: 2rem 7rem 0;
    max-width: 25%;

    ${media.lessThan("large")`
        max-width: 100%;
    `}
`

export const MenuContainer = styled.div`
    padding:3.6rem 3.3rem 0;
    width: 100%;

    ${media.lessThan("large")`
        padding: 0;
    `}
`