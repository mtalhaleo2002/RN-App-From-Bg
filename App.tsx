import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home 1st Screen" component={Home} />
        <Stack.Screen name="Login 2nd Screen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = (props: any) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30 }}>Welcome to the Home Screen</Text>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Login 2nd Screen')}
      />
    </View>
  );
};
const Login = (props: any) => {
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

export default App;
