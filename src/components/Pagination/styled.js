import styled from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #c8c8c8;
  font-weight: 700;
  color:var(--black);
  display: flex;
  padding: 1.5rem 5rem;
  justify-content: space-between;
  margin-top: 3rem;

  a {
    color:var(--black);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }

    ${media.lessThan('large')`
      padding: 1rem;
    `}
  }`