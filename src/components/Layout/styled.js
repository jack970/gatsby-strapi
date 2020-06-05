import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    position: relative;
    background: var(--white);
    transition: all .25s ease-in-out !important;
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    color: var(--texto);
    margin: 0 auto;
    min-height: 100vh;
    max-width: 100rem;
    
    ${media.lessThan("large")`
        padding-top: 8rem;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
    `}
`