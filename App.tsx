import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const App = () => {
  const saveAPIdata = async () => {
    const data = { name: 'sam', age: 35, email: 'sam@test.com' };

    const url = 'http://192.168.2.9:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <View style={{ paddingTop: 50, backgroundColor: '#f0f0f0', flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Post API Call</Text>
      <Button title="Save Data to API" onPress={saveAPIdata} />
    </View>
  );
};

export default App;
