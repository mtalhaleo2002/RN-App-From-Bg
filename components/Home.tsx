import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = (props: any) => {
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
      <Button
        title="Login"
        onPress={() =>
          props.navigation.navigate('Login 2nd Screen', {
            userName,
            age,
            Id: userId,
          })
        }
      />
    </View>
  );
};
