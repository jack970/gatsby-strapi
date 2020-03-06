import styled from 'styled-components'
import  media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    position: relative;
    background: var(--white);
    transition: all 0.25s ease-in-out 0s !important;

    ${media.lessThan("large")`
        position: absolute;
    `}
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    margin: 0 auto;
    max-width: 100rem;
    min-height: 100vh;
    padding-top: 9.2rem;
    padding-left: 9rem;
    padding-right: 9rem;

    ${media.lessThan("large")`
        padding: 15rem 0;
        padding-bottom: 2rem;
    `}
`