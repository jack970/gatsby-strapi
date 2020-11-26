import React from "react"
import * as S from "./styled"
import { Link } from "gatsby"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>Página Anterior</Link>}
    <p>
      {currentPage} de {numPages} Páginas
    </p>
    {!isLast && <Link to={nextPage}>Próxima Página</Link>}
  </S.PaginationWrapper>
)

Pagination.prototype = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.number,
  nextPage: propTypes.number,
}

export default Pagination
