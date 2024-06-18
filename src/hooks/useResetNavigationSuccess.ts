import {useNavigation} from '@react-navigation/native';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset() {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
        },
      ],
    });
  }

  return {reset};
}
