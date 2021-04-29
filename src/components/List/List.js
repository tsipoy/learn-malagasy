import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import SectionHeading from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';

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
  return (
    <SafeAreaView>
      <SectionHeading text={text} />
      <FlatList
        style={styles.ListWrapper}
        data={[
          {
            key: '01',
            category: 'All',
          },
          {
            key: '02',
            category: 'Food',
          },
          {
            key: '03',
            category: 'Greetings',
          },
          {
            key: '04',
            category: 'At the restaurant',
          },
          {
            key: '05',
            category: 'An unncessessarly loooong cat... ',
          },
          {
            key: '06',
            category: 'Single Words',
          },
          {
            key: '07',
            category: 'At the market',
          },
        ]}
        renderItem={({item}) => (
          <TouchableOpacity
            keyExtractor={(item, index) => item.key}
            style={styles.CategoryWrapper}
            onPress={() => alert('Go to a new page')}>
            <Text style={styles.CategoryStyle}>{item.category}</Text>
            <ListItem label={label} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
