import Firebase from 'firebase';

// Initialize Firebase
const fireBaseconfig = {
  apiKey: 'AIzaSyDKcLAPHQMLOJQ37pHMUGHecfIjTqEyUFY',
  authDomain: 'activity-tracker-a3fe9.firebaseapp.com',
  databaseURL: 'https://activity-tracker-a3fe9.firebaseio.com',
  projectId: 'activity-tracker-a3fe9',
  storageBucket: 'activity-tracker-a3fe9.appspot.com',
  messagingSenderId: '901708571430'
};
firebase.initializeApp(config);

export default firebaseConfig;
