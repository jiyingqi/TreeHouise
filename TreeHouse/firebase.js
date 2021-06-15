import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const fire = firebase.initializeApp({
  apiKey: "AIzaSyDU5ajAUeGU92ACicgLopGrpL04uKM_PCA",
  authDomain: "treehouse-28cc0.firebaseapp.com",
  projectId: "treehouse-28cc0",
  storageBucket: "treehouse-28cc0.appspot.com",
  messagingSenderId: "356805186973",
  appId: "1:356805186973:web:703206a07e831161d00b74",
  measurementId: "G-431NXZ7P3L"
});
export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
