import React from 'react';
import {
  Button,
  FormTextInput,
  Screen,
  FormDateTimePiker,
  Text,
} from '@components';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NewGameSchema, newGameSchema} from './newGameSchema';

export function NewGameScreen() {
  const {control, formState, handleSubmit} = useForm<NewGameSchema>({
    resolver: zodResolver(newGameSchema),
    defaultValues: {
      gameName: '',
      shortDescription: '',
      description: '',
      local: '',
      vacancies: 0,
      date: new Date().getTime(),
    },
    mode: 'onChange',
  });

  async function submitForm(newGame: NewGameSchema) {
    console.log(newGame);
  }

  return (
    <Screen scrollable>
      <Text textAlign="center" bold preset="paragraphLarge" mt="s10" mb="s30">
        Novo Jogo
      </Text>

      <FormTextInput
        control={control}
        name="gameName"
        label="Nome do jogo"
        placeholder="Nome do jogo"
        boxProps={{mb: 's15'}}
      />
      <FormTextInput
        control={control}
        name="shortDescription"
        label="Descrição curta"
        placeholder="Descrição curta"
        boxProps={{mb: 's15'}}
      />
      <FormTextInput
        control={control}
        name="description"
        label="Descrição do jogo"
        multiline
        placeholder="Descrição do jogo"
        boxProps={{mb: 's15'}}
      />
      <FormTextInput
        control={control}
        name="local"
        label="Local do jogo"
        placeholder="Local do jogo"
        boxProps={{mb: 's15'}}
      />
      <FormTextInput
        control={control}
        name="vacancies"
        label="Quantidade de vagas"
        placeholder="Quantidade de vagas"
        boxProps={{mb: 's15'}}
        keyboardType="numeric"
      />

      <FormDateTimePiker
        control={control}
        label="Data do jogo"
        name="date"
        mb="s30"
      />
      <Button
        title="Cadastrar"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
