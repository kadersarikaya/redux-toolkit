"use client"
import React from 'react';
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo, removeAll } from "@/store/todoSyncSlice";
import { Box } from '@mui/material';

const TodoSync = () => {
    const todos = useSelector((state) => state.todoSync.todos)
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('')

    const handleAddTodo = () => {
        if(!todoText.trim()) return;
        const newTodo = {
            id: Date.now(),
            title: todoText,
            completed: false,
        }
        dispatch(addTodo(newTodo));
        setTodoText('');
    };

    const handleRemove = (todoId) => {
        dispatch(removeTodo(todoId));
    };

    const handleRemoveAll = () => {
        dispatch(removeAll())
    }

    const handleToggleStatus = (todoId) => {
        dispatch(toggleTodo({id: todoId}))
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
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => handleToggleStatus(todo.id)}
                        />
                        <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
                        <button onClick={() => handleRemove(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {todos.length>0 && <button onClick={handleRemoveAll} >Delete All</button>}
        </Box>
    );
};

export default TodoSync;
