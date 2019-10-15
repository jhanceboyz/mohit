import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


export default class Navigator extends React.Component {
  render() {
    return <Move/>;
  }
}

const Nav = createSwitchNavigator(
    {
      Login: {screen:Login},
      Signup: {screen:Signup},
      Home: {screen:Home},
      //Signup: {screen:Signup},
      //Signup: {screen:Signup},
    },
    {
        initialRouteName: 'Login',
        
    }
    );
  
  const Move = createAppContainer(Nav);
  
  