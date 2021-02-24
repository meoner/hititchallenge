import React, {useState} from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {Logo, Input, SignButton} from '../../components';
import styles from './style';

export function Register({onRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Logo />
        <Input placeholder="Name" />
        <Input placeholder="Surname" />
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
        <SignButton
          title="SIGN UP"
          onPress={() => onRegister(email, password)}
        />
      </View>
    </ScrollView>
  );
}
