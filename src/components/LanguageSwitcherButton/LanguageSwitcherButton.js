import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import SwitcherButtonIcon from '../../assets/icons/switching-languages.svg';

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  ButtonWrapper: {
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    paddingBottom: 11,
    paddingTop: 11,
    paddingEnd: 10,
    paddingStart: 10,
    borderRadius: 24,
  },
  LanguagesStyle: {
    fontSize: 13,
    lineHeight: 16,
    color: '#ffffff',
  },
  SwitcherIconWrapper: {
    paddingEnd: 10,
    paddingStart: 10,
  },
});
export default function LanguageSwitcherButton() {
  // the languages should be passed as props (aks: does the component need to know that the languages are English and Malagasy)
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.ButtonWrapper}
        onPress={() => alert('Switch languages')}>
        <Text style={styles.LanguagesStyle}>EN</Text>
        <View style={styles.SwitcherIconWrapper}>
          <SwitcherButtonIcon />
        </View>
        <Text style={styles.LanguagesStyle}>MA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
