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
    //Maybe Consider loading a profile page at this point
    // userObject = JSON.parse(userObject)
    console.log(JSON.parse(userObject))
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
//href="https://github.com/login/oauth/authorize?client_id=f248d7c7a624257a6899"