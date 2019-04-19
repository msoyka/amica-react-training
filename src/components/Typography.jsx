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
  color: ${props => (props.primary ? "green" : "palevioletred")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
`;

export const SubH1 = styled.span`
  ${headingStyles}
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.46429em;
  ${({ borderColor }) =>
    borderColor && `border-bottom: 1px solid ${borderColor};`}
  ${({ shadow }) => shadow && `text-shadow: 1px 1px 0 #444;`}
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "normal")};
`;
