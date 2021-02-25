import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

export function Info() {
  const data = useSelector((state) => state.data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LAUNCH ID</Text>
      <Text style={styles.desc}>{data.id}</Text>
      <Text style={styles.title}>STATUS</Text>
      <Text style={styles.desc}>{data.status.description}</Text>
    </View>
  );
}
