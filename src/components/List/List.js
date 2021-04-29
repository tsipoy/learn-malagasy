import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SectionHeading from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  CategoryWrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 16,
    paddingStart: 16,
    // marginTop: 15,
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

export default function List({label, text, category}) {
  const [categoriesList, SetCategories] = React.useState([
    'All',
    'Food',
    'Greetings',
    'At the restaurant',
    'An unncessessarly loooong cat... ',
    'Single Words',
    'At the market',
  ]);

  const lists = categoriesList.map(list => {
    return (
      <TouchableOpacity
        style={styles.CategoryWrapper}
        onPress={() => alert('Go to a new page')}>
        <Text style={styles.CategoryStyle}>{list}</Text>
        <ListItem label={label} />
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView>
      <SectionHeading text={text} />
      <View>{lists}</View>
      {/* <TouchableOpacity
        style={styles.CategoryWrapper}
        onPress={() => alert('Go to a new page')}>
        <Text style={styles.CategoryStyle}>{category}</Text>
        <ListItem label={label} />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
