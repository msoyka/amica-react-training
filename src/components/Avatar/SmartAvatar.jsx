import React from "react";
import Avatar from "./index";
import fetchGithubAvatar from "./fetchGithubAvatar";

class SmartAvatar extends React.Component {
  // Note: No longer needed to create constructor
  // Read More: https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599

  // constructor(props) {
  //   super(props);
  //   this.state = { avatar: {} };
  // }

  state = { avatar: {} };

  async componentDidMount() {
    try {
      const response = await fetchGithubAvatar(this.props.githubID);
      this.setState({ avatar: response });
    } catch (error) {
      console.error("error: ", error);
    }
  }

  render() {
    const { avatar } = this.state;
    if (Object.keys(avatar).length) {
      return <Avatar src={avatar.src} alt={avatar.alt} />;
    } else {
      return <Avatar />;
    }
  }
}

export default SmartAvatar;
