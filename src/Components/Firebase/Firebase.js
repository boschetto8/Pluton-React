import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAo2iEAMyE6p03pOQ1P35aTkBYPsY389iI",
  authDomain: "pluton-commerce.firebaseapp.com",
  projectId: "pluton-commerce",
  storageBucket: "pluton-commerce.appspot.com",
  messagingSenderId: "398271273497",
  appId: "1:398271273497:web:219034bb06e64f05fa2888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = 