import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  color: #ececec;
  font-size: 13px;
  padding: 0 5rem 0;
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  justify-content: space-between;

  ${media.lessThan("large")`
        padding: 0;
        font-size: 17px;
        font-weight: 700;
        display: block;

        #texto {
            color: var(--texto);
        }
    `}

  #texto {
    float: left;
    line-height: 1.6rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  #ul-tema {
    padding: 0.5rem;
    width: 12rem;

    ${media.lessThan("large")`
            width: auto;
            float: right;
            padding: 1rem;
            `}
  }
`

export const MenuLinksItem = styled.li`
  color: #fff;
  padding: 0.5rem;
  float: left;
  display: list-item;
  transition: all ease 0.5s;
  line-height: 0.3rem;

  &:hover {
    background: var(--black);
    color: var(--white);
  }

  ${media.lessThan("large")`
        float: none;
    `}
`

export const MenuLinksIcon = styled.i`
  padding: 2px 2px 0;
  float: left;
  width: 22px;
  height: 22px;

  &.dark {
    color: #fff;

    &:hover {
      color: #fdb700;
    }
  }

  ${media.lessThan("large")`
        color: var(--texto);
    `}
`

export const MenuLinksLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  ${MenuLinksItem}:hover & {
    color: var(--white);
  }
`

export const MenuLinksGroup = styled.div`
  ${media.lessThan("large")`
        display: none;
    `}
`
