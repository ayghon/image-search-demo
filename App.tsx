import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, Routes} from './types/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {HomeScreen} from './src/screens/HomeScreen';
import {ResultsScreen} from './src/screens/results/ResultsScreen';
import {ScreenContainer} from './src/components/ScreenContainer';

const queryClient = new QueryClient();

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ScreenContainer>
          <RootStack.Navigator
            screenOptions={{
              contentStyle: {padding: 20},
            }}
            initialRouteName={Routes.Home}>
            <RootStack.Screen
              name={Routes.Home}
              options={{headerTitle: 'Home'}}
              component={HomeScreen}
            />
            <RootStack.Screen
              name={Routes.Results}
              options={{
                headerTitle: 'Results',
              }}
              component={ResultsScreen}
            />
          </RootStack.Navigator>
        </ScreenContainer>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
