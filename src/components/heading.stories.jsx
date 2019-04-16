import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";

storiesOf("Heading", module).add("H1", () => (
  <Heading>This is a Heading 1</Heading>
));
