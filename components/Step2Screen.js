import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Step2Screen extends Component {

  static navigationOptions = {
    headerTitle: 'Still A React Native App',
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#000'},
    headerTitleStyle: {color: '#eee'},
    headerBackTitleStyle: {color: '#bbb'}
  };

  handleOnPress = (e) => {
    const { navigate } = this.props.navigation;
    navigate('ProgressScreen', {nextScreen: 'Step3Screen'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          I made this with React Native!
        </Text>
        <Button
          title={"And?"}
          color={"blue"}
          onPress={(e) => this.handleOnPress(e)} />
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
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 24
  }
});
