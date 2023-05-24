import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>Hi there! This my first demo, I'm making this by following the Gatsby Tutorial.</p>
            </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
