import React from 'react';
import { Text, View, FlatList } from 'react-native';
import UserData from './components/UserData';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'John',
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      name: 'Doe',
      email: 'dez@gmail.com',
    },
    {
      id: 3,
      name: 'Smith',
      email: 'fgh@gmail.com',
    },
    {
      id: 4,
      name: 'Brown',
      email: 'ijk@gmail.com',
    },
    {
      id: 5,
      name: 'Davis',
      email: 'lmn@gmail.com',
    },
    {
      id: 6,
      name: 'Miller',
      email: 'opq@gmail.com',
    },
    {
      id: 7,
      name: 'Wilson',
      email: 'rst@gmail.com',
    },
    {
      id: 8,
      name: 'Moore',
      email: 'uvw@gmail.com',
    },
    {
      id: 9,
      name: 'Taylor',
      email: 'xyz@gmail.com',
    },
    {
      id: 10,
      name: 'Smith',
      email: 'ddadadadz@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        Component In Loop with Flat List
      </Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserData insertItem={item} />}
        />
      </View>
    </View>
  );
};

export default App;
