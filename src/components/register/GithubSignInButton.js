//Sign in Canvas
import React from "react";
import { routeStyle } from "../style";
const GithubSignInButton = () => {
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () => {
    window.open(
      "https://refresh-yo.herokuapp.com/gitAuth",
      "Sign In With Github ;)",
      "width=400,height=500"
    );
    window.addEventListener(
      "message",
      response => {
        authSuccess(response.data); // e.data hold the message
      },
      false
    );
  };
  console.log(authSuccess)
  
  const authSuccess = userObject => {
    const User ={...JSON.parse(userObject)}
    console.log(User)
  };
  return (
    <>
      <div style={{ ...routeStyle }}>
        <pre>GET /gitAuth</pre>
        <button onClick={auth}>Login with github</button>
        <p>Sample Return</p>
        <pre>
          {` 
{
    avatar_url: "https://avatars2.githubusercontent.com/u/17465565?v=4",
    bio:
      "Hi everyone, I am John. I pretty much love building stuff from the ground up, or, working on existing projects; though the former is my favorite. bool",
    blog: "http://www.romanjoran.tk",
    company: "@lambdaschools -- Student",
    created_at: "2016-02-25T03:01:29Z",
    email: "sampleEmail@gmail.com",
    events_url: "https://api.github.com/users/John-Smith/events{/privacy}",
    followers: 30,
    followers_url: "https://api.github.com/users/John-Smith/followers",
    following: 37,
    following_url:
      "https://api.github.com/users/John-Smith/following{/other_user}",
    gists_url: "https://api.github.com/users/John-Smith/gists{/gist_id}",
    gravatar_id: "",
    hireable: true,
    html_url: "https://github.com/John-Smith",
    id: 17465565,
    location: "Vancouver, Washington",
    login: "John-Smith",
    name: "John Smith",
    node_id: "MDQ6VXNlcjE3NDY1NTY1",
    organizations_url: "https://api.github.com/users/John-Smith/orgs",
    public_gists: 4,
    public_repos: 107,
    received_events_url:
      "https://api.github.com/users/John-Smith/received_events",
    repos_url: "https://api.github.com/users/John-Smith/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/John-Smith/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/John-Smith/subscriptions",
    token: "TOKEN",
    type: "User",
    updated_at: "2019-10-26T05:41:51Z",
    url: "https://api.github.com/users/John-Smith"
}`}
          </pre>
      </div>
    </>
  );
};

export default GithubSignInButton;
