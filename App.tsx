import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'violet',
    flex: 2,
    flexDirection: 'row',
  },
  box2: {
    backgroundColor: 'seagreen',
    flex: 1,
  },
  box3: {
    backgroundColor: 'purple',
    flex: 1,
  },
  innerBox1: {
    backgroundColor: 'pink',
    flex: 1,
    margin: 5,
  },
  innerBox2: {
    backgroundColor: 'green',
    flex: 1,
    margin: 5,
  },
  innerBox3: {
    backgroundColor: 'red',
    flex: 1,
    margin: 5,
  },
});

export default App;
