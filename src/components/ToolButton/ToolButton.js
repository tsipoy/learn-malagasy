import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import AddIcon from '../../assets/icons/add-icon.svg';
import PickIcon from '../../assets/icons/pick-icon.svg';
import LearnedIcon from '../../assets/icons/learned-icon.svg';
import BackIcon from '../../assets/icons/back-icon.svg';
import NightModeIcon from '../../assets/icons/night-mode-icon.svg';

const styles = StyleSheet.create({
  AddIconWrapper: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    borderRadius: 50,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 20,
  },
  PickIconWrapper: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    borderRadius: 50,
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 20,
  },
  LearnedIconWrapper: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    borderRadius: 50,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 20,
  },
  BackIconWrapper: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    borderRadius: 50,
    padding: 18,
    marginBottom: 20,
  },
  NightModeIconWrapper: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    borderRadius: 50,
    padding: 13,
    marginBottom: 20,
  },
});

export default function ToolButton() {
  // The tool button component should only ever return one button which is dependent on the props passed to the function, not five buttons. The variant and onPress should be props
  // It appears you don't even use this component in your home and learning screen. Why not? That is why we built the components first.
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.AddIconWrapper}
        onPress={() => alert('Do something')}>
        <AddIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.PickIconWrapper}
        onPress={() => alert('Do something')}>
        <PickIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.LearnedIconWrapper}
        onPress={() => alert('Do something')}>
        <LearnedIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BackIconWrapper}
        onPress={() => alert('Do something')}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NightModeIconWrapper}
        onPress={() => alert('Do something')}>
        <NightModeIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
