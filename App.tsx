import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.warn('normal Press')}
        onLongPress={() => console.warn('longPress open gya')}
        onPressIn={() => console.warn('Press In')}
        onPressOut={() => console.warn('Press Out')}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    marginTop: 40,
    fontSize: 24,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 4,
    borderRadius: 10,
  },
});

export default App;
