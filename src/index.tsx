import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App'
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as firebase from'firebase'

require('dotenv').config()

var firebaseConfig = {
    apiKey:'AIzaSyAn4bf0wW3_JoqCLlldaUMKeXK2RiV1MeI',
    authDomain:'ci-prototype-6f628.firebaseapp.com',
    databaseURL:'https://ci-prototype-6f628.firebaseio.com',
    projectId: 'ci-prototype-6f628',
    storageBucket: 'ci-prototype-6f628.appspot.com',
    messagingSenderId: '209284948223',
    appId: '1:209284948223:web:9f451a8ee50dfd47a36cca'
  };
  
  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
