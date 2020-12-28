// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase  from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8aDtB50jSDLfJdq4Hs2pGV6eItakvZNY",
  authDomain: "todo-app-1c09c.firebaseapp.com",
  projectId: "todo-app-1c09c",
  storageBucket: "todo-app-1c09c.appspot.com",
  messagingSenderId: "994935806427",
  appId: "1:994935806427:web:cdaec6895c7c1dd4ae6ffe",
  measurementId: "G-1P3HTHZQW0",
});

const db = firebaseApp.firestore();

export default db;