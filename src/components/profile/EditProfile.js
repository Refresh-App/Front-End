import React from 'react'

const EditProfile = () =>{

return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>PUT /profile</pre>
        <p>Sample PUT -> Active User Token</p>
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
