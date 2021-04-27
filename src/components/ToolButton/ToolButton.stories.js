import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton';

storiesOf('Tool button', module)
  .addDecorator(story => (
    <View style={{alignItems: 'center', padding: 20}}>{story()}</View>
  ))
  .add('Add button', () => <ToolButton />);
