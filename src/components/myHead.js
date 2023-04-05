import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const MyHead = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
    </>
  );
};

export default MyHead;
