import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = async (): Promise<void> => {
    try {
      const response = await fetch('http://192.168.2.9:3000/users');
      const json: User[] = await response.json();
      setUsers(json);
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  };

  const getNextId = (): number => {
    if (users.length === 0) return 1;

    const numericIds = users.map(u => Number(u.id)).filter(n => !isNaN(n));

    return Math.max(...numericIds) + 1;
  };

  const addUser = async (): Promise<void> => {
    const newUser: User = {
      id: getNextId(),
      name: 'Charlie',
      age: 28,
      email: 'abc@xyz.com',
    };

    try {
      const response = await fetch('http://192.168.2.9:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const result: User = await response.json();
      console.log('Saved:', result);

      getUsers();
    } catch (error) {
      console.log('Post Error:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 30 }}>Custom Auto ID (TypeScript Safe)</Text>

      <Button title="Add User" onPress={addUser} />

      {users.map(user => (
        <View
          key={user.id}
          style={{
            margin: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: 'grey',
          }}
        >
          <Text>ID: {user.id}</Text>
          <Text>Name: {user.name}</Text>
          <Text>Age: {user.age}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
