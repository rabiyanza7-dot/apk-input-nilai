  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNTtMLBnrNyFVf8y40TUaCvrRe1IreLrg",
    authDomain: "form-nilai-afaad.firebaseapp.com",
    projectId: "form-nilai-afaad",
    storageBucket: "form-nilai-afaad.firebasestorage.app",
    messagingSenderId: "569001608469",
    appId: "1:569001608469:web:44125f1b422cd1b6bf151c",
    measurementId: "G-261V4EQZ5M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);