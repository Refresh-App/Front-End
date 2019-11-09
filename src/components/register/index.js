//Sign in Canvas
import React,{useState} from 'react'
import GithubSignInButton from './GithubSignInButton'
import GoogleSignInButton from './GoogleSignInButton'
import FacebookSignInButton from './FacebookSignInButton'
import LocalSignUpForm from './LocalSignUpForm'

const SignInCanvas = () =>{
    const [user,setUser] = useState()

    user && console.log(user) && window.removeEventListener("message");
    return(
        <div className="SignInCanvas">
             <h1>Register Here</h1>
            <GithubSignInButton setUser={setUser}/><br />
            <GoogleSignInButton setUser={setUser}/><br />
            <FacebookSignInButton setUser={setUser}/><br />
            <LocalSignUpForm setUser={setUser}/>
        </div>
    );
}

export default SignInCanvas;