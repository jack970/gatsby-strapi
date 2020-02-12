import styled from 'styled-components'
import {Link} from 'gatsby'
import media from 'styled-media-query'


export const SliderShowWrapper = styled.div`
    align-content: center;
    height: 10rem;
    z-index: 0;
    position: relative;
    padding: 7rem 2rem;

    ${media.lessThan("large")`
        height: 0;
    `}
    
`

export const SliderShowComment1 = styled.div`
    color: white;
    font-weight: 700;
    font-size: 25px;
`

export const SliderShowComment2 = styled.div`
    color: white;
    font-weight: 700;
    font-size: 25px;
`

export const SliderShowComment3 = styled.a`
    color: white;
    font-weight: 700;
    font-size: 25px;
`

export const SliderShowLink = styled(Link)`
    text-decoration: none;
`