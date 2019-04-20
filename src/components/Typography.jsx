import styled, { css } from "styled-components";

const headingStyles = css`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const H1 = styled.h1`
  ${headingStyles}
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
`;

export const SubH1 = styled.span`
  ${headingStyles}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.46429em;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
`;
