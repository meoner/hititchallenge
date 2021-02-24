import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {sign_style} from './style';
export function SignButton({title, ...otherProps}) {
  return (
    <TouchableOpacity style={sign_style.container} {...otherProps}>
      <Text style={sign_style.title}>{title}</Text>
    </TouchableOpacity>
  );
}
