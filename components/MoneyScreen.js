import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MoneyScreen extends Component {

  static navigationOptions = {
    headerTitle: 'React "Make It Rain" Native App',
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#000'},
    headerTitleStyle: {color: '#eee'},
    headerBackTitleStyle: {color: '#bbb'}
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h4}>{"Make It Rain!"}</Text>
        <Image
          resizeMode={"cover"}
          source={require('./../img/mo_money.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 16
  }
});
