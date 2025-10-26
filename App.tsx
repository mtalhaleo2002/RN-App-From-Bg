import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const skills = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'C++' },
    { id: 5, name: 'Java' },
  ];

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.wrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? (
                <View style={styles.radioBG}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 30,
    color: 'Black',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 3,
    margin: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBG: {
    height: 28,
    width: 28,
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 3,
  },
});

export default App;
