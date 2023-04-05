import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import MyHead from "../components/myHead";

import "../styles/index.scss";

export const Head = () => <MyHead title="Home"/>;

const IndexPage = () => {
  return (
    <Layout>
      <h1>Daniel H</h1>
      <Link to="/about">Link to About</Link>
    </Layout>
  );
};

export default IndexPage;
