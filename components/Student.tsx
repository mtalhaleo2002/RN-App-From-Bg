import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Student extends Component {
  render() {
    console.log(this.props.name);
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'purple', fontSize: 30 }}>{this.props.name}</Text>
      </View>
    );
  }
}

export default Student;
