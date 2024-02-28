import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7Oiv408t_vKHxPwfF6qktyaLv0MVLOWY",
  authDomain: "portfolio-4532a.firebaseapp.com",
  projectId: "portfolio-4532a",
  storageBucket: "portfolio-4532a.appspot.com",
  messagingSenderId: "551688631056",
  appId: "1:551688631056:web:649e66e8184645e1faeb95",
};

const db = initializeApp(firebaseConfig);

export default db;
