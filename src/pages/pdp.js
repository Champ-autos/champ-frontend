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
    <div name="price container" style={{
        width: "90%",
        height: 21,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "visible",
    }}>
      <span>56,000</span>
      <span>$500/mo</span>
      <span>Apply for financing</span>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default ProductDetailPage
