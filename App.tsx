import React from 'react';
import { Text, View } from 'react-native';

let name = 'John';
const App = () => {
  let name2 = 'JSX In Variable 2';
  let lastName = 'Doe';
  const age = 25;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>JSX in React Native</Text>
      <Text style={{ fontSize: 35 }}>{name}</Text>
      <Text style={{ fontSize: 38 }}>{name2}</Text>
      <Text style={{ fontSize: 40 }}>{age}</Text>
      <Text style={{ fontSize: 43 }}>{10 * 20}</Text> {/* Math Operations */}
      <Text style={{ fontSize: 46 }}>{name + ' ' + lastName}</Text>{' '}
      {/* 2 variables merged  */}
      <Text style={{ fontSize: 49 }}>
        {name} {lastName}
      </Text>
      {/* 2 variables merged from a different approach  */}
      <Text style={{ fontSize: 22 }}>
        {age == 25 ? 'Age is 25' : 'Age is not 25'}
      </Text>
      {/* Condition Check */}
      <Text style={{ fontSize: 22 }}>
        {age < 25 ? `You're an underage` : `You're eligible`}
      </Text>
      {/* Again Condition Check  */}
      {age >= 30 ? (
        <Text style={{ fontSize: 22, color: 'red' }}>You can vote</Text>
      ) : (
        <Text style={{ fontSize: 22, color: 'green' }}>You cannot vote</Text>
      )}
    </View>
  );
};

export default App;
