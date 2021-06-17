import firebase from 'firebase';
import 'firebase/firestore'

import {
    API_KEY,
    AUTH_DOMAIN,
    STORAGE_BUCKET,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} from '@env'

const firebaseConfig = {
  apiKey: "AIzaSyDU5ajAUeGU92ACicgLopGrpL04uKM_PCA",
  authDomain: "treehouse-28cc0.firebaseapp.com",
  projectId: "treehouse-28cc0",
  storageBucket: "treehouse-28cc0.appspot.com",
  messagingSenderId: "356805186973",
  appId: "1:356805186973:web:703206a07e831161d00b74",
  measurementId: "G-431NXZ7P3L"
};

const firebaseConfig1 = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default Firebase
