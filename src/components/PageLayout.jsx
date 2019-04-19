// ============================================================
// 💥TO DO: Change the passed props from boolean to string,
//          and render the props in the component.
// ============================================================

import React from "react";
import styled from "styled-components";
import { H1, SubH1 } from "./Typography";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 10px 5px;
  background-color: #efefef;
  color: gray;
`;

const Body = styled.div`
  padding: 1rem;
  width: 100%;
`;

const NoPropsComponent = () => (
  <div>
    <H1>No props passed to component</H1>
    <SubH1>Please pass props for this component to function properly.</SubH1>
  </div>
);

const DefaultHeader = () => <H1>Welcome to Amica</H1>;

const DefaultBody = () => (
  <SubH1>
    Amica Mutual Insurance Company is a Rhode Island-based mutual insurance
    company that offers auto, home and life insurance. Amica was founded in 1907
    by A.T. Vigneron and originally offered auto, fire and theft insurance.
  </SubH1>
);

const PageLayout = ({ header, body }) =>
  header || body ? (
    <Wrapper>
      {(header && (
        <Header>
          <H1>{header}</H1>
        </Header>
      )) || <DefaultHeader />}
      {(body && (
        <Body>
          <SubH1>{body}</SubH1>
        </Body>
      )) || <DefaultBody />}
    </Wrapper>
  ) : (
    <NoPropsComponent />
  );

export default PageLayout;
