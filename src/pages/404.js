import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import MyHead from "../components/myHead";

export const Head = () => <MyHead title="404"/>;

const NotFound = (props) => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <Link to="/">Head Home!</Link>
    </Layout>
  );
};

export default NotFound;
