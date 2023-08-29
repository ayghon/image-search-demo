import React, {FC} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const LikeButton: FC<
  Omit<PressableProps, 'children'> & {liked: boolean}
> = ({onPress, liked}) => {
  if (liked) {
    return (
      <View style={styles.indicator}>
        <Icon name="star" size={24} color="#FBC02D" />
      </View>
    );
  }

  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.button_container, styles.button]
          : styles.button_container
      }
      onPress={onPress}>
      <Text style={styles.button_text}>Like</Text>
      <Icon name="star" size={24} color="#fff" style={styles.button_icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  indicator: {
    alignSelf: 'flex-end',
    padding: 8,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button_icon: {
    paddingStart: 4,
  },
  button: {
    opacity: 0.8,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
  },
  button_container: {
    backgroundColor: '#FBC02D',
    padding: 8,
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
});
