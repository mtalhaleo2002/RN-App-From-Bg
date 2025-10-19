import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [name, setName] = useState('Smith Johnson');
  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>
        Props In React Native {name}
      </Text>
      <Button title="Change Name" onPress={() => setName('Batman')} />
      <User name={name} age={29} />
    </View>
  );
};

const User = (props: { name: string; age: any }) => {
  console.log(props.name);
  return (
    <View style={{ backgroundColor: 'purple' }}>
      <Text style={{ color: 'white', fontSize: 30 }}>{props.name}</Text>
      <Text style={{ color: 'white', fontSize: 30 }}>{props.age}</Text>
    </View>
  );
};

export default App;
