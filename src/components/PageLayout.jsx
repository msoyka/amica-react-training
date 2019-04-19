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
  max-width: 800px;
  margin: auto;
  width: 100%;
`;

const PageLayout = () => (
  <Wrapper>
    <Header>Page Header</Header>
    <Body>Page Body Content</Body>
  </Wrapper>
);

export default PageLayout;
