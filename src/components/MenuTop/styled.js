import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuTopWrapper = styled.aside`
    position: fixed;
    height: auto;
    width: 100%;
    background: var(--amarelo);
    top: 0;
    flex-direction: row;
    z-index: 9;
    transition: all .25s ease-in-out !important;

    ${media.lessThan('large')`
    display: none;
    padding: 0;
`}
`

export const MenuTopDescription = styled.div`
    padding: 0 15px;
    font-weight: 500;

    ${media.lessThan('large')`
    padding: 0rem ;
`}
`