import {Button, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../types/routes';

export const HomeScreen: FC<ScreenProps<Routes.Home>> = ({
  navigation: {navigate},
}) => {
  const goToResults = () => {
    navigate(Routes.Results, {q: 'test'});
  };

  return (
    <View>
      <Text>home</Text>
      <Button title={'Search'} onPress={goToResults} />
    </View>
  );
};
