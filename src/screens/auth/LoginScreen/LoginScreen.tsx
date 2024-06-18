import React, {useState} from 'react';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  FormPasswordInput,
  Screen,
  Text,
  Button,
  Switch,
  Box,
  SocialButtons,
} from '@components';
import {FormTextInput} from '@components';

import {LoginSchema, loginSchema} from './loginSchema';
import {useAuthSignIn} from '@domain';

export function LoginScreen() {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const [rememberMe, setRememberMe] = useState(true);
  const {signIn, isLoading} = useAuthSignIn({onSuccess: () => {}});

  function handleSetRememberMe() {
    setRememberMe(prev => !prev);
  }

  async function submitForm({email, password}: LoginSchema) {
    await signIn({email, password});
  }

  function navigateToSignUp() {
    // navigation.reset({
    //   index: 1,
    //   routes: [{name: 'SignUpZeroScreen'}],
    // });
  }

  return (
    <Screen justifyContent="center">
      <Text preset="headingLarge" textAlign="center" bold mb="s15">
        Bem-vindo
      </Text>
      <Text preset="headingMedium" textAlign="center" mb="s50" color="gray1">
        Faça login para continuar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu email"
        label="Email"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginVertical="s25">
        <Switch activeState={rememberMe} onPress={handleSetRememberMe} />
        <Text preset="paragraphSmall" semibold>
          Esqueceu a senha?
        </Text>
      </Box>

      <Button
        title="Acessar"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        loading={isLoading}
      />
      <SocialButtons
        socialNetworkNames={['apple', 'facebook', 'google']}
        marginVertical="s30"
        centerLabel="ou acesse através"
      />

      <Text textAlign="center" mt="s30" preset="paragraphSmall">
        Não possui uma conta?{' '}
        <Text preset="paragraphSmall" bold onPress={navigateToSignUp}>
          Registre-se
        </Text>
      </Text>
    </Screen>
  );
}
