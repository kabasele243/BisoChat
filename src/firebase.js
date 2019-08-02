import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDx-CMXqCQN4wkpohvHuh_4rxV39vEbsOY",
  authDomain: "bisochat.firebaseapp.com",
  databaseURL: "https://bisochat.firebaseio.com",
  projectId: "bisochat",
  storageBucket: "bisochat.appspot.com",
  messagingSenderId: "868695650206",
  appId: "1:868695650206:web:b71a5c2ab94d20fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
