import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  let data = 22;
  const fruit = (val: string) => {
    data = 20;
    console.log(data);
    // console.log(val);
    // console.log('Fruit Function Pressed');
    // console.warn('Fruit Function Pressed');
  };
  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>Components</Text>
      <Text style={{ color: 'orange', fontSize: 40 }}>{data}</Text>
      <Button
        title="Go to Company Data"
        color={'brown'}
        onPress={() => fruit('1st Button Called')}
      />
      <Button title="Check In" color={'green'} onPress={() => fruit('Hello')} />
    </View>
  );
};

export default App;
