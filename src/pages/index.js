import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Services from "../components/services/services"
import Book from "../components/book/book"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero sitetitle='Salt Lake City Dreadlock Shop' />
    <Services />
    <Book />
  </Layout>
)

export default IndexPage
