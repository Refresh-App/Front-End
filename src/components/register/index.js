//Sign in Canvas
import React from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'
import FacebookSignInButton from './FacebookSignInButton'
import LocalSignUpForm from './LocalSignUpForm'
import AddQuestion from '../questions/index'
const SignInCanvas = () =>{
    console.log('herehere')
    return(
        <div className="SignInCanvas">
             <h1>Register Here</h1>
            <GithubSignInButton/><br />
            <GoogleSignInButton/><br />
            <FacebookSignInButton/><br />
            <LocalSignUpForm />
        </div>
    );
}

export default SignInCanvas;