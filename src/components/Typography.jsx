import styled, { css } from "styled-components";

const headingStyles = css`
  font-family: Avenir, Arial, sans-serif;
`;

export const H1 = styled.h1`
  ${headingStyles}
  font-size: 2.625rem;
  font-weight: 600;
  line-height: 1.19;
`;

export const SubH1 = styled.span`
  ${headingStyles}
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;
