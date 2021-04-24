// components/Task.js
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  ButtonWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  Learn: {
    fontSize: 16,
    lineHeight: 19,
    color:"#06B6D4",
    paddingEnd: 10,
    marginTop: -2,
  },
})

export default function ActionLearnButton({ label }) {
  return (
    <SafeAreaView >
        <TouchableOpacity style={styles.ButtonWrapper}>
            <Text style={styles.Learn}>{label}</Text>
            <Image
              source={require('../../assets/icons/arrow-right-icon.png')}
            />
        </TouchableOpacity>
    </SafeAreaView>
  );
}