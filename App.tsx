import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={styles.main}>
      {/* <ActivityIndicator size="large" color="blue" /> */}
      <ActivityIndicator size={300} color="blue" animating={show} />
      {show ? <ActivityIndicator size={300} color="blue" /> : null}
      <Button title="Activity Indicator" onPress={displayLoader} />
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
});

export default App;
