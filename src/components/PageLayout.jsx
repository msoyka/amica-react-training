// ==========================================================================================================
// 💥TO DO: Utilize as many of the conditional syntax examples below in
//          order make the PageLayout less prone to runtime errors.
//
// 🗒 POPULAR CONDITIONAL SYNTAX EXAMPLES
// ✅ if/else: if (header) {} else {}
// ✅ ternary: header ? : ;
// ✅ Logical AND Operator: true && 'Dog'
// ✅ Logical OR Operator: false || 'Cat'
// ✅ Double NOT (!!): !!true
//
// 💻 RESOURCES
// 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
//
// 💰TIP: Styling has been done for you!
// 💰TIP: Use the default components for graceful degradation.
// ==========================================================================================================

import React from "react";
import styled from "styled-components";

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
    <h1>No props passed to component</h1>
  </div>
);

const DefaultHeader = () => <h6>Welcome to Amica</h6>;

const DefaultBody = () => (
  <p>
    Amica Mutual Insurance Company is a Rhode Island-based mutual insurance
    company that offers auto, home and life insurance. Amica was founded in 1907
    by A.T. Vigneron and originally offered auto, fire and theft insurance.
  </p>
);

const PageLayout = ({ header, body }) => (
  <Wrapper>
    <Header>Page Header</Header>
    <Body>Page Body Content</Body>
  </Wrapper>
);

export default PageLayout;
