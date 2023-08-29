import React, {FC} from 'react';
import {Image} from '../../../api';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useLikesStore} from '../../../stores/likes.store';
import {LikeButton} from '../../../components/LikeButton';

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
      }}>
      <ImageBackground
        source={{uri: image}}
        style={styles.image}
        defaultSource={require('../../../../assets/placeholder.png')}
        alt={tags.toString()}
        resizeMode="cover">
        <LikeButton onPress={pressHandler} liked={isItemLiked} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {height: 200},
});
