import * as React from "react"
import Layout from "../components/layout"
import {
     font ,
     containerInfo,
     info,
     myFaceImage
} from "../components/style.module.css"
import { graphql } from "gatsby"
import Seo from "../components/seo"


const AboutPage = ({data}) => {
    return (
        <body className={font}>
         <Layout pageTitle = "About Page"></Layout>
         
         <h1>My Profile:</h1>   
         <div className={containerInfo}> 
         <div>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1685006848~exp=1685007448~hmac=232fa586746bff7a91730bef6d6258bf87d87d956b37df4b2d5fa5389433fc08" alt="my face" className={myFaceImage}></img>
         </div>
         <div className={info}>
          <p><b>Name:</b> {data.site.siteMetadata.human.fullName}</p>
         <p><b>Age:</b> {data.site.siteMetadata.human.age}</p>
         <p><b>Address:</b> {data.site.siteMetadata.human.address}</p>
         <p><b>Hobby:</b> {data.site.siteMetadata.human.hobby}</p>  
         </div>
         </div>
        </body>
    )
}
export const data = graphql`
query {
    site {
        siteMetadata {
          human {
            fullName
            age
            address
            hobby
          }
        }
    }
}
`
export const Head = () => <Seo title="About Page"/>

export default AboutPage
