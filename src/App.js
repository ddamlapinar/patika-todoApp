import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import todos_data from './todos.json';
import Header from './components/Header';
import TodoItem from './components/Todo/TodoItem/TodoItem';
import TodoInput from './components/Todo/TodoInput/TodoInput';
function App() {
  const [todos, setTodos] = useState(todos_data);

  const renderItem = ({item}) => (
    <TodoItem
      todo={item}
      toggleComplete={() => toggleComplete(item.id)}
      deleteTodo={() => deleteTodo(item.id)}
    />
  );

  function addNewTodo(todo) {
    setTodos([
      ...todos,
      {title: todo, id: Math.random().toString(), completed: false},
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  }
  function deleteTodo(id) {
    // setTodos(todos.filter(todo => todo.id !== id));
    Alert.alert(
      'Delete Task',
      'Are you sure you sure you want to delete this task?',
      [
        {
          text: 'NO',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => setTodos(todos.filter(todo => todo.id !== id)),
        },
      ],
    );
  }
  return (
    <View style={styles.container}>
      <Header todos={todos} />
      <View style={styles.todo_list}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={todo => todo.id}
        />
      </View>
      <TodoInput addNewTodo={addNewTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  todo_list: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;
