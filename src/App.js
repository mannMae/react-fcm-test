import React, { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD8bAXN6uWXdBvWnGMYemYnEtU8gJmLdC4",
  authDomain: "fcm-push-7bced.firebaseapp.com",
  projectId: "fcm-push-7bced",
  storageBucket: "fcm-push-7bced.appspot.com",
  messagingSenderId: "211185700909",
  appId: "1:211185700909:web:a6ba1715d74041976068a4",
});

const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("granted");
      }
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
