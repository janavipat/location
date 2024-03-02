import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQvbVAuAdshyoBtem8WRna_zj6ZM4d90k",
  authDomain: "workdeal-a72bb.firebaseapp.com",
  projectId: "workdeal-a72bb",
  storageBucket: "workdeal-a72bb.appspot.com",
  messagingSenderId: "251120435049",
  appId: "1:251120435049:web:8f8f0c7125b11c783c07f8",
  measurementId: "G-KQ8G4J5HHH"
};
 
var app = null;
var user=null;
var auth = null;
var storage = null;
let database = null;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  database = getDatabase(app); 
}

if(auth!=null){
  user=auth.currentUser;
}else{
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  database = getDatabase(app);
  user=auth.currentUser;
}
storage=getStorage(app);

const googleProvider =  new GoogleAuthProvider()

export {googleProvider}

export {user}

export {storage}

export { auth }

export { database }

