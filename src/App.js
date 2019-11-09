import React,{useState} from 'react';
import SignInCanvas from './components/register/';
import QuestionsCanvas from './components/questions/'
import ProfileCanvas from './components/profile/'
function App() {
  const [user,setUser] = useState()
  user && console.log(user) 
  return (
    <>
    
  {!user ? <SignInCanvas setUser={setUser} /> : <h1>{`Currently Logged in as ${user.email}`}</h1>}
      <QuestionsCanvas user={user} />
      <ProfileCanvas />
    </>
  );
}

export default App;
