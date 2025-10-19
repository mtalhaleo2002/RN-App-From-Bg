import React from 'react';
import { Text, View } from 'react-native';
import CompanyData from './components/CompanyData';

const App = () => {
  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>Components</Text>
      <UserData />
      <CompanyData />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 25 }}>Name: John Doe</Text>
      <Text style={{ fontSize: 25 }}>Age: 32</Text>
      <Text style={{ fontSize: 25 }}>Email: something@gmail.com</Text>
      <CompanyData />
      {/* Component Can be used in another component also */}
    </View>
  );
};

export default App;
