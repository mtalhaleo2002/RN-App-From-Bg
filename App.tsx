import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  let name = 'Bruce Wayne';
  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>
        Props In React Native {name}
      </Text>
      <User name={name} />
    </View>
  );
};

const User = (props: { name: string }) => {
  console.log(props.name);
  return (
    <View style={{ backgroundColor: 'purple' }}>
      <Text style={{ color: 'white', fontSize: 30 }}>{props.name}</Text>
    </View>
  );
};

export default App;
