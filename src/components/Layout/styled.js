import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    display: flex;
    position: absolute;
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    background: #fff;
    margin: 0 auto;
    min-height: 100vh;
    padding: 8rem 6.75rem 13rem;
    
    ${media.lessThan("large")`
        padding: 10.9rem 0 22rem;
    `}
`