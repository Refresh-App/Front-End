import React, { useState } from "react";

const SignUpForm = (props) => {
    const [user, setUser] = useState ({
        username: "",
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
        props.onSubmit(user);
    };

    return(
        <div>
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="username"
                placeholder="Enter Your User Name Here"
                onChange={handleChanges}
                />
                <input 
                type="password"
                name ="password"
                placeholder="Create Your Password"
                onChange={handleChanges}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;