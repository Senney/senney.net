/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';
import './layout.css';

const LayoutContainer = styled.div`
  border: 2px solid rgb(230, 230, 230);
  border-radius: 12px;
  max-width: 960px;
  min-height: 80vh;
  margin: 32px auto 16px auto;
`;

const Body = styled.div`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav />
      <Body>
        <main>{children}</main>
      </Body>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
