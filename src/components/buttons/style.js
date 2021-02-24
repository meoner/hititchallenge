import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const sign_style = StyleSheet.create({
  container: {
    backgroundColor: '#a1232a',
    width: deviceSize.width * 0.8,
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});

const register_style = StyleSheet.create({
  container: {
    width: deviceSize.width * 0.8,
  },
  button: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export {sign_style, register_style};
