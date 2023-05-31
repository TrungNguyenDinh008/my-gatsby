import * as React from "react"
import Layout from "../components/layout"
import { font } from "../components/style.module.css"
import Seo from "../components/seo"


const IndexPage = ({data}) => {
  return (
   
      <Layout pageTitle="Home Page" className={font}>
        <p>Hi there! This is my first Blog Site. I'm making this by following The Gatsby Tutorial.</p>
      </Layout>
      
    
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page"/>
