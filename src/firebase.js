// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1pzQGsbgXcoe3ZAAfyaIKuwgiJ_-JSfI',
  authDomain: 'react-chat-app-cbe44.firebaseapp.com',
  projectId: 'react-chat-app-cbe44',
  storageBucket: 'react-chat-app-cbe44.appspot.com',
  messagingSenderId: '627518519969',
  appId: '1:627518519969:web:a1bb69a608c48e47be0ee0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
