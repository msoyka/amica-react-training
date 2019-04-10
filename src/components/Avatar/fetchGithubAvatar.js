function fetchGithubAvatar(githubID) {
  const mockData = {
    src: `https://avatars3.githubusercontent.com/u/${githubID}`,
    alt: `Avatar`
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!githubID) {
        reject("No GitHub ID");
      }
      resolve(mockData);
    }, 1000);
  });
}

export default fetchGithubAvatar;
