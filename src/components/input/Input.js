import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

export function Input({...otherProps}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        {...otherProps}
        placeholderTextColor="black"
      />
    </View>
  );
}
