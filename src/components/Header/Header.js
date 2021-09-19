import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
function Header({todos}) {
  const completedTodos = todos.filter(todo => todo.completed === true);
  const notCompletedTodos = todos.filter(todo => todo.completed === false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today's tasks </Text>
      <View style={styles.tasksWrapper}>
        <Text>{completedTodos.length} task completed </Text>
        <Text>{notCompletedTodos.length} task not completed yet </Text>
      </View>
    </View>
  );
}
export default Header;
