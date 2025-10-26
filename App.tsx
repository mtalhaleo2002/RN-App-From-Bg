import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    backgroundColor: 'blue',
    fontSize: 24,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 10,
  },
  primary: {
    backgroundColor: 'blue',
  },
  success: {
    backgroundColor: 'green',
  },
  warning: {
    backgroundColor: 'gold',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default App;
