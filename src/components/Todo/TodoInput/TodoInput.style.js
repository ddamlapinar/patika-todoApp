import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  inputWrapper: {
    position: 'absolute',
    bottom: -400,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 300,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
});
