import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {sign_style} from './style';
export function SignButton() {
  return (
    <TouchableOpacity style={sign_style.container}>
      <Text style={sign_style.title}>LOG IN</Text>
    </TouchableOpacity>
  );
}
