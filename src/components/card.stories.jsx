import React from "react";
import { storiesOf } from "@storybook/react";
import {
  RenderPropCard,
  PropCard,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardSubHeading,
  CardBody,
  CardFooter,
  CardButton
} from "./Card";
import { H1, SubH1 } from "./Typography";
import Button from "./Button";

storiesOf("Card", module)
  .add("Props", () => (
    <PropCard
      heading="Card Title"
      subheading="Card SubTitle"
      body={
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      }
      btnText="Learn More"
    />
  ))
  .add("Render Props", () => (
    <RenderPropCard
      header={() => (
        <>
          <H1 marginBottom="0px" marginTop="0px">
            Card Title
          </H1>
          <SubH1 marginBottom="0px" marginTop="0px">
            Card SubTitle
          </SubH1>
        </>
      )}
      footer={() => <Button>Learn More</Button>}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </RenderPropCard>
  ))
  .add("Styled Components", () => (
    <CardWrapper>
      <CardHeader>
        <CardHeading>Card Title</CardHeading>
        <CardSubHeading>Card SubTitle</CardSubHeading>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardBody>
      <CardFooter>
        <CardButton>Learn More</CardButton>
      </CardFooter>
    </CardWrapper>
  ));
