import React from 'react';
import {View, Image} from 'react-native';
import {back_style} from './style';

export function BackButton() {
  return (
    <View>
      <Image
        source={require('../../assets/ic_back.png')}
        resizeMode="contain"
        style={back_style.image}
      />
    </View>
  );
}
