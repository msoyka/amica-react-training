// =================================================================================================
// 💥TO DO: Update the PageLayout props to pass React component values.
//
// NOTES:
// - Create Title component that takes in a name prop and pass to PageLayout via header prop
// - Create Body component that takes in a name prop and pass to PageLayout via body prop
// - Use the {H1, SubH1} components within the Title and Body components
//
// START COMPONENTS:
// const Title = () => {};
// const Body = () => {};
// =================================================================================================

import React from "react";
import { storiesOf } from "@storybook/react";
import PageLayout from "./PageLayout";

const name = "Matt";

storiesOf("Page Layout", module)
  .add("No Header or Body", () => <PageLayout />)
  .add("With Header", () => <PageLayout header={`Welcome ${name}`} />)
  .add("With Body", () => (
    <PageLayout body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
  ))
  .add("With Header & Body", () => (
    <PageLayout header={`Welcome ${name}`} body="This is your profile." />
  ));
