import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <body>
      <Layout pageTitle="Blog Page"></Layout>
      {
      data.allMdx.nodes.map(object => (
        <div>
          <h1>{object.frontmatter.title}</h1>
          <p>Date: {object.frontmatter.date}</p>
          <p>Author: {object.frontmatter.author}</p>
        </div>
      ))
      }
    </body>
  );
};

export const Head = () => <Seo title="Blog Page" />;
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          author
          date
          title
        }
      }
    }
  }
`;
export default BlogPage;
