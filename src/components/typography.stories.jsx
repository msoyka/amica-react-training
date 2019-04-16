import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, SubH1 } from "./Typography";

storiesOf("Typography", module)
  .add("Heading 1", () => <H1>This is a Heading 1</H1>)
  .add("SubHeading", () => <SubH1>This is a SubHeading 1</SubH1>);
