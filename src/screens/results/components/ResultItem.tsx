import React, {FC} from 'react';
import {Image} from '../../../api';
import {Button, Image as RNImage, View} from 'react-native';
import {useLikesStore} from '../../../stores/likes.store';

type ResultItemProps = {item: Image};

export const ResultItem: FC<ResultItemProps> = ({
  item: {image, tags, media_id},
}) => {
  const {
    store: {likes},
    actions: {likeMedia},
  } = useLikesStore();
  const isItemLiked = likes.includes(media_id);

  const pressHandler = () => {
    likeMedia({id: media_id});
  };

  return (
    <View
      style={{
        height: 240,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: isItemLiked ? 'yellow' : undefined,
      }}>
      <RNImage
        source={{uri: image, height: 200}}
        defaultSource={require('../../../../assets/placeholder.png')}
        alt={tags.toString()}
        resizeMode="cover"
      />
      {!isItemLiked && <Button title="Like" onPress={pressHandler} />}
    </View>
  );
};
