import React from 'react';
import {useAuth} from '../../hooks';
import {Login} from '../../container';
import {Alert, Text} from 'react-native';

export function LoginScreen({navigation}) {
  const {loading, error, response, _, signIn, errorReset} = useAuth();

  function onLogin(email, password) {
    signIn(email, password);
    /*email && password
      ? signIn(email, password)
      : Alert.alert('Error', 'Email or password not be empty!');*/
  }
  function handleRegister() {
    navigation.navigate('Register');
  }
  if (response) {
    console.log(response);
    navigation.navigate('LaunchList');
  }
  if (loading) {
    return <Text>Bekliyorr..</Text>;
  }
  if (error) {
    Alert.alert('Error', error.message);
  }
  return <Login toRegister={handleRegister} onLogin={onLogin} />;
}
