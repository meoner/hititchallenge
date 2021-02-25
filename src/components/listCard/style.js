import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems:'center',
  },
  image: {
    borderRadius: 14,
    width: deviceSize.width * 0.8,
    height: deviceSize.height * 0.3,
  },
});
