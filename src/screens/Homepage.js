import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import ListItem from '../components/ListItem/ListItem';
import categoriesData from '../data/categories.json';
import AddIcon from '../assets/icons/add-icon.svg';
import LearnedIcon from '../assets/icons/learned-icon.svg';
import PickIcon from '../assets/icons/pick-icon.svg';
import NightModeIcon from '../assets/icons/night-mode-icon.svg';

import phrasesData from '../data/phrases.json';

// Most of these styles should be in the components, not the home screen. This makes your code really messy
const styles = StyleSheet.create({
  MainContainer: {
    paddingEnd: 23,
    paddingStart: 23,
    paddingTop: 35,
    paddingBottom: 66,
  },
  SelectHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    color: '#111827',
    paddingBottom: 15,
  },
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
  IconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 56,
  },
  AddIconStyle: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    marginEnd: 10,
    padding: 14,
    borderRadius: 50,
  },
  PickIconStyle: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    padding: 13,
    marginEnd: 9,
    marginStart: 9,
    borderRadius: 50,
  },
  LearnedIconStyle: {
    backgroundColor: '#06B6D4',
    paddingTop: 13,
    paddingBottom: 13,
    paddingStart: 9,
    paddingEnd: 9,
    marginEnd: 9,
    alignItems: 'center',
    borderRadius: 50,
  },
  NightModeIconStyle: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    padding: 9,
    marginEnd: 10,
    borderRadius: 50,
  },
  CategoryListWrapper: {
    paddingBottom: 15,
    paddingTop: 15,
  },
  CategoryStyle: {
    fontSize: 16,
    lineHeight: 19,
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

function Homepage({navigation}) {
  const phrases = phrasesData.phrases.map(phrase => phrase);

  const listCategories = categoriesData.categories.map(category => (
    <TouchableOpacity
      title={category.name.en}
      onPress={() => {
        navigation.navigate('Learning', {
          categories: [category],
          phrases: phrases,
        });
      }}
      key={category.id}
      style={styles.ListWrapper}>
      <Text style={styles.CategoryStyle}>{category.name.en}</Text>
      <View style={styles.LearnWrapper}>
        <Text style={styles.LearnText}>Learn</Text>
        <ListItem />
      </View>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.IconWrapper}>
        <TouchableOpacity
          onPress={() => alert('On press')}
          style={styles.AddIconStyle}>
          <AddIcon />
        </TouchableOpacity>
        <TouchableOpacity style>
          <LanguageSwitcherButton />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('On press')}
          style={styles.PickIconStyle}>
          <PickIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('On press')}
          style={styles.LearnedIconStyle}>
          <LearnedIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('On press')}
          style={styles.NightModeIconStyle}>
          <NightModeIcon />
        </TouchableOpacity>
      </View>
      {/* Why don't you use the section heading component here? */}
      <Text style={styles.SelectHeading}>Select a category: </Text>
      <ScrollView style={styles.CategoryListWrapper}>
        {listCategories}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Homepage;
