import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

type TextFieldProps = TextInputProps & {
  label: string;
  error?: string;
};

export const TextField: FC<TextFieldProps> = ({
  label,
  error,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} placeholder={label} {...inputProps} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  text: {
    color: '#000',
  },
  input: {
    padding: 12,
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  error: {
    color: 'red',
  },
});
