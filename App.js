import {
  StackNavigator,
} from 'react-navigation';

import ProgressScreen from './components/ProgressScreen';
import MainScreen from './components/MainScreen';
import Step2Screen from './components/Step2Screen';
import Step3Screen from './components/Step3Screen';
import MoneyScreen from './components/MoneyScreen';

const App = StackNavigator({
  Home: { screen: MainScreen },
  Step2Screen: { screen: Step2Screen },
  Step3Screen: { screen: Step3Screen },
  MoneyScreen: { screen: MoneyScreen },
  ProgressScreen: { screen: ProgressScreen }
});

export default App;
