import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>These are the search results</h1>
    <p>Welcome to page 2</p>

    <Card/>
      Card Header
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


function Card (props) {
return (
  <div style={{width: "100%",height: "200px"}}>
    {props.title}
    <Image />
  </div>
  )
}

export default SecondPage
