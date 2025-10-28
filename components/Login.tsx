import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export const Login = (props: any) => {
  console.log('Received params:', props.route.params);
  // That approach is used to receive the parameters sent from the Home screen and this is too long way to do it
  const { userName, age, userId } = props.route.params; // Destructuring assignment
  const [inputValue, setInputValue] = useState('');
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Text
        style={{ fontSize: 15, paddingHorizontal: 20, textAlign: 'center' }}
      >
        That text input message can be sent to Home Page{' '}
      </Text>
      <TextInput
        style={{
          height: 50,
          width: '80%',
          borderColor: 'gray',
          borderWidth: 1,
          marginVertical: 20,
          paddingHorizontal: 10,
          color: 'black',
        }}
        placeholder="Enter something"
        placeholderTextColor={'black'}
        onChangeText={text => setInputValue(text)}
      />

      <Text style={{ fontSize: 30 }}>Name: {userName}</Text>
      <Text style={{ fontSize: 30 }}>Age: {age}</Text>
      <Text style={{ fontSize: 30 }}>ID: {userId}</Text>
      <Button
        title="Go To Home"
        onPress={() =>
          props.navigation.navigate('Home 1st Screen', {
            message: inputValue,
          })
        }
      />
    </View>
  );
};
