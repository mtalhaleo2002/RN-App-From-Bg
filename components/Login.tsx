import React from 'react';
import { View, Text, Button } from 'react-native';

export const Login = (props: any) => {
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
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('Home 1st Screen')}
      />
    </View>
  );
};
