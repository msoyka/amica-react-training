// ====================================================================================
// 💥TO DO: Update the PageLayout props to pass string values.
// ====================================================================================

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
