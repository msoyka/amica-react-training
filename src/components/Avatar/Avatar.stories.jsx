import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./index";
import avatarIcon from "./avatar.svg";

storiesOf("Avatar", module).add("default", () => (
  <Avatar src={avatarIcon} alt="Avatar Icon" />
));
