import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.warn('Component Mounted');
    console.log('Component Mounted');
  }, []); // That method can be called only once when the component is mounted

  return (
    <View>
      <Text style={{ color: 'black', fontSize: 30, marginTop: 30 }}>
        Life Cycle with Use Effect {count}
      </Text>

      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
