import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore"; // or 'firebase/firestore' in the web build


const firebaseConfig = {
  apiKey: "AIzaSyCuIjeRPZh42mldGZlyzDlkeXuDen-IYDs",
  authDomain: "nwhack2023-4356a.firebaseapp.com",
  projectId: "nwhack2023-4356a",
  storageBucket: "nwhack2023-4356a.appspot.com",
  messagingSenderId: "849644658403",
  appId: "1:849644658403:web:ed45881b8ffa21cf1a2fd6",
  measurementId: "G-H13WKJP9VN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function writeUserData(userId, email, weight) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    email: email,
    weight: weight
  });
}
// get database from firebase firestore
export const db = getDatabase(app);
export { auth, writeUserData, doc, setDoc, collection };