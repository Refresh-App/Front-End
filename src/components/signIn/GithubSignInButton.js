//Sign in Canvas
import React from "react";


const GithubSignInButton = () => {
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () =>{
    window.open("https://apidevnow.com/gitAuth", "Sign In With Github ;)", "width=400,height=500")
    window.addEventListener('message', response =>{
      authSuccess(response.data); // e.data hold the message
    } , false);
  }

  const authSuccess = userObject => {
    console.log('authSuccess',userObject)
  }

  return (
    
    <>
      <button onClick={auth}>
        Login with github
      </button>
    </>
  );
};

export default GithubSignInButton;
