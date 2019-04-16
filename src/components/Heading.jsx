import * as React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: Avenir, Arial, sans-serif;
  font-size: 2.625rem;
  font-weight: 600;
  line-height: 1.19;
`;

const Heading = ({ children }) => <H1>{children}</H1>;

export default Heading;
