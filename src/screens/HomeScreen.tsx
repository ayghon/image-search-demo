import {Button, View} from 'react-native';
import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../types/routes';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {TextFieldControlled} from '../components/TextFieldControlled';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type SearchFormValues = {
  q: string;
};

const searchValidationSchema = Yup.object().shape({
  q: Yup.string().required(),
});

export const HomeScreen: FC<ScreenProps<Routes.Home>> = ({
  navigation: {navigate},
}) => {
  const methods = useForm<SearchFormValues>({
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {q: ''},
    resolver: yupResolver(searchValidationSchema),
  });

  const goToResults: SubmitHandler<SearchFormValues> = ({q}) => {
    navigate(Routes.Results, {q});
  };

  return (
    <View>
      <FormProvider {...methods}>
        <TextFieldControlled
          name="q"
          label="Search term"
          placeholder="Search images on listly"
        />
        <Button title="Search" onPress={methods.handleSubmit(goToResults)} />
      </FormProvider>
    </View>
  );
};
