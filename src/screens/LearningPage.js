import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import BackIcon from '../assets/icons/back-icon.svg';
import NightModeIcon from '../assets/icons/night-mode-icon.svg';
import InputTextarea from '../components/InputTextarea/PhraseTextarea';
import ListItem from '../components/ListItem/ListItem';

const styles = StyleSheet.create({
  MainContainer: {
    paddingEnd: 23,
    paddingStart: 23,
    paddingTop: 35,
  },
  TitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    color: '#111827',
    paddingBottom: 15,
  },
  CategoryStyle: {
    fontWeight: 'normal',
  },
  IconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 66,
  },
  BackIconStyle: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    paddingEnd: 16,
    paddingStart: 16,
    marginEnd: 10,
    borderRadius: 50,
  },
  NightModeIconStyle: {
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    marginEnd: 10,
    padding: 8,
    borderRadius: 50,
  },
  SwitchLanguagesStyle: {
    marginEnd: 10,
  },
  ListItemWrapper: {
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
  TextareaWrapper: {
    paddingBottom: 37,
  },
  PickWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PickText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#06B6D4',
  },
});

function LearningPage({route, navigation}) {
  const {categoriesId} = route.params;

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.IconsWrapper}>
          <TouchableOpacity
            style={styles.BackIconStyle}
            onPress={() => navigation.navigate('Home')}>
            <BackIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.NightModeIconStyle}
            onPress={() => alert('On press')}>
            <NightModeIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SwitchLanguagesStyle}>
            <LanguageSwitcherButton />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.TitleStyle}>
            Category:
            <Text style={styles.CategoryStyle}> {categoriesId.name.en}</Text>
          </Text>
        </View>
        <View style={styles.TextareaWrapper}>
          <Text style={styles.TitleStyle}>The phrase: </Text>
          <InputTextarea editable={false} />
        </View>
        <View>
          <Text style={styles.TitleStyle}>Pick a solution: </Text>
          <TouchableOpacity
            style={styles.ListItemWrapper}
            onPress={() => alert('Picked')}>
            <View style={styles.PickWrapper}>
              <Text style={styles.PickText}>Pick</Text>
              <ListItem />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningPage;
