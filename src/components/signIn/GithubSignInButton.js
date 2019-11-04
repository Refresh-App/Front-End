//Sign in Canvas
import React from "react";

const GithubSignInButton = () => {
  return (
    <>
      <a href="https://github.com/login/oauth/authorize?client_id=f248d7c7a624257a6899">
        Login with github
      </a>
      <iframe src="https://apidevnow.com/gitAuth" />
    </>
  );
};

export default GithubSignInButton;
