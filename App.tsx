import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ExStyles from './style';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 40, backgroundColor: 'purple', color: 'white' }}>
        Style In React Native Text 1
      </Text>
      <Text style={styles.textBox}>Style In Text 2</Text>
      <Text style={ExStyles.textBox2}>Style In Text 3</Text>
      <Text style={[styles.boxText, ExStyles.textBox2, { width: 300 }]}>
        Style In Text 4
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 20,
    borderColor: 'green',
    borderWidth: 5,
    borderRadius: 10,
  },
  boxText: {
    fontFamily: 'Arial',
    marginTop: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default App;
