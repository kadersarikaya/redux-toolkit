import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
    const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
    );
    return res.data;
});

export const addTodoAsync = createAsyncThunk('todo/addTodo', async (todo)=> {
    const res = await axios.post(
        'https://jsonplaceholder.typicode.com/todos/',
        todo
    );
    return res.data;
});

export const removeTodoAsync = createAsyncThunk(
    'todo/remove',
    async (todoId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        return todoId;
    }
);

export const toggleTodoStatusAsync = createAsyncThunk(
    'todo/toggleStatus', 
    async ({ id, completed }) => {
    try {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: !completed,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error toggling todo status: ' + error.message);
    }
});

export const todoAsyncSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        removeAllTodos: (state) => {
            state.todos = [];
        }, 
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(removeTodoAsync.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
            .addCase(toggleTodoStatusAsync.fulfilled, (state, action) => {
                const updatedTodo = action.payload;
                const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
                if (index !== -1) {
                    state.todos[index] = updatedTodo;
                }
            })
    },
});

export const { removeAllTodos } = todoAsyncSlice.actions;
export default todoAsyncSlice.reducer;
