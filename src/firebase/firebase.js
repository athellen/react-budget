import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
//   firebase.database().ref().set({
//       name: 'Hillary Clinton'
//   });
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// database.ref().set({
//     name: 'Alia Bhatt',
//     location: {
//         city:'Goa',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Data failed to save', e);
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// });
// database.ref().update({
//     'location/city': 'Delhi'
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });

export { firebase, googleAuthProvider, database as default };
