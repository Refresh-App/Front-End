//Sign in Canvas
import React from "react";
import { routeStyle } from "../style";

const FacebookSignInButton = () => {
  console.log("called");
  //You will notice the functions auth and authSuccess in each SignInButton, Maybe abstract out.
  const auth = () => {
    window.open(
      "https://apidevnow.com/facebookAuth",
      "Sign In With Facebook ;)",
      "width=400,height=500"
    );
    window.addEventListener(
      "message",
      response => {
        authSuccess(response.data); // e.data hold the message
      }
    );
  };

  const authSuccess = userObject => {
    console.log(JSON.parse(userObject));
  };

  return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>GET /facebookAuth</pre>
        <button onClick={auth}>Login with Facebook</button>
        <p>Sample Return</p>
        <pre>
          {` 
 email: "sampleEmail@gmail.com",
 first_name: "John Smith",
 id: "798237947",
 last_name: "Smith",
 name: "John Smith",
 picture: {
   height: 50,
   is_silhouette: false,
   url:
     "https://platform-lookaside.fbsbx.com/platform/prof…=50&width=50&ext=1575832834&hash=AeTXazoZHCqZHOD3",
   width: 50
 },
 token: "<YOURTOKEN>"
  `}
          </pre>
      </div>
    </>
  );
};

export default FacebookSignInButton;
