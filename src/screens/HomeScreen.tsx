import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../types/routes';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {TextFieldControlled} from '../components/TextFieldControlled';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '../components/Button';
import {commonStyles} from '../styles/common.styles';

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
    <FormProvider {...methods}>
      <KeyboardAvoidingView
        behavior={Platform.select({android: undefined, ios: 'padding'})}
        keyboardVerticalOffset={100}
        style={commonStyles.container}>
        <TextFieldControlled
          name="q"
          label="Search term"
          placeholder="Search images on listly"
        />
        <View style={styles.submitSection}>
          <Button onPress={methods.handleSubmit(goToResults)}>Search</Button>
        </View>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  submitSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
