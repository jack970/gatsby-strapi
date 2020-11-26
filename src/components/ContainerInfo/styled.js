import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const ContainerInfoSection = styled.section``

export const ContainerInfoWrapper = styled.div``

export const ContainerInfoRow = styled.div`
  display: flex;
  justify-content: center;
  ${media.lessThan("large")`
    flex-wrap: wrap;
    `}
`

export const ContainerInfoColumn = styled(Link)`
  width: 100%;
  background: #4d4d4d;
  color: #ececec;
  text-align: center;
  border-right: 1px solid rgba(194, 148, 0, 0.3);
  padding: 1.5rem 15px;
  transition: background 0.5s;
  text-decoration: none;

  &:hover {
    background: #ffc107;
  }
`

export const ContainerInfoSpan = styled.span``

export const ContainerImage = styled.i`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 100px;
`

export const ContainerInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  min-height: 58px;
  padding: 0.5rem 0 0;
  color: #ececec;
`

export const ContainerInfoParagraph = styled.p`
  font-size: 0.5;
  display: block;
  padding: 1.3rem;
`

export const ContainerInfoButton = styled.span`
  border: 1px solid var(--white);
  border-radius: 0.2rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: background 0.5s;
  padding: 0.25rem 0.5rem;

  &:hover {
    background: var(--white);
    color: var(--black);
  }
`
