import React from "react"
import PropTypes from "prop-types"
import MenuTop from '../MenuTop'
import InnerHeader from '../InnerHeader'
import * as S from './styled'
import InnerFooter from '../InnerFooter'
import GlobalStyles from "../../Styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <MenuTop/>
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
