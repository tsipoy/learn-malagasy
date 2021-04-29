import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import List from './List';

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('categories', () => (
    <List text={'Select a category:'} label={'Learn'} />
  ));
