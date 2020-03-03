import styled from 'styled-components'
import  media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    display: flex;
    position: relative;
    background: var(--white);
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    margin: 0 auto;
    min-height: 100vh;
    padding: 9.2rem 6.75rem 15rem;

    ${media.lessThan("large")`
        padding: 15rem 0 35rem;
    `}
`