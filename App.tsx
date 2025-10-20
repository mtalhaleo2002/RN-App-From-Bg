import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const App = () => {
  const users = [
    {
      id: 1,
      name: 'Sam',
    },
    { id: 2, name: 'Anil' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Doe' },
    { id: 5, name: 'Sunny' },
    { id: 6, name: 'Fing' },
    { id: 7, name: 'Tony' },
    { id: 8, name: 'Jago' },
    { id: 9, name: 'Lara' },
    { id: 10, name: 'Mia' },
  ];
  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}>
        How To Make Grid
      </Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={styles.item}>Sam</Text>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    padding: 5,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    height: 120,
    width: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
