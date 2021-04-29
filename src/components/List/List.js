import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
} from 'react-native';

import SectionHeading from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';

import data from '../../data/categories.json';

const styles = StyleSheet.create({
  ListWrapper: {
    marginTop: 15,
  },
  CategoryWrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 16,
    paddingStart: 16,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  CategoryStyle: {
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 17,
    paddingTop: 17,
  },
});

export default function List({label, text}) {
  let n;
  const mappedData = data.categories.map(item => (
    <TouchableOpacity
      key={item.id}
      style={styles.CategoryWrapper}
      onPress={() => alert('Go to a new page')}>
      <Text style={styles.CategoryStyle} key={item.id}>
        {item.name.en}
      </Text>
      <ListItem label={label} />
    </TouchableOpacity>
  ));
  return (
    <SafeAreaView>
      <SectionHeading text={text} />
      <ScrollView style={styles.ListWrapper}>{mappedData}</ScrollView>
    </SafeAreaView>
  );
}
