// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  StaticTextarea: {
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
  },
  StaticTextareaColour: {
      color: "#111827",
  }
})

export default function Phrases({}) {


  return (
    <SafeAreaView >
      <TextInput 
        style={styles.StaticTextarea}
        editable={false}
        value='rua ambin’ny folo'
        numberOfLines={3}
        multiline={true}
      />
    </SafeAreaView>
  );
}