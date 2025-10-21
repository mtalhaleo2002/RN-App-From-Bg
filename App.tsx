import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import Student from './components/Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anil',
      age: 0,
    };
  }

  updateState(val: string) {
    this.setState({ name: val });

    // this.setState({ name: 'React Native', age: 30 });
    // This will update both name and age

    // this.setState({ age: 20 });
    // This is another approach to update state
  }
  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'black', fontSize: 30 }}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={text => this.updateState(text)}
        />
        <Button title="Press" />
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default App;
