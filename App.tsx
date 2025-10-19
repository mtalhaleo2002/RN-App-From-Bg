import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30, backgroundColor: 'green', color: 'white' }}>
        Handle text Input
      </Text>
      <Text style={{ fontSize: 30, backgroundColor: 'brown', color: 'white' }}>
        Your Name Is : {name}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Clear Text Input" onPress={() => setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 30,
    backgroundColor: 'purple',
    color: 'white',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default App;
