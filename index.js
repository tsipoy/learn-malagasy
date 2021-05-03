// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// import { AppRegistry } from "react-native";

// import StorybookUIRoot from "./storybook";

// AppRegistry.registerComponent('learnGasy', () => StorybookUIRoot);
import App from './App';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Homepage from './src/screens/Homepage';
import Navigation from './src/navigation/index';
import Root from './Root';

AppRegistry.registerComponent(appName, () => Root);
AppRegistry.registerComponent(appName, () => Homepage);
AppRegistry.registerComponent(appName, () => Navigation);
