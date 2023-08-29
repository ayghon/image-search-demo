import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, Routes} from './types/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {HomeScreen} from './src/screens/HomeScreen';
import {ResultsScreen} from './src/screens/results/ResultsScreen';

const queryClient = new QueryClient();

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
