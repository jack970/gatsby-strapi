import styled from "styled-components"
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
import media from "styled-media-query"

export const SearchWrapper = styled.div`
  display: block;

  ${media.lessThan("large")`
    display: flex;
  `}  
`

export const LogoSearch = styled(SearchAlt)`
  height: 20px;
  color: var(--black);

  ${media.lessThan("large")`
    height: 30px;
  `}
`

export const Span = styled.span`
  transition: display 4s ease-in-out;
  position: relative;
  left: -30px;
  pointer-events: none;
 
`

export const MenuDropdown = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    background: #FFF;
    padding: 0 8px;
    border-radius: 10px;
    position: absolute;
    min-width: 100px;
    z-index: 100;
    outline: none;
    color: #fff;
    border: 1px solid #e0d7d7;
    cursor: pointer;
    :active {
      background: #ffffff6e;
    }
`

export const Input = styled.input`
    background: transparent;
    padding: 5px 1px 5px 5px;
    position: relative; top: 0; left: 0;
    width: 40px;
    outline: none;
    color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    :focus {
        padding: 5px 40px 5px 5px;
        background: var(--MenuInner);
        width: 200px;
        color: var(--black);
        border: 1px solid #fdb700;
        top: 0;
        right: 100%;

        ${media.lessThan("large")`
          width: 60%;
        `}
    }
`