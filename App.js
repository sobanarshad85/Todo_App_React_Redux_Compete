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
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

