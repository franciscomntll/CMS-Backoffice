import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB-b-DmN66gmSnQFp5oA7RARmcgHgjX5Xo",
  authDomain: "adminbodas.firebaseapp.com",
  projectId: "adminbodas",
  storageBucket: "adminbodas.appspot.com",
  messagingSenderId: "75913806496",
  appId: "1:75913806496:web:a2c8f56185e8b7239e3fc5",
  measurementId: "G-C1MK53CP18"
};

const firebaseClient = initializeApp(firebaseConfig);

firebaseClient
const auth = getAuth()


export { auth };
