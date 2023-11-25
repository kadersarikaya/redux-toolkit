"use client"
import React from 'react';
import { registerUser } from "@/store/userSlice";
import {useDispatch, useSelector} from 'react-redux'
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir email girin').required('Email zorunlu'),
    password: Yup.string().required('Şifre zorunlu'),
});

const Register = () => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values));
        },
    });

    const user = useSelector((state) => state.user.user);
    const isRegistered = useSelector((state) => state.user.isRegistered)
    return (
        <Container component="main" maxWidth="xs">
            <p>Use this: email:eve.holt@reqres.in, password:pistol </p>
            {isRegistered && user ? <Box>
            <h1>Kayıt Başarılı!</h1>
         </Box> : <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Adresi"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Şifre"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                    {error && <Typography color="error">Hata: {error}</Typography>}
                </Box>
            </Box>}
        </Container>
    )
};

export default Register;
