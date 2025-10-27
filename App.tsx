import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, Button } from 'react-native';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={'green'}
        barStyle={'default'} // Bar - Style means font color of status bar is white or dark
        hidden={hide}
      />
      <Button title="Toggle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update Style For Status Bar"
        onPress={() => setBarStyle('dark-content')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'orange',
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
  },
});

export default App;
