import React from "react";
import { storiesOf } from "@storybook/react";
import H1 from "./Heading";

storiesOf("Heading", module).add("H1", () => (
  <H1 level={1}>This is a Heading 1</H1>
));
