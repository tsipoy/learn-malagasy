import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import BackIcon from '../assets/icons/back-icon.svg';
import NightModeIcon from '../assets/icons/night-mode-icon.svg';
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
  TextareaContainer: {
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
  SolutionsStyle: {
    fontSize: 16,
    lineHeight: 19,
  },
  TextareaWrapper: {
    height: 100,
    marginVertical: 0,
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  TextareaStyle: {
    color: '#111827',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
  },
  ShowNextButton: {
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  NextButtonStyle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    backgroundColor: '#06B6D4',
    paddingTop: 11,
    paddingBottom: 10,
    paddingEnd: 31,
    paddingStart: 27,
    maxWidth: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#06B6D4',
  },
});

function LearningPage({route, navigation}) {
  const [randomOptions, setRandomOptions] = React.useState([]);
  const [showNextButton, setShowNextButton] = React.useState(false);
  const {categories} = route.params;
  const {phrases} = route.params;

  const idCategory = categories.map(categoryId => categoryId.phrasesIds);
  console.log(idCategory);

  // const findingId = phrases.filter(
  //   phrase => (phrase.id = idCategory.includes(idCategory)),
  // );
  // console.log(findingId);

  const categoryName = categories.map(nameCategory => (
    <Text style={styles.CategoryStyle} key={nameCategory.id}>
      {nameCategory.name.en}
    </Text>
  ));

  const randomPhrases =
    phrases[Math.floor(Math.random() * phrases.length)].name;
  const randomFirstSolutions =
    phrases[Math.floor(Math.random() * phrases.length)].name;
  const randomSecondSolutions = randomPhrases;
  const randomThirdSolutions =
    phrases[Math.floor(Math.random() * phrases.length)].name;
  const randomFourthSolutions =
    phrases[Math.floor(Math.random() * phrases.length)].name;

  function getRandomOptions() {
    const randomOption = {
      randomFirstSolutions,
      randomSecondSolutions,
      randomThirdSolutions,
      randomFourthSolutions,
    };
    setRandomOptions(randomOption);
  }

  const handleNextButton = () => {
    setShowNextButton(true);
  };

  React.useEffect(() => {
    getRandomOptions();
  }, [categories]);

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
            <Text> {categoryName}</Text>
          </Text>
        </View>
        <View style={styles.TextareaContainer}>
          <Text style={styles.TitleStyle}>The phrase: </Text>
          <View style={styles.TextareaWrapper}>
            <TextInput
              style={styles.TextareaStyle}
              editable={false}
              value={randomPhrases.mg}
              multiline={true}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TitleStyle}>Pick a solution: </Text>
          <View>
            <TouchableOpacity
              style={styles.ListItemWrapper}
              onPress={() => handleNextButton()}>
              <Text style={styles.SolutionsStyle}>
                {randomFirstSolutions.en}
              </Text>
              <View style={styles.PickWrapper}>
                <Text style={styles.PickText}>Pick</Text>
                <ListItem />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ListItemWrapper}
              onPress={() => handleNextButton()}>
              <Text style={styles.SolutionsStyle}>
                {randomSecondSolutions.en}
              </Text>
              <View style={styles.PickWrapper}>
                <Text style={styles.PickText}>Pick</Text>
                <ListItem />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ListItemWrapper}
              onPress={() => handleNextButton()}>
              <Text style={styles.SolutionsStyle}>
                {randomThirdSolutions.en}
              </Text>
              <View style={styles.PickWrapper}>
                <Text style={styles.PickText}>Pick</Text>
                <ListItem />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ListItemWrapper}
              onPress={() => handleNextButton()}>
              <Text style={styles.SolutionsStyle}>
                {randomFourthSolutions.en}
              </Text>
              <View style={styles.PickWrapper}>
                <Text style={styles.PickText}>Pick</Text>
                <ListItem />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ShowNextButton}>
            {showNextButton && (
              <TouchableOpacity
                style={styles.NextButtonStyle}
                onPress={() => getRandomOptions()}>
                <Text style={{color: '#ffffff'}}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningPage;
