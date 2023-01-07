import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gKUR-Ld_lHCj9acWrljLcTTcMPTc2Jw",
  authDomain: "foodapp-c66e2.firebaseapp.com",
  databaseURL: "https://foodapp-c66e2-default-rtdb.firebaseio.com",
  projectId: "foodapp-c66e2",
  storageBucket: "foodapp-c66e2.appspot.com",
  messagingSenderId: "553111976716",
  appId: "1:553111976716:web:2c4f8a9a130fe597e0a729"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };