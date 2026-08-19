import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  console.log(todo, 'from todo item comp.');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText}>
        <Text style={[styles.text, todo.isCompleted && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    backgroundColor: '#f1f5f9',
    padding: 8,
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btnContainer: { flexDirection: 'row', gap: 8 },
  editBtn: {
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 2,
  },
  deleteBtn: {
    backgroundColor: '#f43f5e',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
});
