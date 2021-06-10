import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

// The action button should handle all its variants in one component as they are similiar enough. 
import ActionLearnButton from './ActionLearnButton';
import ActionButtonPick from "./ActionButtonPick";
import ActionButtonCorrect from "./ActionButtonCorrect";
import ActionButtonWrong from "./ActionButtonWrong";


storiesOf('Action button', module)
  .addDecorator(story => <View style={{ alignItems: "center", padding: 20 }}>{story()}</View>)
  .add('learn', () => <ActionLearnButton label={"Learn"} />)
  .add('pick', () => <ActionButtonPick label={"Pick"} />)
  .add('correct', () => <ActionButtonCorrect  label={"Correct"} />)
  .add('wrong', () => <ActionButtonWrong label={"Wrong"} />)

