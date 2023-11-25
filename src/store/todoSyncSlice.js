// src/redux/todoSyncSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
};

const saveToLocalStorage = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const initialState = {
  todos: loadFromLocalStorage(),
};

export const todoSyncSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(state.todos);
    },
    removeAll: (state) => {
      state.todos = [];
      saveToLocalStorage(state.todos);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todoToggle = state.todos.find((todo) => todo.id === id);
      if (todoToggle) {
        todoToggle.completed = !todoToggle.completed;
        saveToLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, removeAll } = todoSyncSlice.actions;
export default todoSyncSlice.reducer;
