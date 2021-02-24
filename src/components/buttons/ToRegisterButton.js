import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {register_style} from './style';

export function ToRegisterButton() {
  return (
    <View style={register_style.container}>
      <TouchableOpacity style={register_style.button}>
        <Text style={register_style.title}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
