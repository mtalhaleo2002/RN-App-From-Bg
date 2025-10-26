import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello This is Talha</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 55,
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
  },
});

export default App;
