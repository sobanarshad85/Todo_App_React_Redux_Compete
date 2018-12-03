/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp'
import store from './src/store/index'
import { Provider } from 'react-redux'

type Props = {};


//Developed by Soban Arshad
  //sobanarshad85@gmail.com
  //+92 303 4645 060
  //https://www.facebook.com/sobanarshad85
  //https://www.twitter.com/sobanarshad85
  //https://www.github.com/sobanarshad85
  //https://www.linkedin.com/in/sobanarshad85


  
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

