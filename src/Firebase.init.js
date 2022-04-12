// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJy2GYJ98SHPsy6S6gJY3oowRVbAqj6ts",
  authDomain: "genius-car-services-5b03b.firebaseapp.com",
  projectId: "genius-car-services-5b03b",
  storageBucket: "genius-car-services-5b03b.appspot.com",
  messagingSenderId: "284903259330",
  appId: "1:284903259330:web:58290da559eec9f80bcf5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
