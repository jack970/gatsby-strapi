import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Modal from '../components/Modal'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Modal>Content</Modal>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
