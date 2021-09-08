import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyD1gV1Ieb_85-TjoulqE4xndjQVmpyRLgE",
  authDomain: "superchat-9c46b.firebaseapp.com",
  projectId: "superchat-9c46b",
  storageBucket: "superchat-9c46b.appspot.com",
  messagingSenderId: "765330108152",
  appId: "1:765330108152:web:b264a080efd8b02e17950d",
  measurementId: "G-QS8NP9PF04"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

function SignIn() {

  return (
    <button onClick={}>Sign In with Google</button>
  )
}

function SignOut() {

}

function ChatRoom() {

}

export default App;
