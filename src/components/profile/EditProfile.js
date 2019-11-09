import React from 'react'
import { routeStyle } from "../style";
const EditProfile = () =>{

return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>PUT /profile | Requires User Token</pre>
        <p>Sample PUT</p>
        <pre>
          {` 
{
    fname: "John Smith",
    lname: "Smith",
    display_name: "John Smith",
    profile_pic: '<URL>'
    bio: "<USERBIO>"
}
  `}
          </pre>
      </div>
    </>
  );
};

export default EditProfile;
