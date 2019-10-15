import React, {Component} from 'react';
import { Root, } from 'native-base';
import {View,Text,TextInput,Button,Image} from 'react-native';
import styles from '../Components/design.scss';

export default class Signup extends React.Component {
  render() {
    return (
      <Root>
       <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../IMAGES/logo-putitonline.png')}
        />
      </View>
      <View style={styles.panel}>
        <Text style={styles.heading}>SignUp</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Email"></TextInput>
        <TextInput
          style={styles.inputContainer}
          placeholder="Enter password"></TextInput>
        <TextInput
          style={styles.inputContainer}
          placeholder="Confirm password"></TextInput>
        <Button title="Submit" style={styles.submit} />
      </View>
      <View style={styles.footer}>
        <Text style={{}}>Already have an account..</Text>
        <Button title="Sign IN" onPress={() => this.props.navigation.navigate('Login')}/>
      </View>
       
      </Root>
    );
  }
}

