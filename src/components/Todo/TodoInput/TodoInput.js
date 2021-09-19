import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import styles from './TodoInput.style';
function TodoInput({addNewTodo}) {
  const [text, setText] = useState('');

  function handleChange(val) {
    setText(val);
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={handleChange}
        />
        <TouchableOpacity onPress={() => addNewTodo(text)}>
          <View style={styles.button}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
export default TodoInput;
