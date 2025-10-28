import { TextInput } from 'react-native';

export const Header = () => {
  return (
    <TextInput
      placeholder="Enter Your Destination"
      style={{
        backgroundColor: 'pink',
        borderRadius: 30,
        paddingHorizontal: 10,
      }}
    />
  );
  // <Button title="Header Btn" />;
};
