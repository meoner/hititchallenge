import React from 'react';
import {View, Image} from 'react-native';

export function OneLaunch({data}) {
  const hasImage = data.image
    ? {uri: data.image}
    : require('../../assets/in_placeholder.png');

  return (
    <View>
      <Image
        source={hasImage}
        resizeMode="cover"
        style={{height: 200, width: 400}}
      />
    </View>
  );
}
