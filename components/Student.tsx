import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Student extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'purple', fontSize: 30 }}>
          Student Component In React Native
        </Text>
      </View>
    );
  }
}

export default Student;
