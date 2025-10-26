import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{ color: 'black', fontSize: 30, marginTop: 30 }}>
        Show Hide Component
      </Text>
      <Button title="Show User Component" onPress={() => setShow(true)} />
      <Button title="Hide User Component" onPress={() => setShow(false)} />{' '}
      {/* Alternative to two buttons we can use single toggle button */}
      <Button title="Toggle Component" onPress={() => setShow(!show)} />{' '}
      {/* Toggle Button !show means if show is true make it false and vice versa. */}
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{ color: 'purple', fontSize: 30 }}>User Component</Text>
    </View>
  );
};

export default App;
