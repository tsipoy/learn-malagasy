import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('List item', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('learn item', () => <ListItem label={'Learn'} text={'All'} />)
  .add('pick item', () => <ListItem label={'Pick'} text={'All'} />);
