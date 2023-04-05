import React from "react";

import Layout from "../components/layout/layout";
import MyHead from "../components/myHead";

export const Head = () => <MyHead title="About"/>;

const About = () => {
  return (
    <Layout>
      <h1>Hey whats up</h1>
    </Layout>
  );
};

export default About;
