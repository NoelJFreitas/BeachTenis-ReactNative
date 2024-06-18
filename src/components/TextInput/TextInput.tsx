import React, {useRef, useState} from 'react';

import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  TextStyle,
  Pressable,
} from 'react-native';

import {Box, BoxProps, Text} from '@components';
import {palette} from '@theme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  boxProps?: BoxProps;
  customOnChange?: (t: string) => void;
  LeftComponent?: React.ReactNode;
}

export function TextInput({
  label,
  errorMessage,
  LeftComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderColor: errorMessage ? 'error' : focus ? 'primary' : 'gray1',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box
          height={60}
          borderWidth={1}
          borderRadius="r15"
          flexDirection="row"
          overflow="hidden"
          paddingLeft="s15"
          paddingTop="s6"
          paddingRight={!LeftComponent ? 's15' : undefined}
          {...$textInputContainer}>
          <Box flex={8}>
            <Text preset="label" color="gray1">
              {label}
            </Text>
            <RNTextInput
              style={$textInputStyle}
              {...rnTextInputProps}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </Box>
          {LeftComponent && (
            <Box flex={2} justifyContent="center" alignItems="center">
              {LeftComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="label" color="redError">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  fontSize: 14,
  color: palette.grayBlack,
  flex: 1,
};
