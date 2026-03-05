import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCByFWBT6t-Wz8IJqis-a7Iv4sw9e86Kzc",
  authDomain: "day-of-calm-2026.firebaseapp.com",
  projectId: "day-of-calm-2026",
  storageBucket: "day-of-calm-2026.firebasestorage.app",
  messagingSenderId: "727642419613",
  appId: "1:727642419613:web:417f50a4278337fe5bff74",
  measurementId: "G-CDY479BG3K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize analytics only in browser
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics, collection, addDoc, onSnapshot, query, orderBy, getDocs };
