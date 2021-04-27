import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  TextStyles: {
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

export default function SectionHeading({text}) {
  return (
    <SafeAreaView>
      <Text style={styles.TextStyles}>{text}</Text>
    </SafeAreaView>
  );
}
