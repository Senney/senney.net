import React from 'react';
import styled from 'styled-components';

import Headshot from '../components/Headshot';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ContentContainer = styled.div`
  padding: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BodyTextContainer = styled.div`
  padding-left: 16px;
  flex-basis: 45%;
  flex-grow: 1;
`;

const BodyText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: justify;
  text-justify: auto;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentContainer>
      <BodyText>
        Hey, welcome to my brain. I'm Sean, a Full Stack Software Developer
        based in Calgary, AB, Canada. Right now I work at Replicon building
        products which help our customers solve the complex problems presented
        by resource, project, and time management.
      </BodyText>
      <BodyText>
        As a software professional, I enjoy architecting scalable, efficient
        solutions which allow our product to be delivered to millions of users
        around the world. Generally my time is split about 50/50 between backend
        system architecture and frontend development, with a smattering of
        DevOps, Developer Experience, UI/UX design, mentorship, and other
        responsbilities sprinkled in to fill the gaps.
      </BodyText>
      <FlexContainer>
        <div style={{ flexBasis: '30%' }}>
          <Headshot />
        </div>
        <BodyTextContainer>
          <BodyText>
            In my personal life, I take great joy in several hobbies which
            occupy both my time and my wallet. On the weekends in Winter I can
            typically be found at the ski hill or at a Calgary Flames hockey
            game; in Summer I enjoy walking, cycling, frisbee and soccer.
          </BodyText>
          <BodyText>
            Currently I'm spending my time working with the following
            technologies:
            <ul>
              <li>React JS</li>
              <li>Apollo GraphQL</li>
              <li>Node Js</li>
              <li>Golang</li>
              <li>The AWS Stack</li>
            </ul>
            However I'm always keeping my eyes open for interesting and
            challenging problems to solve.
          </BodyText>
        </BodyTextContainer>
      </FlexContainer>
    </ContentContainer>
  </Layout>
);

export default IndexPage;
