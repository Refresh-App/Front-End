import React, { useState } from "react";
import {routeStyle} from './style'
import axios from 'axios'
const LocalSignUpForm = ()=> {
    const [user, setUser] = useState ({
        email: "",
        password: ""
    });

    const handleChanges = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://apidevnow.com/register',user)
        .then(res => console.log(res.data))
    };

    return(
        <div style={{ ...routeStyle }}>
            <p>Local Form </p>
            <pre>POST /register</pre>
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={handleChanges}
                /><br />
                <input 
                type="password"
                name ="password"
                placeholder="Password"
                onChange={handleChanges}
                /><br />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default LocalSignUpForm;