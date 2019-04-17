// 💥TO DO: Add own custom props where "propName" is currently located.
// You can add more than one prop if you want.
//
import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, SubH1 } from "./Typography";

storiesOf("Typography", module)
  .add("Heading 1", () => <H1 propName="prop here">This is a Heading 1</H1>)
  .add("SubHeading", () => (
    <SubH1 propName="prop here">This is a SubHeading 1</SubH1>
  ));
