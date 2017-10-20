import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Step3Screen extends Component {

  static navigationOptions = {
    headerTitle: 'React App, Native App',
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#000'},
    headerTitleStyle: {color: '#eee'},
    headerBackTitleStyle: {color: '#bbb'}
  };

  handleOnPress = (e) => {
    const { navigate } = this.props.navigation;
    navigate('ProgressScreen', {nextScreen: 'MoneyScreen'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>
          Now I'm a Senior Mobile App Developer!
        </Text>
        <Button
          title={"So?"}
          color={"red"}
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
  h2: {
    fontWeight: 'bold',
    fontSize: 26,
    margin: 24
  }
});
