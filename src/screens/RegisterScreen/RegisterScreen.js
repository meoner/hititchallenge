import React from 'react';
import {useAuth} from '../../hooks';
import {Register} from '../../container';
import {Alert, Text} from 'react-native';
import {Loading} from '../../components';

export function RegisterScreen({navigation}) {
  const {loading, error, response, signUp, _, errorReset} = useAuth();

  function onRegister(email, password) {
    email && password
      ? signUp(email, password)
      : Alert.alert('Error', 'Email or password not be empty!');
  }
  if (response) {
    navigation.navigate('Login');
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    Alert.alert('Error', error.message);
    errorReset();
  }
  return <Register onRegister={onRegister} />;
}
