import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";
import products from "../products/products";

const firebaseConfig = {
  apiKey: "AIzaSyAnYoXByJY9B_XH5eL2ZpB3mJDRu1V0FaY",
  authDomain: "proyecto-react-coder-e2a94.firebaseapp.com",
  projectId: "proyecto-react-coder-e2a94",
  storageBucket: "proyecto-react-coder-e2a94.appspot.com",
  messagingSenderId: "928544905666",
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

// /* Opcional */
// export async function exportData() {
//   //for ... of
//   const collectionRef = collection(db, "products");

//   for (let item of products) {
//     const { id } = await addDoc(collectionRef, item);
//     console.log("Documento creado", id);
//   }
// }

// export async function exportDataWithBatch() {
//   const batch = writeBatch(db);
//   const collectionRef = collection(db, "products");

//   for (let item of products) {
//     const newDoc = doc(collectionRef);
//     batch.set(newDoc, item);
//   }

//   const resp = await batch.commit();
//   console.log(resp);
// }