import React, {Component} from 'react';
import {Root} from 'native-base';
import styles from '../Components/design.scss';
import {Text, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <Root>
        <Text style={styles.check}>This is home screen</Text>
      </Root>
    );
  }
}
