import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"
import Card from "../components/card"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>These are the search results</p>

    <Card carYear="2019" carBrand="Toyota" carModel="Corolla"/>
    <Card carYear="2019" carBrand="Toyota" carModel="Corolla"/>
    <Card carYear="2019" carBrand="Toyota" carModel="Corolla"/>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default SecondPage
