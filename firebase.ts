import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1VKXVyNLnHD3CO15tJXmCyaibbFQmFo",
  authDomain: "chatgpt-remake.firebaseapp.com",
  projectId: "chatgpt-remake",
  storageBucket: "chatgpt-remake.appspot.com",
  messagingSenderId: "350352149928",
  appId: "1:350352149928:web:ee96fef4fb74d68489e19d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}