import { Text, View, StyleSheet } from 'react-native';

const UserData = (props: {
  insertItem: { id: number, name: string, email: string }, // That's the type for props
}) => {
  const item = props.insertItem;

  return (
    <View style={styles.box}>
      <Text style={styles.innerText}>{item.name}</Text>
      <Text style={styles.innerText}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: 'brown',
    borderWidth: 2,
    marginBottom: 10,
  },
  innerText: {
    fontSize: 24,
    color: 'purple',
    flex: 1,
    textAlign: 'center',
  },
});

export default UserData;
