import React, {FC} from 'react';
import {Image} from '../../../api';
import {Image as RNImage, View} from 'react-native';

type ResultItemProps = {item: Image};

export const ResultItem: FC<ResultItemProps> = ({item: {image, tags}}) => {
  return (
    <View
      style={{
        height: 220,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <RNImage
        source={{uri: image, height: 200}}
        defaultSource={require('../../../../assets/placeholder.png')}
        alt={tags.toString()}
        resizeMode="cover"
      />
    </View>
  );
};
