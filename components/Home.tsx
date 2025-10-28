import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = (props: any) => {
  console.log('Received Text Input params:', props.route.params);

  const userName = 'John Doe';
  const age = 30;
  const userId = 12345;
  return (
    <View
      style={{
        backgroundColor: 'purple',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30, color: 'white' }}>
        Welcome to the Home Screen
      </Text>
      <Text style={{ fontSize: 25, color: 'yellow' }}>
        message: {props.route.params?.message || 'No message received'}
      </Text>
      <Button
        title="Login"
        onPress={() =>
          props.navigation.navigate('Login 2nd Screen', {
            userName,
            age,
            userId,
          })
        }
      />
    </View>
  );
};
