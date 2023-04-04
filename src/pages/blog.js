import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { publishedDate: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.slug}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
