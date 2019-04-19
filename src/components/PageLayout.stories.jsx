// ====================================================================================
// 💥TO DO: Update the PageLayout props to pass string values.
// ====================================================================================

import React from "react";
import { storiesOf } from "@storybook/react";
import PageLayout from "./PageLayout";
import { H1, SubH1 } from "./Typography";

const Title = ({ name }) => <H1>Welcome to Amica, {name}</H1>;

const Body = () => (
  <SubH1>
    Amica Mutual Insurance Company is a Rhode Island-based mutual insurance
    company that offers auto, home and life insurance. Amica was founded in 1907
    by A.T. Vigneron and originally offered auto, fire and theft insurance.
  </SubH1>
);

storiesOf("Page Layout", module)
  .add("No Header or Body", () => <PageLayout />)
  .add("With Header", () => <PageLayout header={<Title name="Matt" />} />)
  .add("With Body", () => <PageLayout body={Body} />)
  .add("With Header & Body", () => (
    <PageLayout header={<Title name="Matt" />} body={Body} />
  ));
