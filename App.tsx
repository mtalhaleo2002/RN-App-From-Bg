import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// If you get an error here try npm start --clean-cache or yarn start --reset-cache.Basically clear the metro bundler cache.And also restart the development server.

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Sign Up</Text>
    </View>
  );
};

export default App;
