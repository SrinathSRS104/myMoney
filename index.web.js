import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const rootTag = document.getElementById('web');
rootTag.innerHTML = '';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag,
});
