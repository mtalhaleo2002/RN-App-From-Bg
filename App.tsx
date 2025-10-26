import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log('Data is Updated');
  }, [data]); // only when data changes

  useEffect(() => {
    console.log('Count is Updated');
  }, [count]); // only when count changes

  return (
    <View>
      <Text style={{ color: 'black', fontSize: 30, marginTop: 30 }}>
        useEffects as componentDidUpdate
      </Text>
      <Text style={{ color: 'purple', fontSize: 30 }}>Count: {count}</Text>
      <Text style={{ color: 'purple', fontSize: 30 }}>Data: {data}</Text>

      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Counter" onPress={() => setData(data + 1)} />
    </View>
  );
};

export default App;
