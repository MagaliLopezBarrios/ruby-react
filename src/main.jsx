import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlyZWU-qkUKeDL6J77H5Y23JXqFMKdLAc",
  authDomain: "ruby-canali-397a2.firebaseapp.com",
  projectId: "ruby-canali-397a2",
  storageBucket: "ruby-canali-397a2.appspot.com",
  messagingSenderId: "198143604127",
  appId: "1:198143604127:web:f69a1f712f37b6df0b79aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
    
  
)

