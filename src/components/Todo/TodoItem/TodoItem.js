import React from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import styles from './TodoItem.style';
function TodoItem(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{props.todo}</Text>
        </TouchableOpacity>
    </View>
  );
}
export default TodoItem;
