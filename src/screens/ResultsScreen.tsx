import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../types/routes';

export const ResultsScreen: FC<ScreenProps<Routes.Results>> = ({
  route: {
    params: {q},
  },
}) => {
  return (
    <View>
      <Text>results: {q.length}</Text>
    </View>
  );
};
