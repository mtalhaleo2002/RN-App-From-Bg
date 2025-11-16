import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [data, setData] = useState<Post[] | null>([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    const response: Post[] = await result.json();
    console.log(result);
    setData(response);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 30 }}>FlatList With API Data</Text>

      {data?.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomColor: 'orange',
                borderBottomWidth: 2,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 30, backgroundColor: 'gray' }}>
                {item.id}
              </Text>
              <Text style={{ fontSize: 24 }}>{item.title}</Text>
              <Text style={{ fontSize: 18 }}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default App;