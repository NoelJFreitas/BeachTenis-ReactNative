import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';
import {InputFormat, formatWith} from './FormatInput';

type FormTextInputProps<FormType extends FieldValues> = TextInputProps &
  UseControllerProps<FormType> & {format?: InputFormat};

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  format,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={format ? formatWith[format](field.value) : field.value}
          autoCapitalize="none"
          errorMessage={fieldState.error?.message || errorMessage}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  );
}
