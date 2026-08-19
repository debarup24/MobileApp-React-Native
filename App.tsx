import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { Todo } from './src/types';

const App = (): React.JSX.Element => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log(text);
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        isCompleted: false,
      },
    ]);
  };

  console.log(todoList);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ToDo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    padding: 20,
    backgroundColor: 'slate',
  },
  headerText: {
    backgroundColor: 'pink',
    borderRadius: 18,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    //color: 'red',
  },
});
