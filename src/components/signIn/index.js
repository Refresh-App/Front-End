//Sign in Canvas
import React from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'
import FacebookSignInButton from './FacebookSignInButton'

const SignInCanvas = () =>{

    return(
        <div className="SignInCanvas">
            <GithubSignInButton/><br />
            <GoogleSignInButton/><br />
            <FacebookSignInButton/>
        </div>
    );
}

export default SignInCanvas;