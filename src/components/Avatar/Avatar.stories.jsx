import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./index";
import SmartAvatar from "./SmartAvatar";

storiesOf("Avatar", module)
  .add("default", () => <Avatar />)
  .add("Smart Avatar", () => <SmartAvatar githubID="16545161" />);
