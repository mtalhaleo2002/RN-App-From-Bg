import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return <WebView source={{ uri: 'https://www.google.com/' }} />;
};

const styles = StyleSheet.create({});

export default App;
