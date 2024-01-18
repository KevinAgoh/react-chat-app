import { auth } from '../firebase';

const Welcome = ({ user }) => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button onClick={signOut} className='loggin-button'>
        Sign-out
      </button>
      <span>Welcome to the chat</span>
    </div>
  );
};

export default Welcome;
