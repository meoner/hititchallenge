import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  image: {
    width: deviceSize.width * 0.7,
    height: deviceSize.height * 0.3,
  },
});
