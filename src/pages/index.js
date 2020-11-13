import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Wordpress Blog</h1>
    <h4>Posts</h4>
    {data.allWpPost.nodes.map((node) => (
      <div>
        <p>{node.title}</p>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </Layout>
);

export default Home;

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date]}) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;