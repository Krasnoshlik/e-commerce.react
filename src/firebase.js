import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjMKRVh5WUTKPzYHtolA6Wir68IFWJRbQ",
    authDomain: "e-commerce-ca74e.firebaseapp.com",
    projectId: "e-commerce-ca74e",
    storageBucket: "e-commerce-ca74e.appspot.com",
    messagingSenderId: "360811982128",
    appId: "1:360811982128:web:32e5aad8d0cebc1981acf5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);