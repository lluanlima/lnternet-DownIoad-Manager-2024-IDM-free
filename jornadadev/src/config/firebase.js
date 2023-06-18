import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD6fLrx12bi9qmuyblw2pZsqKQT1vh7QvU",
  authDomain: "shortsbitbug.firebaseapp.com",
  databaseURL: "https://shortsbitbug-default-rtdb.firebaseio.com",
  projectId: "shortsbitbug",
  storageBucket: "shortsbitbug.appspot.com",
  messagingSenderId: "372644382100",
  appId: "1:372644382100:web:fb6f67c5ed4f08a5897b81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;