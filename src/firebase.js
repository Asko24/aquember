import firebase from 'firebase'
import { doc, setDoc } from "firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm0-V9k6vS0YznAIxZnVZWxluj3tv8xeY",
  authDomain: "aquemberhydrationapp.firebaseapp.com",
  projectId: "aquemberhydrationapp",
  storageBucket: "aquemberhydrationapp.appspot.com",
  messagingSenderId: "54566582789",
  appId: "1:54566582789:web:914dacc5747b836aebfa6c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


// Add a new document in collection "cities"
setDoc(doc(db, "users", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
