import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{ color: 'black', fontSize: 30, marginTop: 30 }}>
        useEffect For Unmount Component
      </Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
  let timer = setInterval(() => {
    console.warn('Timer Running');
  }, 2000);
  useEffect(() => {
    // console.log('Student Component Mounted'); //This will run when component is mounted
    return () => clearInterval(timer); // Whenever the component is unmounted the timer will be cleared
    // {
    //   console.log('UseEffect Of Student Component Unmounted');
    // } //So this is how we can unmount a component using useEffect
  });
  return (
    <View>
      <Text style={{ color: 'red', fontSize: 30 }}>Student</Text>
    </View>
  );
};

export default App;
