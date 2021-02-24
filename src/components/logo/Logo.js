import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

export function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo_hitit.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}
