//Sign in Canvas
import React from "react";
import axios from 'axios'

const GithubSignInButton = () => {
    axios.get('https://apidevnow.com/gitAuth')
    .then(res =>console.log(res))
    .catch(res =>console.log(res))
  return (
    <>
      <a href="https://github.com/login/oauth/authorize?client_id=f248d7c7a624257a6899">
        Login with github
      </a>
    </>
  );
};

export default GithubSignInButton;
