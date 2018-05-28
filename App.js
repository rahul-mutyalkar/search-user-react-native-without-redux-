import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import Input from './input'
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (<View style={styles.container}>
      <Text>aaaaaaaaaaaaaaaa</Text>
      <Input/>

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
