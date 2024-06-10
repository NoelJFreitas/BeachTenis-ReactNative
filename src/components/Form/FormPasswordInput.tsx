import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

type FormPasswordInputProps<FormType extends FieldValues> = PasswordInputProps &
  UseControllerProps<FormType>;

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: FormPasswordInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => {
        return (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            {...passwordInputProps}
          />
        );
      }}
    />
  );
}
