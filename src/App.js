import React from 'react';
import {Root} from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Navigator from './Components/Navigator';
import Signup from './Components/Signup';
import Home from './Components/Home';


export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Signup />
      </Root>
    );
  }
}
