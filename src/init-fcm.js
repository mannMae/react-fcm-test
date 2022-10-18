import * as firebase from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getMessaging, onMessage } from "firebase/messaging";
import "firebase/messaging";

// const initializedFirebaseApp = firebase.initializeApp({
const firebaseApp = initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyD8bAXN6uWXdBvWnGMYemYnEtU8gJmLdC4",
  authDomain: "fcm-push-7bced.firebaseapp.com",
  projectId: "fcm-push-7bced",
  storageBucket: "fcm-push-7bced.appspot.com",
  messagingSenderId: "211185700909",
  appId: "1:211185700909:web:a6ba1715d74041976068a4",
});

// const messaging = initializedFirebaseApp.messaging();

const messaging = getMessaging(firebaseApp);
console.log(messaging);
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BFaHfNo6Cp93RnX9fWKwb5o0sOgIWfo8uvwWZZKddy08fY814uf3Pllr0eMDQShBKIETkUoXRMvSFTNAu-BqyTM"
);
export { messaging };

// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // ...
// });
