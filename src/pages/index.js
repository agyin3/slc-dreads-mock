import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Services from "../components/services/services"
import Book from "../components/book/book"
import About from "../components/about/about"


const IndexPage = () => {
  const [scroll, setScroll] = useState(0)
  const [height, setHeight] = useState(10000)

  // Grabbing scroll position
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
    setHeight(window.innerHeight)
  }, [])
  
  return(
    <Layout>
      <SEO title="Home" />
      <Hero sitetitle='Salt Lake City Dreadlock Shop' />
      <Services scroll={scroll} height={height} />
      <Book scroll={scroll} height={height} />
      <About scroll={scroll} height={height} />
    </Layout>
  )
}
export default IndexPage
