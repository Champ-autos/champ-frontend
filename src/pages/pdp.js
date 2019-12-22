import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetailPage = () => (
  <Layout>
    <SEO title="Page two" />

    <Image />
    <h1>2018 Mercedes Benz CLS</h1>
    <h3>56,000</h3>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default ProductDetailPage
