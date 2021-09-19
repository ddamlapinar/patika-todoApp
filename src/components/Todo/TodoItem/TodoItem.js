import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './TodoItem.style';
function TodoItem(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.toggleComplete}
        onLongPress={props.deleteTodo}>
        <Text
          style={
            props.todo.completed
              ? styles.completedText
              : styles.notCompletedText
          }>
          {props.todo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default TodoItem;
