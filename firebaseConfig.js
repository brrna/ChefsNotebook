import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhPjB0nVneOR4f0xez51tQ5brgXZa2pKw",
  authDomain: "chefs-notebook-ff2d1.firebaseapp.com",
  projectId: "chefs-notebook-ff2d1",
  storageBucket: "chefs-notebook-ff2d1.appspot.com",
  messagingSenderId: "952066729751",
  appId: "1:952066729751:web:e256a9309cc9c071d53952"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app)
export default app