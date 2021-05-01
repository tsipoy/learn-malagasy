import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

import ListItem from '../components/ListItem/ListItem';

import categoriesData from '../data/categories.json';

const styles = StyleSheet.create({
  ListWrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 17,
    paddingTop: 17,
    paddingEnd: 16,
    paddingStart: 16,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  LearnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LearnText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#06B6D4',
  },
});

function Homepage() {
  const listCategories = categoriesData.categories.map(category => (
    <TouchableOpacity
      onPress={() => alert('EJi')}
      key={category.id}
      style={styles.ListWrapper}>
      <Text>{category.name.en}</Text>
      <View style={styles.LearnWrapper}>
        <Text style={styles.LearnText}>Learn</Text>
        <ListItem />
      </View>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView>
      <ScrollView>{listCategories}</ScrollView>
    </SafeAreaView>
  );
}

export default Homepage;
