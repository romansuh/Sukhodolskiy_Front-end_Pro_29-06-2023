import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {Button, TextField, Typography, Container, Switch} from '@mui/material';
import {validateRegistrationData} from "../../validation/validateRegistrationData";
import {sumbitRegistrationData} from "../../sumbitting/sumbitRegistrationData";
import {useNavigate} from "react-router-dom";
import "./RegistrationForm.css";

function RegistrationForm() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" className="container">
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    existingUser: true,
                }}
                validate={values => validateRegistrationData(values)}
                onSubmit={(values) => sumbitRegistrationData(values, navigate)}
            >
                {({values}) => (
                    <Form>
                        {!values.existingUser ? <Field
                            className="form-field"
                            as={TextField}
                            id="username"
                            name="username"
                            label="Username"
                            error={true}
                            helperText={<ErrorMessage name="username"/>}
                        /> : ''}
                        <br/>
                        <Field
                            as={TextField}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            className="form-field"
                            error={true}
                            helperText={<ErrorMessage name="email"/>}
                        />
                        <br/>
                        <Field
                            className="form-field"
                            as={TextField}
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            error={true}
                            helperText={<ErrorMessage name="password"/>}
                        />
                        <br/>
                        {!values.existingUser ? <Field
                            className="form-field"
                            as={TextField}
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            error={true}
                            helperText={<ErrorMessage name="confirmPassword"/>}
                        /> : ''}
                        <br/>
                        <Typography variant="body1" className="switch-label">New User?</Typography>
                        <Field
                            as={Switch}
                            id="existingUser"
                            name="existingUser"
                            defaultChecked
                        />
                        <br/>
                        <Button type="submit" variant="contained" color="primary" className="button">
                            Sign {values.existingUser ? 'In' : 'Up'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default RegistrationForm;
