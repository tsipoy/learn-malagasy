import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import LanguageSwitcherButton from './LanguageSwitcherButton';

storiesOf('LanguageSwitcherButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('language switcher button', () => <LanguageSwitcherButton />);
