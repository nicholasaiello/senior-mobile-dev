import React, { Component } from 'react';
import { StyleSheet, Text, View, Toolbar } from 'react-native';

export default class AppBar extends Component {

  render() {

    return (
      <Toolbar />
    )

  }

}

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
    height: 48,
    backgroundColor: '#000',
    justifyContent: 'center',
  }
});
