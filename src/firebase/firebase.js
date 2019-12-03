import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyChXLo-GQeyqM6uUFb9Gg0zouDhFJ_aPBs",
    authDomain: "budget-59aea.firebaseapp.com",
    databaseURL: "https://budget-59aea.firebaseio.com",
    projectId: "budget-59aea",
    storageBucket: "budget-59aea.appspot.com",
    messagingSenderId: "911274901534",
    appId: "1:911274901534:web:d0ab5bf9886a442dd96e0f"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.database().ref().set({
//       name: 'Hillary Clinton'
//   });
const database = firebase.database();
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

export { firebase, database as default};