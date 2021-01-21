import React from "react"
import PropTypes from "prop-types"
import InnerHeader from '../InnerHeader'
import * as S from './styled'
import GlobalStyles from "../../Styles/global"
import InnerFooter from '../InnerFooter'
import MenuTop from '../MenuTop'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <MenuTop />
      <GlobalStyles />
      <InnerHeader />
      <S.LayoutMain>{children}</S.LayoutMain>
      <InnerFooter />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
