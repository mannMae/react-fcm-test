importScripts("https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.3/firebase-messaging.js");
firebase.initializeApp({
  // Project Settings => Add Firebase to your web app

  apiKey: "AIzaSyD8bAXN6uWXdBvWnGMYemYnEtU8gJmLdC4",
  authDomain: "fcm-push-7bced.firebaseapp.com",
  projectId: "fcm-push-7bced",
  storageBucket: "fcm-push-7bced.appspot.com",
  messagingSenderId: "211185700909",
  appId: "1:211185700909:web:a6ba1715d74041976068a4",

  //   databaseURL: "https://react-web-push.firebaseio.com",
  //   measurementId: "G-L4BHNXWRD3",
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      var options = {
        body: "This is notification body",

        //icons are supported in browser
        icon: "/favicon.ico",

        //images are supported in android
        image: "/logo192.png",

        //direction of text ltr-left to right
        dir: "ltr",

        //lang should be BCP 47 compliant
        lang: "en-US",

        //vibrate is supported in selected devices
        vibrate: [100, 50, 200], //[vibrate Pause vibrate]

        //badges are supported in android
        badge: "/favicon.ico",

        //tag acts line an ID to stack similar notifications
        tag: "task-id",

        //vibrate and alert the user with notifications with same tag if set to true
        renotify: true,

        //action:"confirm" inside actions acts as an ID for button
        //icon:"/public/favicon.ico" might not support in all devices
        actions: [
          { action: "confirm", title: "Confirm", icon: "favicon.ico" },
          { action: "cancel", title: "Cancel", icon: "favicon.ico" },
        ],
      };

      return registration.showNotification(payload.data.message, options);
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
  // do what you want
  // ...
  console.log("clicked on notificationjdbhchsjkvjklsmklm");
});
