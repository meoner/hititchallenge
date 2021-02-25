import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: deviceSize.width * 0.8,
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: '#a1232a',
    fontWeight: 'bold'
  },
  description: {},
});
