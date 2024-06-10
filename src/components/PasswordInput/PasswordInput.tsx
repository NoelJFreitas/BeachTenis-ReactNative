import React, {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export interface PasswordInputProps extends TextInputProps {}

export function PasswordInput({...props}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      LeftComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          size={25}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
