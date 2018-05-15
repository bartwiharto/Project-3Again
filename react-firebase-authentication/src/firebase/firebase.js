import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyBzaxRAgDX682aMlrKn0QxmljZyB7XKpDw",
  authDomain: "oauthtry-b2c6f.firebaseapp.com",
  databaseURL: "https://oauthtry-b2c6f.firebaseio.com",
  projectId: "oauthtry-b2c6f",
  storageBucket: "oauthtry-b2c6f.appspot.com",
  messagingSenderId: "881963970495",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};