import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Input from "../components/input"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 500,
  }}>

      <div style={{ maxWidth: `375px`, marginBottom: `1.45rem` }}>
        <h1 style={{textAlign:`center`, color:"white"}}>
          Find the car that is right for you.
        </h1>
      <Input />
    
      <Link to="/page-2/">Search</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
