import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Input from './input';
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
    marginTop:'20%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center'
  }
});
