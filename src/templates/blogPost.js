import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout";

const Bold = ({ children }) => <b className="bold">{children}</b>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData } = node.data.target;
      if (!gatsbyImageData) {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      }
      console.log(gatsbyImageData);
      return <GatsbyImage image={gatsbyImageData} alt={node.data.target.description}/>;
    },
  },
};

// NOTE: Why do we export here?
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(formats: AUTO, layout: FULL_WIDTH)
            description
          }
        }
      }
    }
  }
`;

const Post = (props) => {
  const { body } = props.data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{body && renderRichText(body, options)}</div>
    </Layout>
  );
};

export default Post;
