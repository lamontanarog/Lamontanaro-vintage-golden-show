import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "proyecto-react-coder-e2a94",
  storageBucket: "proyecto-react-coder-e2a94.appspot.com",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_MSG_ID",
  appId: "1:928544905666:web:3820fca7b350b1fed1de5b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}
