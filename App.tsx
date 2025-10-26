import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedRadio == 1 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedRadio == 2 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
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
