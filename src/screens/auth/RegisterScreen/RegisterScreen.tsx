import React from 'react';
import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {RegisterSchema, registerSchema} from './registerSchema';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthScreenProps} from '@routes';
import {useAuthSignUp} from '@domain';
import {useResetNavigationSuccess} from '@hooks';

export function RegisterScreen({
  navigation,
}: AuthScreenProps<'RegisterScreen'>) {
  const {control, formState, handleSubmit} = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();

  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: reset,
  });

  async function submitForm(data: RegisterSchema) {
    await signUp(data);
  }

  function navigationToLogin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen justifyContent="center">
      <Text preset="headingLarge" textAlign="center" bold mb="s15">
        Registre-se
      </Text>
      <Text preset="paragraphLarge" textAlign="center" mb="s50" color="gray1">
        Vamos começar com alguns dados!
      </Text>

      <FormTextInput
        control={control}
        name="firstName"
        label="Primeiro Nome"
        placeholder="Digite seu primeiro nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Último Nome"
        placeholder="Digite seu último nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite uma senhar"
        boxProps={{mb: 's20'}}
      />

      <Button
        title="Próximo"
        mt="s30"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isLoading}
      />

      <Text textAlign="center" mt="s30" preset="paragraphSmall">
        Já possui uma conta?{' '}
        <Text preset="paragraphSmall" bold onPress={navigationToLogin}>
          Acesse!
        </Text>
      </Text>
    </Screen>
  );
}
