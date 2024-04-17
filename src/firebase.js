import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdE6FWqa-8zS9letibc5t53bQa9GQ-Zjk",
  authDomain: "signing-a6fdb.firebaseapp.com",
  projectId: "signing-a6fdb",
  storageBucket: "signing-a6fdb.appspot.com",
  messagingSenderId: "812610998962",
  appId: "1:812610998962:web:19992e17e4b55f7d94afab"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);