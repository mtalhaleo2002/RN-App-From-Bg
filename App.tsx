import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.mainText}>Platform :{Platform.OS}</Text>
      {Platform.OS == 'android' ? (
        <View
          style={{ height: 100, width: 100, backgroundColor: 'blue' }}
        ></View>
      ) : (
        <View
          style={{ height: 100, width: 100, backgroundColor: 'green' }}
        ></View>
      )}

      <Text style={styles.text}>Code Logically</Text>
      <Text style={styles.text}>
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
      <Text style={styles.text}>
        {JSON.stringify(Platform.constants.reactNativeVersion)}
      </Text>
      <Text style={styles.text}>{JSON.stringify(Platform.constants)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'orange',
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'white',
  },
  text: {
    fontSize: 30,
    color: Platform.OS === 'android' ? 'purple' : 'red',
  },
});

export default App;
