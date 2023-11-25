"use client"
import React from 'react';
import { logOutUser } from '@/store/userSlice';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => {
            router.push('/');
          }}
        >
          Anasayfa
        </Button>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => {
            router.push('/counter');
          }}
        >
          Counter
        </Button>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => {
            router.push('/todoasync');
          }}
        >
          TodoAsync
        </Button>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => {
            router.push('/todosync');
          }}
        >
          TodoSync
        </Button>
        {isLoggedIn ? (
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            onClick={() => dispatch(logOutUser())}
          >
            Log out
          </Button>
        ) : (
          <>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => {
                router.push('/login');
              }}
            >
              Login
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => {
                router.push('/signup');
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
