import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens/HomeScreen';
import {ResultsScreen} from './src/screens/ResultsScreen';
import {RootStackParamList, Routes} from './types/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.Home}>
        <RootStack.Screen
          name={Routes.Home}
          options={{headerTitle: 'Search'}}
          component={HomeScreen}
        />
        <RootStack.Screen
          name={Routes.Results}
          options={{headerTitle: 'Results'}}
          component={ResultsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
