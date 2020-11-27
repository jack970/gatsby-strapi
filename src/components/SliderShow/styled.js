import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const SliderShowWrapper = styled.div`
  align-content: center;
  height: 10rem;
  z-index: 0;
  margin-top: 5.5rem;
  position: relative;
  padding: 3rem 2rem;

  ${media.lessThan("large")`
    margin-top: 0;  
    height: 0;
    padding: 7rem 2rem;
  `}
`

export const SliderShowComment1 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  text-shadow: azure;
`

export const SliderShowLink = styled(Link)`
  text-decoration: none;
`
