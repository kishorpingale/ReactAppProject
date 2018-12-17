/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Initialize Firebase
import * as firebase from 'firebase';  
  var fireBaseconfig = {
    apiKey: "AIzaSyBFSJKGr09r7ClLm7nAwnaYCYTjilJZpwc",
    authDomain: "firstreactproject-7ef22.firebaseapp.com",
    databaseURL: "https://firstreactproject-7ef22.firebaseio.com",
    projectId: "firstreactproject-7ef22",
    storageBucket: "firstreactproject-7ef22.appspot.com",
    messagingSenderId: "780705490129"
  };
  // firebase.initializeApp(fireBaseconfig);
const firebaseApp = firebase.initializeApp(fireBaseconfig);

AppRegistry.registerComponent(appName, () => App);
