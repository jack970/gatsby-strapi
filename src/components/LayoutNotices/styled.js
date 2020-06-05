import styled from 'styled-components'
import  media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    position: relative;
    background: var(--white);
    transition: all 0.25s ease-in-out 0s !important;
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
    padding-bottom: 2rem;

    ${media.lessThan("large")`
        padding: 10rem 0 0;
        padding-bottom: 2rem;
        min-height: 40vh;
    `}
`