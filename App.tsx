import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <Text style={{ color: 'black', fontSize: 30, marginTop: 30 }}>
          Responsive UI with Flex
        </Text>
      </View>
      <Button title="Click Me" />
      <Button title="Click Me" />
    </View>
  );
};

export default App;
