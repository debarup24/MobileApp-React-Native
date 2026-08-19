import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text) {
      onAddTodo(text);
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new ToDo"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={handleAddTodo}>
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#94a3b8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 10,
  },
  addTodoBtn: {
    backgroundColor: '#0369a1',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
