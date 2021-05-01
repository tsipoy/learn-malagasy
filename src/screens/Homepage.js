import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import ListItem from '../components/ListItem/ListItem';
import categoriesData from '../data/categories.json';
import AddIcon from '../assets/icons/add-icon.svg';
import LearnedIcon from '../assets/icons/learned-icon.svg';
import PickIcon from '../assets/icons/pick-icon.svg';
import NightModeIcon from '../assets/icons/night-mode-icon.svg';

const styles = StyleSheet.create({
  MainContainer: {
    paddingEnd: 23,
    paddingStart: 23,
    paddingTop: 35,
    paddingBottom: 66,
  },
  SelectHeading: {
    fontSize: 18,
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

function Homepage() {
  const navigation = useNavigation();

  const listCategories = categoriesData.categories.map(category => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Learning');
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
        <View style={styles.AddIconStyle}>
          <AddIcon />
        </View>
        <View style>
          <LanguageSwitcherButton />
        </View>
        <View style={styles.PickIconStyle}>
          <PickIcon />
        </View>
        <View style={styles.LearnedIconStyle}>
          <LearnedIcon />
        </View>
        <View style={styles.NightModeIconStyle}>
          <NightModeIcon />
        </View>
      </View>
      <Text style={styles.SelectHeading}>Select a category: </Text>
      <ScrollView style={styles.CategoryListWrapper}>
        {listCategories}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Homepage;
