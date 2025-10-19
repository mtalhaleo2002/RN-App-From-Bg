import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
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
  ];
  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        List with Flat List Component
      </Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.itemBox}>{item.name}</Text>
        )}
      />
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
