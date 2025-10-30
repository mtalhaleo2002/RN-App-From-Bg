import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// Define the shape of the data coming from the API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  // Use the type in useState
  const [data, setData] = useState<Post | null>(null);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = await fetch(url);
    const result: Post = await response.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={{ marginTop: 50, alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>API Call</Text>

      {data && (
        <View>
          <Text style={{ fontSize: 30 }}>{data.title}</Text>
          <Text style={{ fontSize: 30 }}>{data.userId}</Text>
          <Text style={{ fontSize: 30 }}>{data.id}</Text>
          <Text style={{ fontSize: 30 }}>{data.body}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
