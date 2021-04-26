import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import WrongIcon from "../../assets/icons/wrong-icon.svg";

const styles = StyleSheet.create({
  ButtonWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  Wrong: {
    fontSize: 16,
    lineHeight: 19,
    color:"#D4068E",
    paddingEnd: 10,
    marginTop: -2,
  }
})

export default function ActionButtonWrong({label}) {

  return (
    <SafeAreaView >
        <TouchableOpacity style={styles.ButtonWrapper}>
            <Text style={styles.Wrong}>{label}</Text>
            <WrongIcon />
        </TouchableOpacity>
    </SafeAreaView>
  );
}