import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const BlogPost = ({data}) => {

    return(
<Layout pageTitle={data.mdx.frontmatter.title}>
<p>Date: {data.mdx.frontmatter.date}</p>
<p>Author: {data.mdx.frontmatter.author}</p>
<p>{data.mdx.excerpt}</p>

</Layout>

    )
}

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>

export const query = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        author
        slug
      }
      excerpt
    }
  }
`






export default BlogPost
