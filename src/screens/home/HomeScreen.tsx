import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../../types/routes';
import {SearchForm} from './components/SearchForm';
import {View} from 'react-native';
import {commonStyles} from '../../styles/common.styles';
import {LikesIndicator} from './components/LikesIndicator';

export const HomeScreen: FC<ScreenProps<Routes.Home>> = () => {
  return (
    <View style={commonStyles.container}>
      <SearchForm />
      <LikesIndicator />
    </View>
  );
};
