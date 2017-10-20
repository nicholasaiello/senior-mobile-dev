import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class ProgressScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Wait for it...',
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#000'},
    headerTitleStyle: {color: '#eee'},
    headerBackTitleStyle: {color: '#bbb'}
  };

  render() {

    setTimeout(() => {
      const { navigate, state } = this.props.navigation;
      navigate(state.params.nextScreen, {});
    }, 1000);

    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
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
  }
});
