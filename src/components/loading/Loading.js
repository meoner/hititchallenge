import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export function Loading() {
  return (
    <View style={{marginTop: 20, alignItems: 'center'}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}
