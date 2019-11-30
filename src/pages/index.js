import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h1>Find the car that is right for you.</h1>
      <p>Search from thousands of cars.</p>

    <input placeholder="Search for cars" 
      style={{background:"white", padding: "20px",width:"600px" }}/>
   
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
