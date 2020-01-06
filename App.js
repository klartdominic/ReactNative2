/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import {action} from 'typesafe-actions';
// import * as types from './actionTypes';

// export const myAction = payload => action(types.MY_ACTION_TYPE, payload);
import React, { Component } from 'react';
import { ScrollView, Image, Text, StatusBar } from 'react-native';
import Login from './src/screens/Login.js'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    let reactLogoPic = { 
      uri: "https://facebook.github.io/react-native/img/tiny_logo.png", 
      width: 100, 
      height: 100 ,
    };
    return (
      
      <Login/>
    );
  }
}
