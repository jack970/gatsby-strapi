import styled from 'styled-components'
import  media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    display: flex;
    position: relative;
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    background: #fff;
    margin: 0 auto;
    min-height: 100vh;
    padding: 2rem 0 0 7rem;

    ${media.lessThan("large")`
        padding: 15rem 0 35rem;
    `}
`