// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { product } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDna7e5yZl7hgzEnmK2r5ZYo9OBSr66cPs",
  authDomain: "e-commerce-c9e24.firebaseapp.com",
  projectId: "e-commerce-c9e24",
  storageBucket: "e-commerce-c9e24.appspot.com",
  messagingSenderId: "381800674026",
  appId: "1:381800674026:web:0f63a832c22d896eb89d93",
};
console.log("se conecta base");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// product.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod).then((data) =>
//     console
//       .log(`se agrego el producto ${data.id}`)
//       .catch((error) => console.log(error))
//   );
// });
