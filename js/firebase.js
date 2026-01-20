import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDxDxI0dGvINdGDkQ0JlzpRAIFm38_PByQ",
    authDomain: "pdf-learning-portal.firebaseapp.com",
    projectId: "pdf-learning-portal",
    storageBucket: "pdf-learning-portal.firebasestorage.app",
    messagingSenderId: "812848105163",
    appId: "1:812848105163:web:6be89f4589201db8e1bd4e"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
