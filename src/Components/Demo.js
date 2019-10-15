import React from 'react';
import {Text,View} from 'react-native';

import styles from './design.scss'

export default class Demo extends React.Component{
  render(){
      return(
          <>
         <View style={styles.header}></View>
         <Text style={styles.inputContainer}></Text>
          </>
      );
  }
}