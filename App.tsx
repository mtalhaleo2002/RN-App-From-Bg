import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  const headerAction = () => {
    console.log('Header button pressed');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#c51faeff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
        }} // This is the approach to style all the screens at once
      >
        <Stack.Screen
          name="Home 1st Screen"
          component={Home}
          options={{
            headerLeft: () => (
              // <View style={{ flexShrink: 1 }}>
              //   <TouchableOpacity
              //     onPress={() => console.log('Button pressed')}
              //     style={{
              //       backgroundColor: 'blue',
              //       paddingVertical: 8,
              //       paddingHorizontal: 15,
              //       borderRadius: 6,
              //       alignSelf: 'flex-end',
              //     }}
              //   >
              //     <Text
              //       style={{
              //         color: 'white',
              //         fontSize: 16,
              //         fontWeight: 'bold',
              //       }}
              //     >
              //       Left
              //     </Text>
              //   </TouchableOpacity>
              // </View>

              <Button title="Left" onPress={headerAction} />
            ),
            headerRight: () => <Header />,
            //
            title: 'My Home',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#d8c5c5ff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Login 2nd Screen"
          component={Login}
          options={
            {
              // headerTitle: () => (
              // <View style={{ flexShrink: 1 }}>
              //   <TouchableOpacity
              //     onPress={() => console.log('Login Button pressed')}
              //     style={{
              //       backgroundColor: 'blue',
              //       paddingVertical: 8,
              //       paddingHorizontal: 15,
              //       borderRadius: 6,
              //       alignSelf: 'flex-start',
              //     }}
              //   >
              //     <Text
              //       style={{
              //         color: 'white',
              //         fontSize: 16,
              //         fontWeight: 'bold',
              //       }}
              //     >
              //       Left
              //     </Text>
              //   </TouchableOpacity>
              // </View>
              // ),  //That approach can be use to button on left side of header also ,that approach especiallly useful because you can edit Button controls more easily
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <TextInput
      placeholder="Enter Your Destination"
      style={{
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 10,
      }}
    />
  );
  // <Button title="Header Btn" />;
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
