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
  IconWrapper: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    padding: 13,
  },
});

export default function ToolButton() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.IconWrapper}>
        <AddIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconWrapper}>
        <PickIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconWrapper}>
        <LearnedIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconWrapper}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconWrapper}>
        <NightModeIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
