import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {marginBottom: 20},
  input: {
    borderWidth: 0.8,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    width: deviceSize.width * 0.8,
  },
});
