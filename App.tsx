import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState<User[]>([]);

  type User = {
    id: number;
    name: string;
    age: number;
    email: string;
  };

  const getAPIData = async () => {
    console.log('API Call');
    const url = 'http://10.0.2.2:3000/users'; // Emulator ke liye 100% correct
    let result = await fetch(url);
    const json: User[] = await result.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View
      style={{
        paddingTop: 50,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 30 }}>Call JSON Server API</Text>
      {data.map(item => (
        <View
          key={item.id}
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            margin: 10,
            padding: 10,
          }}
        >
          <Text>ID: {item.id}</Text>
          <Text>Name: {item.name}</Text>
          <Text>Age: {item.age}</Text>
          <Text>Email: {item.email}</Text>
        </View>
      ))}
    </View>
  );
};

export default App;
