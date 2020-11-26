import styled from "styled-components"
import media from "styled-media-query"

export const MenuTopWrapper = styled.aside`
  height: auto;
  width: 100%;
  background: var(--amarelo);
  top: 0;
  flex-direction: row;
  z-index: 9;
  transition: all 0.25s ease-in-out !important;

  ${media.lessThan("large")`
        padding: 0;
        background: transparent;
`}
`

export const MenuTopDescription = styled.div`
  padding: 0 15px;
  font-weight: 500;

  ${media.lessThan("large")`
    padding: 0rem ;
`}
`
