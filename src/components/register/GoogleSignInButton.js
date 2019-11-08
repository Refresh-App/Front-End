//Sign in Canvas
import React from "react";
import { routeStyle } from "./style";

const GoogleSignInButton = () => {
  console.log("googleCalled");
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () => {
    window.open(
      "https://apidevnow.com/googleAuth",
      "Sign In With googlehub ;)",
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
        <pre>GET /googleAuth</pre>
        <button onClick={auth}>GOOGLE</button>
        <p>Returns</p>
        <pre>{
  `displayName: "sample user",
  emails: [{ value: "<SOME_EMAIL>@gmail.com" }],
  id: "17465565",
  photos: [{ value: "SOMEPHOTOLINK" }],
  profileUrl: "https://github.com/sample-user",
  provider: "github",
  token:
    "<YOURTOKEN>",
  user: [{ email: "<SAMPLE>@gmail.com", id: 7, message: "Welcome Back" }],
  username: "sample-user"`
}
          
        </pre>
      </div>
    </>
  );
};

export default GoogleSignInButton;
