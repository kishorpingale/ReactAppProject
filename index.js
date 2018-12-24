/** @format */

//AppRegistry.registerComponent(appName, () => App);

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Navigator,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
//Pages
// import Signup from './src/pages/Signup';
// import LoginPage from './src/pages/LoginPage';
// import Account from './src/pages/Main';
import styles from './src/styles/mainstyle.js'
import * as firebase from 'firebase';  // Initialize Firebase
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
export class todo extends Component {
  constructor(props){
    super(props);
    this.state={
      openingPage: null
    }
  }
  componentWillMount(){
    //Check if userData is stored on device else open LoginPage
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let openingPage = {openingPage: LoginPage};
      if(user_data != null){
        this.setState({openingPage:Account});
      }else{
        this.setState(openingPage);
      }
    });
  }
  render() {
    if (this.state.openingPage) {
      return (
        // Take the user to whatever page we set the state to.
        // We will use a transition where the new page will slide in from the Left.
        <Navigator
          initialRoute={{component: this.state.openingPage}}
          configureScene={() => {
            return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              // Pass the navigator the the page so it can navigate as well.
              // Pass firebaseApp so it can make calls to firebase.
              return React.createElement(route.component, { navigator, firebaseApp});
            }
        }} />
      );
    } else {
      return (
        // Our default loading view while waiting to hear back from firebase
        <View style={styles.container}>
          <ToolbarAndroid title="Login" />
          <View style={styles.body}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      );
}
  }
}
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent('todo', () => todo);
