import React, { useState }from "react";

const UserType = (props) => {
    const [user, setUser] = useState({
        userType:"",
        name:""
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
        <h1>Are You A Student, TL, or SL</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="usertype"
                placeholder="Enter Student, TL, or SL here"
                onChange={handleChanges}
                />
        <h1>What's your name?</h1>
                <input
                type="text"
                name="name"
                placeholder="Enter Your Name Here"
                onChange={handleChanges}
                />
                <button type="submit">Venture Onwards!</button>
            </form>
    </div>
)
};
export default UserType;