// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  TextInputArea: {
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    paddingTop: 41,
    paddingBottom: 35,
    marginTop: 15,
    marginBottom: 25,
    marginStart: 23,
    marginEnd: 23,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  }
})

export default function Phrases({placeholder}) {
  const [ inputValue, setInputValue ] = React.useState("");
  return (
    <SafeAreaView >
      <TextInput 
        style={styles.TextInputArea}
        placeholder={placeholder}
        placeholderTextColor="rgba(17, 24, 39, 0.5)"
        value={inputValue}
        onChangeText={(textInputValue) => setInputValue(textInputValue)}
        numberOfLines={3}
        multiline={true}
        editable={true}
      />
    </SafeAreaView>
  );
}