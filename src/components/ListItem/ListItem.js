import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ActionLearnButton from '../ActionButton/ActionLearnButton';

const styles = StyleSheet.create({
  ListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListLabel: {
    fontSize: 16,
    lineHeight: 19,
  },
  LearnButtonWrapper: {
    flexDirection: 'row',
  },
  LearnText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: -2,
    color: '#06B6D4',
  },
});

export default function ListItem({label, text}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.ListWrapper}
        onPress={() => alert('Go to list')}>
        <Text style={styles.ListLabel}>{text}</Text>
        <View style={styles.LearnButtonWrapper}>
          <Text style={styles.LearnText}>{label}</Text>
          <ActionLearnButton />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
