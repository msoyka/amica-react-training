import React from "react";
import fetchGithubAvatar from "./fetchGithubAvatar";

function smartAvatar(Avatar) {
  return class SmartAvatar extends React.Component {
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
  };
}

export default smartAvatar;
