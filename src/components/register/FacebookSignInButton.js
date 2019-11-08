//Sign in Canvas
import React from "react";
import {routeStyle} from './style'

const FacebookSignInButton = () => {
  console.log('called')
  //You will notice the functions auth and authSuccess in each SignInButton, Maybe abstract out. 
  const auth = () =>{
    window.open("https://apidevnow.com/facebookAuth", "Sign In With Facebook ;)", "width=400,height=500")
    window.addEventListener('message', response =>{
      authSuccess(response.data); // e.data hold the message
    } , false);
  }

  const authSuccess = userObject => {
    console.log(JSON.parse(userObject))
  }

  return (
    <>
    <div style={{...routeStyle}}>
      <pre>GET /facebookAuth</pre>
      <button onClick={auth}>
        Login with Facebook
      </button>
    </div>
    </>
  );
};

export default FacebookSignInButton;
