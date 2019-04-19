// =============================================================================
// 💥TO DO: Update the PageLayout component to only utilize styled-components.
//
// NOTES:
// - Remove all React components.
// - Import multiple style-component components from "./PageLayout".
// =============================================================================

import React from "react";
import { storiesOf } from "@storybook/react";
import PageLayout from "./PageLayout";
// import { H1, SubH1 } from "./Typography";

// const Title = ({ name }) => <H1>Welcome to Amica, {name}</H1>;

// const Body = () => (
//   <SubH1>
//     Amica Mutual Insurance Company is a Rhode Island-based mutual insurance
//     company that offers auto, home and life insurance. Amica was founded in 1907
//     by A.T. Vigneron and originally offered auto, fire and theft insurance.
//   </SubH1>
// );

storiesOf("Page Layout", module).add("Default", () => <PageLayout />);
