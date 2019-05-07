import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { H1, SubH1 } from "./Typography";

// ============================================================
// Reusable Styles!
// ============================================================
export const CardWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2rem;
  max-width: 500px;
`;

export const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const CardHeading = styled(H1)`
  margin: 0;
`;

export const CardSubHeading = styled(SubH1)`
  margin: 0;
`;

export const CardBody = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.46429em;
`;

export const CardFooter = styled.div`
  ${CardBody} + & {
    margin-top: 1rem;
  }
`;

export const CardButton = Button;

// ============================================================
// Render Props Component
// A component with a render prop takes a function that
// returns a React element and calls it instead of
// implementing its own render logic.
// ============================================================
export const RenderPropCard = ({ children, header, footer }) => (
  <CardWrapper>
    {header && <CardHeader>{header()}</CardHeader>}
    {children && <CardBody>{children}</CardBody>}
    {footer && <CardFooter>{footer()}</CardFooter>}
  </CardWrapper>
);

// ============================================================
// Props Component
// ============================================================
export const PropCard = ({ heading, subheading, body, btnText }) => (
  <CardWrapper>
    {(heading || subheading) && (
      <CardHeader>
        {heading && <CardHeading>{heading}</CardHeading>}
        {subheading && <CardSubHeading>{subheading}</CardSubHeading>}
      </CardHeader>
    )}
    {body && <CardBody>{body}</CardBody>}
    {btnText && (
      <CardFooter>
        <Button>{btnText}</Button>
      </CardFooter>
    )}
  </CardWrapper>
);

export default PropCard;
