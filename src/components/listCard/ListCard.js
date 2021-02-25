import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export function ListCard({item, ...otherProps}) {
  const hasImage = item.image
    ? {uri: item.image}
    : require('../../assets/list_placeholder.png');
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Image resizeMode="cover" source={hasImage} style={styles.image} />
    </TouchableOpacity>
  );
}
