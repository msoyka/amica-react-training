// ====================================================================================
// 💥TO DO: Add the various conditional states of the PageLayout
//          component that you created inside PageLayout.jsx
//
// 💰TIP: Add these stories below to Page Layout.
//  .add("With Header", () => <PageLayout header={true} />)
//  .add("With Body", () => <PageLayout body={true} />)
//  .add("With Header & Body", () => <PageLayout header={true} body={true} />)
// ====================================================================================

import React from "react";
import { storiesOf } from "@storybook/react";
import PageLayout from "./PageLayout";

storiesOf("Page Layout", module)
  .add("No Header or Body", () => <PageLayout />)
  .add("With Header", () => <PageLayout header={true} />)
  .add("With Body", () => <PageLayout body={true} />)
  .add("With Header & Body", () => <PageLayout header={true} body={true} />);
