import React from 'react';
import { View, Text, Button } from 'react-native';

export const Login = (props: any) => {
  console.log('Received params:', props.route.params);
  // That approach is used to receive the parameters sent from the Home screen and this is too long way to do it
  const { userName, age, userId } = props.route.params; // Destructuring assignment
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
      <Text style={{ fontSize: 30 }}>Name: {userName}</Text>
      <Text style={{ fontSize: 30 }}>Age: {age}</Text>
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('Home 1st Screen')}
      />
    </View>
  );
};
