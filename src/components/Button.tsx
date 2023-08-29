import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';

type ButtonProps = Omit<PressableProps, 'children'> & {children: string};

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.button, styles.button_pressed] : [styles.button]
      }
      {...rest}>
      <Text style={styles.button_text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitSection: {
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  button_pressed: {
    opacity: 0.8,
  },
});
