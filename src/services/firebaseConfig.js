import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxiO8ous8V_Ux5evwNGLDNvuOB20tdO5Y",
  authDomain: "myfirstprojectfirebase2.firebaseapp.com",
  databaseURL: "https://myfirstprojectfirebase2-default-rtdb.firebaseio.com",
  projectId: "myfirstprojectfirebase2",
  storageBucket: "myfirstprojectfirebase2.appspot.com",
  messagingSenderId: "700002046328",
  appId: "1:700002046328:web:362a90e207f4c8abbcf88d"
};


const firebase = initializeApp(firebaseConfig);

export default firebase

