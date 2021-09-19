import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    justifyContent: 'center',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  notCompletedText: {
    textDecorationLine: 'none',
  },
});
