import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export function FavButton({isFav, ...otherProps}) {
  function icon() {
    return isFav ? (
      <Image
        source={require('../../assets/star_fill.png')}
        resizeMode="contain"
        style={{height: 33, width: 32}}
      />
    ) : (
      <Image
        source={require('../../assets/star_empty.png')}
        resizeMode="contain"
        style={{height: 33, width: 32}}
      />
    );
  }

  return (
    <TouchableOpacity style={{alignItems: 'flex-end'}} {...otherProps}>
      {icon()}
    </TouchableOpacity>
  );
}
