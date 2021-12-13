import AsyncStorage from '@react-native-community/async-storage';
const key = 'todos';
const todosStorage = {
  async get() {
    try {
      const rowTodos = await AsyncStorage.getItem(key);
      const savedTodos = JSON.parse(rowTodos);
      return savedTodos;
    } catch (error) {
      console.log(error);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  },
};

export default todosStorage;
