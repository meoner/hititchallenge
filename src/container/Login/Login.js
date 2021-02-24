import React from 'react';
import {View} from 'react-native';
import {Logo, Input, SignButton, ToRegisterButton} from '../../components';

export function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo />
      <Input placeholder="E-mail" />
      <Input placeholder="Password" secureTextEntry />
      <SignButton />
      <ToRegisterButton />
    </View>
  );
}
