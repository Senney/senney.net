import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{ borderRadius: '16px' }}
      fixed={data.file.childImageSharp.fixed}
      alt="Sean Heintz"
    />
  );
};

export default Headshot;
