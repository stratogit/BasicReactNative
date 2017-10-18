/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';
import Component4 from './src/components/Component4';
import Component5 from './src/components/Component5';
import Component6 from './src/components/Component6';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

// renderScene(route, navigator){
//   switch (route.id) {
//     case 'component5':
//       return (<Component5 navigator={navigator} title="component5" />)
//     case 'component6':
//       return (<Component6 user={route.user} navigator={navigator} title="component6" />)
//   }
// }

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>

          <Text style={styles.welcome}>
            Welcome to My super app
         </Text>

          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <View style={styles.lineDivision} />
          <Component1 message="hello from Component 1" />
          <View style={styles.lineDivision} />
          <Component2 />
          <View style={styles.lineDivision} />
          <Component3 />
          <View style={styles.lineDivision} />
          <Component4 />
          <View style={styles.lineDivision} />

          <Text style={styles.instructions}>
            {instructions}
          </Text>

        </View>

      </View>
      // <Navigator
      //   initialRoute={{ id: 'component5' }}
      //   renderScene={this.renderScene}
      //   configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      // />
          

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    // marginBottom: 5,
  },
  lineDivision: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
