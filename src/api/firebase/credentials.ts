// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBy9QOZU4o1ldNN542syG6VIqVCWY0o0gM",
  authDomain: "resev-d3d94.firebaseapp.com",
  projectId: "resev-d3d94",
  storageBucket: "resev-d3d94.appspot.com",
  messagingSenderId: "425799288455",
  appId: "1:425799288455:web:6c16fdeac4321e1d069a22",
  measurementId: "G-P60P44LR3G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);