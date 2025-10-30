import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Sign Up" component={SignUp} />
          <Tab.Screen name="Other" component={Other} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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

const Other = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Other</Text>
    </View>
  );
};

export default App;
