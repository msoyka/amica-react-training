import React from "react";
import { storiesOf } from "@storybook/react";
import { Wrapper, Header, Body } from "./PageLayout";
import { H1, SubH1 } from "./Typography";

const name = "Matt";

storiesOf("Page Layout", module).add("Default", () => (
  <Wrapper>
    <Header>
      <H1>Welcome to Amica, {name}</H1>
    </Header>
    <Body>
      <SubH1>
        Amica Mutual Insurance Company is a Rhode Island-based mutual insurance
        company that offers auto, home and life insurance. Amica was founded in
        1907 by A.T. Vigneron and originally offered auto, fire and theft
        insurance.
      </SubH1>
    </Body>
  </Wrapper>
));
