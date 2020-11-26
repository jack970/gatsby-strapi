import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import media from "styled-media-query"

export const PostItemLink = styled(Link)`
  color: var(--black);
  display: table-cell;
  text-decoration: none;
  transition: color 0.5s;
  padding: 1rem 1.6rem;
  width: auto;

  &:hover {
    color: #1fa1f2;
  }

  ${media.lessThan("large")`
    padding: 0;
    display:flex;
    `}
`

export const PostItemWrapper = styled.section`
  ${media.lessThan("large")`
    
    &:after {
        background-color: #c8c8c8;
        content: "";
        display: block;
        height: 2px;
        margin: 1rem 0 1rem;
    }`}
`

export const PostItemInfo = styled.div`
  font-weight: 700;
  padding: 2rem 0 0;

  ${media.lessThan("large")`
    padding: 0;
    margin-left: 1.3rem;
    `}
`

export const PostItemImage = styled(Img)`
  height: 10rem;
  width: 20rem;
  border-radius: 2%;

  ${media.lessThan("large")`
    margin-bottom: 2rem;
    `}
`

export const PostItemTitle = styled.h1`
  display: flex;
  font-weight: 700;
  font-size: 1.6rem;
`

export const PostItemDescription = styled.p`
  margin-left: 1.5rem;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`
