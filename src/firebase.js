import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvYJGzVwk2YwIxPsTlCkJg83F5E4KJiHg",
  authDomain: "slack-clone-d32d6.firebaseapp.com",
  databaseURL: "https://slack-clone-d32d6.firebaseio.com",
  projectId: "slack-clone-d32d6",
  storageBucket: "slack-clone-d32d6.appspot.com",
  messagingSenderId: "358863433945",
  appId: "1:358863433945:web:c5b4c446a80139e4c7cec8",
  measurementId: "G-KF2PFCRDWN",
};

const firebaseApp = firebase.initializaApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
