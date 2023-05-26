import * as React from "react"
import Layout from "../components/layout"
import {
  myName,
  container,
  info,
} from "../components/style.module.css"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <body>
      <Layout pageTitle="Blog Page"></Layout>
    <div className={container}>
      <h2 className={info}>May-18-2023 |<span className={myName}> Trung</span> are felling full:</h2>
      <h3 className={info}>
        Yum
      </h3>
      <StaticImage src="https://i1.wp.com/thegoldendish.com/wp-content/uploads/2017/04/becky-crab-melt-e1492769666821.jpg?ssl=1" alt="blog1"></StaticImage>
    </div>
    <hr></hr>
    <div className={container}>
    <h2 className={info}>May-17-2023 |<span className={myName}> Trung</span> was felt sad:</h2>
    <h3 className={info}>
      Today is a rainly day! I can't go outside to play soccer :C
    </h3>
    <StaticImage src="https://s3.ppllstatics.com/surinenglish/www/multimedia/2023/05/17/rain-spain-malaga-kl2C-U2003182348144PB-758x531@Diario%20Sur.jpg" alt="blog2"></StaticImage>
    </div>
    </body>
  )
}


export default IndexPage

export const Head = () => <title>Blog Page</title>