import * as React from "react";
import Layout from "../../components/layout";
import { container, font, navBarLink } from "../../components/style.module.css"
import Seo from "../../components/seo";
import { graphql, Link} from "gatsby";

const BlogPage = ({ data }) => {
  return (
      <Layout pageTitle="Blog Page" className={font}>
 {data.allMdx.nodes.map((object) => (
        <div key={object.id} className={container}>
          <Link to={`/blog/${object.frontmatter.slug}`} className={navBarLink}>{object.frontmatter.title}</Link>
          <p>Date: {object.frontmatter.date}</p>
          <p>Author: {object.frontmatter.author}</p>
          <p>{object.excerpt}</p>
        </div>
      ))}
      </Layout>
  );
};

export const Head = () => <Seo title="Blog Page" />;
export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date (formatString :"DD-MM-YYYY")
        author
        slug
      }
      id
      excerpt
    }
  }
}
`;
export default BlogPage;
