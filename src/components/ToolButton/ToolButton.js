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
    borderRadius: 50,
    padding: 24,
    margin: 20,
  },
  NightModeIconWrapper: {
    backgroundColor: '#06B6D4',
    borderRadius: 100,
    padding: 16,
    margin: 20,
  },
});

export default function ToolButton() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.AddIconWrapper}>
        <AddIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <PickIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <LearnedIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.NightModeIconWrapper}>
        <NightModeIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
