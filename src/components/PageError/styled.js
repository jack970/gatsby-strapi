import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  text-align: center;

  ${media.lessThan("large")`
  padding: 3rem 0 0;
  max-width: 100%;
`}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  text-align: center;

  ${media.lessThan("large")`
    max-width: 100%;
    font-size: 3rem;
`}
`
