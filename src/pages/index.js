import React from 'react';
import { Link } from 'gatsby';

import Headshot from '../components/Headshot';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headshot />
  </Layout>
);

export default IndexPage;
