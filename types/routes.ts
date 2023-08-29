import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationProp} from '@react-navigation/native';

export enum Routes {
  Home = 'Home',
  Results = 'Results',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Results]: {q: string};
};

export type ScreenProps<TRoute extends Routes> = NativeStackScreenProps<
  RootStackParamList,
  TRoute
>;

export type UseNavigationProps = NavigationProp<RootStackParamList>;
