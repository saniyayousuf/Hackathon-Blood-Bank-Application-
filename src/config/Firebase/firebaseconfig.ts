// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXb3tnKwVfcuBZYdWO-FSFlh9SkW9Sn5w",
  authDomain: "boilerplate-components.firebaseapp.com",
  projectId: "boilerplate-components",
  storageBucket: "boilerplate-components.appspot.com",
  messagingSenderId: "394146676124",
  appId: "1:394146676124:web:b76b0d3b4af0b37ee6dc59",
  measurementId: "G-YRMBDY3B53"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);