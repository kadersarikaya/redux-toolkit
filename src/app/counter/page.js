"use client"
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '@/store/counterSlice'
import { Box } from '@mui/material';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
       <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
       <button
         aria-label="Increment value"
         onClick={() => dispatch(increment())}
       >
         Increment
       </button>
       <span>{count}</span>
       <button
         aria-label="Decrement value"
         onClick={() => dispatch(decrement())}
       >
         Decrement
       </button>
     </Box> 
    );
};

export default Counter;
