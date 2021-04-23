import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import InputTextarea from '../InputTextarea/Input-textarea';
import StaticTextarea from "../StaticTextarea/Static-textarea"


storiesOf('Phrases', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Input textarea', () => <InputTextarea placeholder= {'Enter here'}/>)
  .add('Static textarea', () => <StaticTextarea />)


