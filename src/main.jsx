import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARevbJ499mdVE5ut38aFJHkPQKcLRKMwg",
  authDomain: "ametrina-gaier.firebaseapp.com",
  projectId: "ametrina-gaier",
  storageBucket: "ametrina-gaier.appspot.com",
  messagingSenderId: "1099326790403",
  appId: "1:1099326790403:web:cba73c8f0aa8b15fdfa736",
  measurementId: "G-760PHLXV1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
