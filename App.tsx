import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.subModalBody}>
            <Text>Content above the button</Text>
          </View>
          <Button title="Close Dialog" onPress={() => setShow(false)} />
        </View>
      ) : null}

      <Button title="Open Dialog" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subModalBody: {
    backgroundColor: 'white',
    width: 300,
    height: 200,
    padding: 30,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default App;
