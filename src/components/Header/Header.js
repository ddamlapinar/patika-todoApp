import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
function Header({todos}) {
  const completedTodos = todos.filter(todo => todo.completed === true);
  const notCompletedTodos = todos.filter(todo => todo.completed === false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks </Text>
        {/* <Text>{completedTodos.length} task completed </Text> */}
        <Text style={styles.count}>{notCompletedTodos.length}</Text>
    </View>
  );
}
export default Header;
