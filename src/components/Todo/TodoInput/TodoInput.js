import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import styles from './TodoInput.style';
function TodoInput({addNewTodo}) {
  const [text, setText] = useState('');

  function handleChange(val) {
    setText(val);
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Add new todo" onChangeText={handleChange}/>
      <Button title="Add New Todo" onPress={() => addNewTodo(text)} />
    </View>
  );
}
export default TodoInput;
