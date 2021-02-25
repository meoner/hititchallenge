import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
// for launch list page..
export function TitleDescription({item}) {
  const convertTime = new Date(item.window_start).toString().split('(')[0];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{convertTime}</Text>
    </View>
  );
}
