// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyComponent({label, placeholder}) {

  console.log(label);
  return (
    <SafeAreaView >
      <Text>{label}</Text>
      <TextInput placeholder="Type a new word" />
    </SafeAreaView>
  );
}