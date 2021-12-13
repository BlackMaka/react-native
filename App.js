/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AppTodo from './components/AppTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
//import AsyncStorage from '@react-native-community/async-storage';
import todosStorage from './storages/todosStorage';
const App = () => {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const getTodos = JSON.parse(await AsyncStorage.getItem('todos'));
  //       setTodos(getTodos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   load();
  // }, []);
  // useEffect(() => {
  //   async function save() {
  //     try {
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   save();
  // }, [todos]);

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(item => item.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      id === todo.id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => id !== todo.id);
    setTodos(nextTodos);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AppTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default App;
