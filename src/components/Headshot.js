import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/me.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} alt="Sean Heintz" />
    </div>
  );
};

export default Headshot;
