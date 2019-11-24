import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App'
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as firebase from'firebase'

// require('dotenv').config()

// var firebaseConfig = {
//     apiKey: process.env.FIREBASE_APIKEY,
//     authDomain: process.env.FIREBASE_AUTHDOMAIN,
//     databaseURL:  process.env.FIREBASE_DATABASE_URL,
//     projectId:  process.env.FIREBASE_PROJET_ID,
//     storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId:  process.env.FIREBASE_APP_ID
//   };
  
//   firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
