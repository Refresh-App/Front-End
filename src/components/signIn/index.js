//Sign in Canvas
import React from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'

const SignInCanvas = () =>{

    return(
        <div className="SignInCanvas">
            <GithubSignInButton/>
            <GoogleSignInButton/>
        </div>
    );
}

export default SignInCanvas;