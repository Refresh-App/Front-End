import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignInCanvas from './components/signIn/';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <>
    <Link to="/signup">Sign Up Here</Link>
      <Route exact path="/signup" component={SignUp} />
      <SignInCanvas />
    </>
  );
}

export default App;
