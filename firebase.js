import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import config from "./config.js";
import { getStorage } from "firebase/storage";
const firebase = initializeApp(config.firebaseConfig);
const fireStorage = getStorage(firebase)
const database = getFirestore(firebase);
export { firebase, database, fireStorage }; 