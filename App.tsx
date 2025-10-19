import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [create, setCreate] = useState('John Doe');
  let data = 'Sam Johnson';

  const testUpdate = () => {
    setCreate('Jane Smith Olsen');
    // data = 'Michael Brown';
  };

  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>{create}</Text>
      <Text style={{ color: 'brown', fontSize: 40 }}>{data}</Text>

      <Button title="Update The State!" onPress={testUpdate} />
    </View>
  );
};

export default App;
