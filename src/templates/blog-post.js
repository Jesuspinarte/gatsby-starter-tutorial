import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogPost = ({ data }) => {
  const post = data.allWpPost.edges[0].node;
  const imageResolution = post.featuredImage.node.localFile.childImageSharp.fluid;
  console.log(imageResolution);

  return (
    <Layout>
      <Img fluid={imageResolution}/>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1080, toFormatBase64: NO_CHANGE) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
