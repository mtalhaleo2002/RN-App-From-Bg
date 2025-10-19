import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
const App = () => {
  const users = [
    {
      name: 'Peter',
      id: 1,
    },
    {
      name: 'John',
      id: 2,
    },
    {
      name: 'Mary',
      id: 3,
    },
    {
      name: 'Steve',
      id: 4,
    },
    { name: 'Samantha', id: 5 },
    { name: 'Paul', id: 6 },
    { name: 'Laura', id: 7 },
    { name: 'Tom', id: 8 },
    { name: 'Diana', id: 9 },
    { name: 'Lucy', id: 10 },
    { name: 'Mark', id: 11 },
    { name: 'Nina', id: 12 },
    { name: 'Kevin', id: 13 },
    { name: 'Olivia', id: 14 },
    { name: 'Jake', id: 15 },
  ];
  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        List with Map Functions
      </Text>
      <ScrollView>
        {users.map(userNo => (
          <Text key={userNo.id} style={styles.itemBox}>
            {userNo.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    fontSize: 24,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default App;
