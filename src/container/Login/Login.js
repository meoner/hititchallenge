import React, {useState} from 'react';
import {View} from 'react-native';
import {Logo, Input, SignButton, ToRegisterButton} from '../../components';
import styles from './style';

export function Login({toRegister, onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Logo />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <SignButton title="LOG IN" onPress={() => onLogin(email, password)} />
      <ToRegisterButton onPress={toRegister} />
    </View>
  );
}
