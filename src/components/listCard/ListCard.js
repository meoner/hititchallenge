import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export function ListCard({item}) {
  if (!item) {
  }
  return (
    <Image resizeMode="cover" source={{uri: item.image}} style={styles.image} />
  );
}
