// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1VvWGfpbfu2dP1M4vlqSEcN0mlT2O34U",
  authDomain: "ecommerce-serigrafia.firebaseapp.com",
  projectId: "ecommerce-serigrafia",
  storageBucket: "ecommerce-serigrafia.appspot.com",
  messagingSenderId: "1097951484850",
  appId: "1:1097951484850:web:83fcc486e52e9ad5e562ab"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//productos.forEach((prod) => {
//   addDoc (collection (db, 'productos'), prod)
//   .then((elem) => console.log(`se agrego el producto id ${elem.id}`))
//   .catch((error) => console.log(error));
//});