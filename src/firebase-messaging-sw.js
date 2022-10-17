import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
export const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BFaHfNo6Cp93RnX9fWKwb5o0sOgIWfo8uvwWZZKddy08fY814uf3Pllr0eMDQShBKIETkUoXRMvSFTNAu-BqyTM",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
