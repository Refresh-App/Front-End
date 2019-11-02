//Sign in Canvas
import React from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'

const SignInCanvas = () =>{

    return(
        <div className="SignInCanvas">
            <form>
                <input type="text" name="username" id="username"/>
                <input type="password" name="password" id="password"/>
                <input type="submit"/>
            </form>
            <GithubSignInButton/>
            <GoogleSignInButton/>
        </div>
    )
}

export default SignInCanvas;