import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Welcome from './components/Welcome';
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className='App'>
      {user ? (
        <Welcome user={user} />
      ) : (
        <button onClick={googleSignIn} className='loggin-button'>
          Sign-in with google
        </button>
      )}
    </div>
  );
}

export default App;
