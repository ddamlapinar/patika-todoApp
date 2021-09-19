import {StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    // backgroundColor: '#FFCF50',
    // padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    paddingTop: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  tasksWrapper:{
    flexDirection: 'column',
  },
  completedTaskWrapper: {
    width: 160,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  notCompletedTaskWrapper: {
    width: 160,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
