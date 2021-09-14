import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import todos_data from './todos.json';
import Header from './components/Header';
import TodoItem from './components/Todo/TodoItem/TodoItem';
import TodoInput from './components/Todo/TodoInput/TodoInput';
function App() {
  const [todos, setTodos] = useState(todos_data);

  const renderItem = ({item}) => <TodoItem todo={item.title} />;

  function addNewTodo(todo) {
    setTodos([
      ...todos,
      {title: todo, id: Math.random().toString(), completed: false},
    ]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todo_list}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TodoInput addNewTodo={addNewTodo} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
