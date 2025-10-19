import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        Simple Form In React Native
      </Text>
      <TextInput
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Enter User Email Address"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.textInput}
      />

      <View style={{ marginBottom: 10 }}>
        <Button
          title="Get Details"
          color={'blue'}
          onPress={() => setDisplay(true)}
        />
      </View>

      <Button title="Clear Details" onPress={resetForm} />

      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 20, color: 'purple' }}>
              User Name: {name}
            </Text>
            <Text style={{ fontSize: 20, color: 'purple' }}>
              User Password: {password}
            </Text>
            <Text style={{ fontSize: 20, color: 'purple' }}>
              User Email Address: {email}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    margin: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'white',
  },
});

export default App;
