import {NativeStackScreenProps} from '@react-navigation/native-stack';

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
