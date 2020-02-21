import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from '../components/PageError/styled'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.PostHeader>
      <S.PostTitle>404</S.PostTitle>
      <S.PostDescription>PÁGINA NÃO ENCONTRADA.</S.PostDescription>
    </S.PostHeader>
  </Layout>
)

export default NotFoundPage
