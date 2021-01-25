import firebase from "firebase/app";
import "firebase/auth";

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB5mPd2LVWHY2rs4TQ81tD1dxBPyZ8AIkI",
    authDomain: "movie-finder-eb3f0.firebaseapp.com",
    projectId: "movie-finder-eb3f0",
    storageBucket: "movie-finder-eb3f0.appspot.com",
    messagingSenderId: "562247744416",
    appId: "1:562247744416:web:f76ba774d4f74b389d82c5",
    measurementId: "G-L16SN86W2Q",
  });
  //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };
