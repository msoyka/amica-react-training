// 💥TO DO: Add own custom props where "propName" is currently located.
// You can add more than one prop if you want.
//
import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, SubH1 } from "./Typography";

storiesOf("Typography", module)
  .add("Heading", () => (
    <>
      <H1>This is a default Heading 1</H1>
      <H1 primary>This is a Primary Heading 1</H1>
      <H1 primary={true}>This is a Primary Heading with boolean</H1>
      <H1 primary={true} fontWeight={600}>
        This is a Primary Heading with boolean and font weight 600
      </H1>
    </>
  ))
  .add("SubHeading", () => (
    <>
      <SubH1>This is a Default SubHeading</SubH1>
      <br />
      <SubH1 borderColor="purple">This is an underlined SubHeading 1</SubH1>
      <br />
      <SubH1 shadow={true}>This is a SubHeading 1 with text shadow</SubH1>
      <br />
      <SubH1 spacing="5px">This is a SubHeading 1 with text spacing</SubH1>
      <br />
      <SubH1 borderColor="pink" shadow={true} spacing="5px">
        Crazy Subheading
      </SubH1>
    </>
  ));
