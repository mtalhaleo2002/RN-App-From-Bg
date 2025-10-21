import React from 'react';
import {
  Text,
  View,
  SectionList,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'John',
      data: ['php', 'laravel', 'codeigniter'],
    },
    {
      id: 2,
      name: 'Doe',
      data: ['reactjs', 'react native', 'vuejs'],
    },
    {
      id: 3,
      name: 'Smith',
      data: ['angular', 'nodejs', 'expressjs'],
    },
  ];

  type FlatDataType =
    | { type: 'header'; name: string }
    | { type: 'item'; item: string };

  const flatData: FlatDataType[] = users.flatMap(section => {
    const header = { type: 'header' as const, name: section.name };
    const items = section.data.map(tech => {
      return { type: 'item' as const, item: tech };
    });
    return [header, ...items];
  });

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <ScrollView>
        <Text
          style={{ fontSize: 25, backgroundColor: 'green', color: 'white' }}
        >
          Section List In React Native
        </Text>
        <FlatList
          data={flatData}
          scrollEnabled={false}
          keyExtractor={(item, index) => {
            const key =
              item.type === 'header'
                ? `header-${item.name}-${index}`
                : `item-${item.item}-${index}`;
            return key;
          }}
          renderItem={({ item }) => {
            if (item.type === 'header') {
              return (
                <Text
                  style={{
                    fontSize: 30,
                    backgroundColor: 'pink',
                    color: 'white',
                  }}
                >
                  {item.name}
                </Text>
              );
            } else {
              return <Text style={styles.text}>{item.item}</Text>;
            }
          }}
        />

        <SectionList
          sections={users}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return <Text style={styles.text}>{item}</Text>;
          }}
          renderSectionHeader={({ section: { name } }) => {
            return <Text style={styles.sectionHeader}>{name}</Text>;
          }}
        />

        <Text
          style={{ fontSize: 30, backgroundColor: 'orange', color: 'white' }}
        >
          Custom Mapping
        </Text>
        {users.map((section, index) => (
          <View key={index}>
            <Text
              style={{ fontSize: 30, backgroundColor: 'blue', color: 'white' }}
            >
              {section.name}
            </Text>
            {section.data.map((tech, i) => (
              <Text key={i} style={styles.text}>
                {tech}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 30,
    backgroundColor: 'purple',
    color: 'white',
  },
  text: {
    fontSize: 20,
    backgroundColor: 'lightgray',
    paddingLeft: 10,
    margin: 10,
  },
});

export default App;
