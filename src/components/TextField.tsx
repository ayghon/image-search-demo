import React, {FC} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

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
    <View>
      <View>
        <Text>{label}</Text>
      </View>
      <TextInput placeholder={label} {...inputProps} />
      <View>
        <Text>{error}</Text>
      </View>
    </View>
  );
};
