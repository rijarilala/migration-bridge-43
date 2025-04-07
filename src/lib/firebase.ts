
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhbh2wLi84JWYt1_RcEwQMt-V72HRhw9c", // Clé publique pour l'exemple, à remplacer par votre clé réelle
  authDomain: "migrapro-app.firebaseapp.com",
  projectId: "migrapro-app",
  storageBucket: "migrapro-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:a1b2c3d4e5f6a7b8c9d0e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
