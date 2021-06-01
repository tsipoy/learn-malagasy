// components/Task.js
import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  // There are lots of duplications here, consider merging styles
  EnableButton: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    backgroundColor: '#06B6D4',
    color: '#ffffff',
    paddingTop: 11,
    paddingBottom: 10,
    paddingEnd: 31,
    paddingStart: 27,
    maxWidth: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#06B6D4',
  },
  DisabledButton: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#06B6D4',
    paddingTop: 11,
    paddingBottom: 10,
    paddingEnd: 31,
    paddingStart: 27,
    maxWidth: 90,
    borderRadius: 50,
    borderColor: '#06B6D4',
    borderWidth: 1,
  },
});

export default function NextButton({title, disabled}) {
  // What happens on press should be a prop as well
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => console.log('Next Page')}
        disabled={disabled}>
        <Text style={disabled ? styles.DisabledButton : styles.EnableButton}>
          {title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
