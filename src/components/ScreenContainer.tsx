import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {commonStyles} from '../styles/common.styles';

export const ScreenContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaView style={[commonStyles.container, styles.container_background]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container_background: {
    backgroundColor: 'white',
  },
});
