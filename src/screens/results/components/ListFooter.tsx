import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../../styles/common.styles';

export const ListFooter = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
