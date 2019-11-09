import React from "react";
import EditProfile from "./EditProfile";
const ProfileCanvas = () => {
  return (
    <>
      <h1>Profile</h1>
      <p>Profile Creation is automatic and happens during the registration process. A user must be logged in and can only edit their profile data</p>
      <EditProfile />
    </>
  );
};

export default ProfileCanvas;
