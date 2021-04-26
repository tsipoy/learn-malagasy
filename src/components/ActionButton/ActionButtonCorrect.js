import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import CorrectIcon from "../../assets/icons/correct-icon.svg"

const styles = StyleSheet.create({
  ButtonWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  Correct: {
    fontSize: 16,
    lineHeight: 19,
    color:"#06D440",
    paddingEnd:10,
    marginTop: -2,
  }
})

export default function ActionButtonCorrect({label}) {

  return (
    <SafeAreaView >
        <TouchableOpacity style={styles.ButtonWrapper}>
            <Text style={styles.Correct}>{label}</Text>
            <CorrectIcon />
        </TouchableOpacity>
    </SafeAreaView>
  );
}