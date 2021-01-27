import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBEnDXbZ0ldIePl83xMIp5apdxtbAowlfA",
  authDomain: "barts-bucket-list.firebaseapp.com",
  projectId: "barts-bucket-list",
  storageBucket: "barts-bucket-list.appspot.com",
  messagingSenderId: "950389178084",
  appId: "1:950389178084:web:31059f249388b36dcdf6f1",
  measurementId: "G-HF6GKJX5YQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase