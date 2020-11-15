import React from "react"

import Layout from "../components/layout"
import LandingBio from "../components/landing-bio"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
