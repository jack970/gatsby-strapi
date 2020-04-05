import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    position: relative;
    background: var(--white);
    transition: all .25s ease-in-out !important;

    ${media.lessThan("large")`
        position: absolute;
    `}

    ${media.greaterThan('415px')`
        position: relative;
    `}
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    color: var(--texto);
    margin: 0 auto;
    min-height: 100vh;
    padding: 8rem 6.75rem 0;
    max-width: 100rem;
    
    ${media.lessThan("large")`
        padding-top: 8rem;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
    `}
`