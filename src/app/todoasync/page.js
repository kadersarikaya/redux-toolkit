"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoAsync,
  fetchTodos,
  removeAllTodos,
  removeTodoAsync,
  toggleTodoStatusAsync,
} from '@/store/todoAsyncSlice';
import { Box } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todoAsync.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (!todoText.trim()) return;
    dispatch(addTodoAsync({ title: todoText }));
    setTodoText('');
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodoAsync(todoId));
  };

  const handleToggleStatus = (todoId, completed) => {
    dispatch(toggleTodoStatusAsync({ id: todoId, completed }));
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };

  return (
    <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
      <div className="">
        <input
        type="text"
        placeholder="Add New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleRemoveAllTodos}>Delete All Todos</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id} </span>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleStatus(todo.id, todo.completed)}
            />
            <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TodoList;
