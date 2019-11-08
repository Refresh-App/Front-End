//Sign in Canvas
import React from "react";
import { routeStyle } from "./style";
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
        <pre>
          {` 
  displayName: "sample user",
  emails: [
    { value: "<SOME_EMAIL>@gmail.com" }
  ],
  id: "000000",
  photos: [
    { value: "SOMEPHOTOLINK" }
  ],
  profileUrl: "https://github.com/sample-user",
  provider: "github",
  token:"<YOURTOKEN>",
  user: [
    { email: "<SAMPLE>@gmail.com", id: 7, message: "Welcome Back" }
  ],
  username: "sample-user"
  `}
          </pre>
      </div>
    </>
  );
};

export default GithubSignInButton;
