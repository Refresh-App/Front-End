//Sign in Canvas
import React,{useState} from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'
import FacebookSignInButton from './FacebookSignInButton'
import LocalSignUpForm from './LocalSignUpForm'

const SignInCanvas = props =>{
   
    return(
        <div className="SignInCanvas">
             <h1>Register Here</h1>
            <GithubSignInButton setUser={props.setUser}/><br />
            <GoogleSignInButton setUser={props.setUser}/><br />
            <FacebookSignInButton setUser={props.setUser}/><br />
            <LocalSignUpForm setUser={props.setUser}/>
        </div>
    );
}

export default SignInCanvas;