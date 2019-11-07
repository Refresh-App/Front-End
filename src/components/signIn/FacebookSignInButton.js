//Sign in Canvas
import React from "react";


const FacebookSignInButton = () => {
  
  //You will notice the functions auth and authSuccess in each SignInButton, Maybe abstract out. 
  const auth = () =>{
    window.open("https://refresh-yo.herokuapp.com/facebookAuth", "Sign In With Facebook ;)", "width=400,height=500")
    window.addEventListener('message', response =>{
      authSuccess(response.data); // e.data hold the message
    } , false);
  }

  const authSuccess = userObject => {
    console.log(JSON.parse(userObject))
  }

  return (
    <>
      <button onClick={auth}>
        Login with Facebook
      </button>
    </>
  );
};

export default FacebookSignInButton;
