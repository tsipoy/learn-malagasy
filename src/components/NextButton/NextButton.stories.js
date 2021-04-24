
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import NextButton from './NextButton';

// const EnableButton = () => {
//   const [enable, setEnable ] = React.useState("");
//   return (
//     <NextButton
//         title={"Add"} 
//         disabled={false}
//     />
//   )
// }

storiesOf('NextButton', module)
  .addDecorator(story => <View style={{padding: 20, alignItems: "center"}}>{story()}</View>)
  .add('Enable button', () => <NextButton title={"Add"} disabled={false}/>)
  .add('Disable button', () => <NextButton title={"Add"} disabled={true}/>)

