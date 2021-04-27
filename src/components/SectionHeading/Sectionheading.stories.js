import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section heading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('select a category', () => (
    <SectionHeading text={'Select a category:'} />
  ));
