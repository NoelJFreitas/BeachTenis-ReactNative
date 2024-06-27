import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {DateTimePikerProps, DateTimePiker} from '@components';

type FormDateTimePikerProps<FormType extends FieldValues> = Omit<
  DateTimePikerProps,
  'value'
> &
  UseControllerProps<FormType>;

export function FormDateTimePiker<FormType extends FieldValues>({
  control,
  name,
  label,
  rules,
  ...boxProps
}: FormDateTimePikerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field}) => (
        <DateTimePiker value={field.value} label={label} {...boxProps} />
      )}
    />
  );
}
