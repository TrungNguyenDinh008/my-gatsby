import * as React from "react";
import Layout from "../components/layout";
import { container } from "../components/style.module.css"
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <body>
      <Layout pageTitle="Blog Page"></Layout>
      {data.allMdx.nodes.map((object) => (
        <div key={object.id} className={container}>
          <h1>{object.frontmatter.title}</h1>
          <p>Date: {object.frontmatter.date}</p>
          <p>Author: {object.frontmatter.author}</p>
          <p>{object.excerpt}</p>
        </div>
      ))}
    </body>
  );
};

export const Head = () => <Seo title="Blog Page" />;
export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date
        author
      }
      id
      excerpt
    }
  }
}
`;
export default BlogPage;
