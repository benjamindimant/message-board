import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBpxdxzn3sZh5shHXDDzTNc_qweKJoG5Ao",
  authDomain: "messageboard-2b772.firebaseapp.com",
  databaseURL: "https://messageboard-2b772.firebaseio.com",
  projectId: "messageboard-2b772",
  storageBucket: "messageboard-2b772.appspot.com",
  messagingSenderId: "866739468911"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
