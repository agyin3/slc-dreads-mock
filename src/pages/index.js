import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Services from "../components/services/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero sitetitle='Salt Lake City Dreadlock Shop' />
   <Services />
  </Layout>
)

export default IndexPage
