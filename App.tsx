import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
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
  ];

  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        Component In Loop with Flatlist
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

const UserData = (props: {
  insertItem: { id: number; name: string; email: string };
}) => {
  const item = props.insertItem;

  return (
    <View style={styles.box}>
      <Text style={styles.innerText}>{item.name}</Text>
      <Text style={styles.innerText}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: 'brown',
    borderWidth: 2,
    marginBottom: 10,
  },
  innerText: {
    fontSize: 24,
    color: 'purple',
    flex: 1,
    textAlign: 'center',
  },
});

export default App;
