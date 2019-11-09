import React from 'react';
import SignInCanvas from './components/register/';
import QuestionsCanvas from './components/questions/'
import ProfileCanvas from './components/profile/'
function App() {
  const [user,setUser] = useState()
  user && console.log(user) 
  return (
    <>
    
      {!user && <SignInCanvas setUser={setUser} />}
      <QuestionsCanvas />
      <ProfileCanvas />
    </>
  );
}

export default App;
