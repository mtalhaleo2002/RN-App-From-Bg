import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import Student from './components/Student';

class App extends Component {
  fruit = () => {
    console.log('Hello from fruit function');
  };
  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'black', fontSize: 30 }}>
          Class Component In React Native
        </Text>
        <TextInput placeholder="Enter Your Name" />
        <Button title="Press" onPress={this.fruit} />
        <Student />
      </View>
    );
  }
}

export default App;
