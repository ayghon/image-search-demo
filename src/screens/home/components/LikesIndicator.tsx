import {useLikesStore} from '../../../stores/likes.store';
import {Text} from 'react-native';
import React from 'react';

export const LikesIndicator = () => {
  const {
    store: {likes},
  } = useLikesStore();

  return <Text>Likes: {likes.length}</Text>;
};
