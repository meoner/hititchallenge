import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {
    width: deviceSize.width * 0.5,
    height: deviceSize.height * 0.2,
  },
});
