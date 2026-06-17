import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0St-pT_TerHg2ZeM-ELtVbHPbWRVCi9I",
  authDomain: "rifa-dia-padre.firebaseapp.com",
  projectId: "rifa-dia-padre",
  storageBucket: "rifa-dia-padre.firebasestorage.app",
  messagingSenderId: "515111519900",
  appId: "1:515111519900:web:abc7f5d59fa29c9e11cf59",
  measurementId: "G-PMT83HWC1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
