import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { responsiveTitle1 } from "../components/typography.module.css";

const AboutPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="About"
        description="Jeeyoon Hyun is an interaction designer and creative technologist based in Brooklyn."
        // image="https://cdn.sanity.io/images/m0tp65h1/production/1ad1ef11b8a7d6ac8742e5762865fccb33229287-1600x1200.png?rect=0,150,1600,900&w=1200&h=675&fit=crop&auto=format"
        slug={{ current: "about" }}
      />
      <Container>
        <h1 className={responsiveTitle1}>Jeeyoon Hyun</h1>
        <p>Jeeyoon Hyun is an interaction designer and creative technologist based in Brooklyn.</p>
        <p>
          <a href="https://jeeyoonhyun.com">Portfolio</a>
        </p>
        <p>
          <a href="https://twitter.com/jeeyoon_hyun">Twitter</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jeeyoonhyun/">LinkedIn</a>
        </p>
        <p>
          <a href="mailto:jh7194@nyu.edu">Send email</a>
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
