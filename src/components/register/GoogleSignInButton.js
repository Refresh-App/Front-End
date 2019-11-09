//Sign in Canvas
import React from "react";
import { routeStyle } from "../style";

const GoogleSignInButton = props => {
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
    window.removeEventListener("message",authSuccess);
    props.setUser(JSON.parse(userObject));
  };

  return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>GET /googleAuth</pre>
        <button onClick={auth}>GOOGLE</button>
        <p>Returns</p>
        <p>Sample Return</p>
        <pre>
          {` 
  {
    email: "USEREMAIL@gmail.com",
    email_verified: true,
    family_name: "LNAME",
    given_name: "FNAME",
    locale: "en",
    name: "LNAME FNAME",
    picture: "https://lh3.googleusercontent.com/-ASaY0SANelo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdokkdjrZohTqzdndENxux0gLpnug/photo.jpg",
    sub: "118064446743336738788",
    token:"<YOURTOKEN>"
    user:{
      id:3,
      email:'USEREMAIL'
    }
  }
  `}
          </pre>
      </div>
    </>
  );
};

export default GoogleSignInButton;
