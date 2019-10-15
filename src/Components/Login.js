import React, {Component} from 'react';

import {Root} from 'native-base';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../Components/design.scss';
import Navigator from './Navigator';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.mainview}>
        
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../IMAGES/logo-putitonline.png')}
          />
        </View>
        <View style={styles.panel}>
          <Text style={styles.heading}>SignIN</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Enter Email"></TextInput>
          <TextInput
            style={styles.inputContainer}
            placeholder="Enter password"></TextInput>
          <Button title="Submit" style={styles.submit} />
        </View>
        <View style={styles.footer}>
          <Text style={{}}>Don't have an account..</Text>
          <Button title="Sign UP" onPress={() => this.props.navigation.navigate('Signup')} style={{fontSize: 50}} />
        </View>
        
      </View>
    );
  }
}
