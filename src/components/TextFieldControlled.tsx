import {TextField} from './TextField';
import React, {FC} from 'react';
import {useController} from 'react-hook-form';

type TextFieldControlledProps = {
  label: string;
  placeholder?: string;
  name: string;
};

export const TextFieldControlled: FC<TextFieldControlledProps> = ({
  label,
  placeholder,
  name,
}) => {
  const {
    field: {onChange, onBlur, value},
    fieldState: {error},
  } = useController({name});

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={error?.message}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};
