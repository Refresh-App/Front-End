//Sign in Canvas
import React from "react";
import { routeStyle } from "./style";
import { gitAuth } from "./sampleJson";
const GithubSignInButton = () => {
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () => {
    window.open(
      "https://refresh-yo.herokuapp.com/gitAuth",
      "Sign In With Github ;)",
      "width=400,height=500"
    );
    window.addEventListener(
      "message",
      response => {
        authSuccess(response.data); // e.data hold the message
      },
      false
    );
  };

  const authSuccess = userObject => {
    console.log(JSON.parse(userObject));
  };

  return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>GET /gitAuth</pre>
        <button onClick={auth}>Login with github</button>
        <p>Sample Return</p>
        <dir>{JSON.stringify(gitAuth)}</dir>
      </div>
    </>
  );
};

export default GithubSignInButton;
