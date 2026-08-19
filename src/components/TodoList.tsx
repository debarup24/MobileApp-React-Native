import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
