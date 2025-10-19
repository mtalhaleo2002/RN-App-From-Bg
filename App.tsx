import React from 'react';
import { Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        Hello, World! <Text style={{ fontSize: 60 }}>Talha</Text>
      </Text>
      <Button title="Press Me" color={'red'} />
      <View>
        <Text>Nested View Content</Text>
      </View>
    </View>
  );
};

export default App;
