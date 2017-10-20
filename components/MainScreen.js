import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class MainScreen extends Component {

  static navigationOptions = {
    headerTitle: 'First React Native App',
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#000'},
    headerTitleStyle: {color: '#eee'},
    headerBackTitleStyle: {color: '#bbb'}
  };

  handleOnPress = (e) => {
    const { navigate } = this.props.navigation;
    navigate('ProgressScreen', {nextScreen: 'Step2Screen'});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.h1}>
          Hey, guess what!
        </Text>
        <Button
          title={"What?"}
          color={"green"}
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
